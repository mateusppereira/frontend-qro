import { faCheckSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Label } from 'elements';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { Component } from 'react';
import theme from 'styles/theme';
import { sort } from 'utils';
import { Buttons, CloseButton, Container, Content, Filter, Filters, Header, Result, ResultHeader, Scholarship, Scholarships, Section, SortSelect } from './styles';

class ModalAdd extends Component {
  state = {
    scholarshipsFiltered: [],
    filter: {
      sortBy: 'university.name',
      city: '',
      course: '',
      price: 0,
      kind: '',
    },
    selecteds: []
  }

  componentWillMount() {
    this.setState({
      scholarships: sort(this.state.filter.sortBy, this.props.scholarships, true),
    });
  }

  componentWillReceiveProps() {
    const prices = this.props.scholarships.map(item => item.price_with_discount);
    this.setState({
      pricealt: Math.max(...prices),
      filter: {
        ...this.state.filter,
        price: Math.max(...prices),
      },
      selecteds: this.props.selecteds,
      scholarshipsFiltered: sort(this.state.filter.sortBy, this.props.scholarships, true)
    });
  }

  selectSholarship = id => {
    let selecteds = [];
    if (this.state.selecteds.indexOf(id) >= 0) {
      selecteds = this.state.selecteds.filter(item => item !== id);
    } else {
      selecteds = [...this.state.selecteds, id];
    }
    
    this.setState({ selecteds });
  }

  applyFilter = ({ price_with_discount, campus, course }) => {
    const { filter } = this.state;
    
    if (filter.kind && course.kind !== filter.kind)
      return false;
    if (price_with_discount > filter.price)
      return false;
    if (filter.city && filter.course)
      return (campus.city === filter.city && course.name === filter.course)
    if (filter.city && campus.city === filter.city)
      return true
    if (filter.course && course.name === filter.course)
      return true
    if (!filter.city && !filter.course)
      return true
    return false;
  }

  setFilter = (prop, value) => {
    this.setState({ filter: { ...this.state.filter, [prop]: value } }, () => {
      const filtered = this.props.scholarships.filter(this.applyFilter);

      this.setState({ scholarshipsFiltered: sort(this.state.filter.sortBy, filtered, true) });
    });
  }

  renderScholarship = (scholarship, i) => (
    <Scholarship key={i} selected={this.state.selecteds.indexOf(scholarship.id) >= 0}>
      <Section flex={1}>
        <FontAwesomeIcon
          icon={faCheckSquare}
          color={this.state.selecteds.indexOf(scholarship.id) >= 0 ? theme.bluePrimary : theme.gray}
          onClick={() => this.selectSholarship(scholarship.id)}
          size="4x"
        />
      </Section>
      <Section flex={3}>
        <img alt="logo" src={scholarship.university.logo_url} />
      </Section>
      <Section flex={5}>
        <Label bold color={theme.bluePrimary}>{scholarship.course.name}</Label>
        <Label fontSize={1.2}>{scholarship.campus.city}</Label>
      </Section>
      <Section flex={3}>
        <Label textAlign="end" padding="0 0 .5rem 0">
          Bolsa de <Label bold color={theme.green}>{scholarship.discount_percentage}%</Label>
        </Label>
        <Label textAlign="end" bold color={theme.green}>R$ {scholarship.price_with_discount}/mês</Label>
      </Section>
    </Scholarship>
  )

  render() {
    const cities = [...new Set(this.props.scholarships.map(item => item.campus.city))]
    const courses = [...new Set(this.props.scholarships.map(item => item.course.name))]
    const prices = this.props.scholarships.map(item => item.price_with_discount);
    return (
      <Container open={this.props.open}>
        <Content open={this.props.open}>
          <CloseButton onClick={this.props.onClose}>
            <FontAwesomeIcon icon={faTimes} size="4x" color={theme.gray} />
          </CloseButton>
          <Header>
            <Label bold fontSize={2.8}>Adicionar bolsa</Label>
            <Label>Filtre e adicione as bolsas de seu interesse</Label>
          </Header>
          <Filters>
            <Filter>
              <Label>Selecione sua cidade</Label>
              <select
                value={this.state.filter.city}
                onChange={e => this.setFilter('city', e.target.value)}
              >
                <option value="">Todos</option>
                {cities.map((city, i) => <option key={i}>{city}</option>)}
              </select>
            </Filter>
            <Filter>
              <Label>Selecione o curso de sua preferência</Label>
              <select
                value={this.state.filter.course}
                onChange={e => this.setFilter('course', e.target.value)}
              >
                <option value="">Todos</option>
                {courses.map((course, i) => <option key={i}>{course}</option>)}
              </select>
            </Filter>
            <Filter>
              <Label>Como você quer estudar</Label>
              <div className="checkbox" onClick={() => this.setFilter('kind', this.state.filter.kind === 'Presencial' ? '' : 'Presencial')}>
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  color={this.state.filter.kind === "Presencial" ? theme.bluePrimary : theme.gray}
                  size="3x"
                />
                <span>Presencial</span>
              </div>
              <div className="checkbox" onClick={() => this.setFilter('kind', 'EaD')}>
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  color={this.state.filter.kind === "EaD" ? theme.bluePrimary : theme.gray}
                  size="3x"
                />
                <span>A distância</span>
              </div>
            </Filter>
            <Filter>
              <Label>Até quanto você pode pagar</Label>
              <Label>R$ {this.state.pricealt}</Label>
              <Slider
                value={this.state.pricealt}
                onAfterChange={value => this.setFilter('price', value)}
                onChange={value => this.setState({ pricealt: value })}
                max={Math.max(...prices)} 
                min={Math.min(...prices)}
              />
            </Filter>
          </Filters>
          <Result>
            {this.state.scholarshipsFiltered.length
              &&
              <>
                <ResultHeader>
                  <Label bold>Resultado</Label>
                  <Label>{this.state.scholarshipsFiltered.length} item(s) encontrado(s)</Label>
                  <div>
                    <Label>Ordenar por</Label>
                    <SortSelect
                      value={this.state.filter.sortBy}
                      onChange={e => this.setFilter('sortBy', e.target.value)}
                    >
                      <option value="university.name">Nome da Faculdade</option>
                      <option value="price_with_discount">Preço</option>
                    </SortSelect>
                  </div>
                </ResultHeader>
                <Scholarships>
                  {this.state.scholarshipsFiltered.map(this.renderScholarship)}
                </Scholarships>
              </>
            }
          </Result>
          <Buttons>
            <Button
              outline
              onClick={this.props.onClose}
              width="10rem"
              color={theme.bluePrimary}
            >
              Cancelar
            </Button>
            <Button
              onClick={() => this.props.addFavorites(this.state.selecteds)}
              width="15rem"
              bgColor={theme.yellowPrimary}
              color={theme.textBlack}
              disabled={this.state.selecteds.length === 0}
            >
              Adicionar bolsa(s)
            </Button>
          </Buttons>
        </Content>
      </Container>
    );
  }
}

export default ModalAdd