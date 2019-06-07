import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Axios from 'axios';
import ReactStars from 'react-stars'
import { Button, Label } from 'elements';
import React, { Component } from 'react';
import theme from 'styles/theme';
import moment from 'moment';
import ModalAdd from './components/ModalAdd';
import { Breadcumb, BreadcumbItem, Container, Favorite, FavoriteButtons, Favorites, FavoriteSection, Filter, Filters, MainSection, ResultSection } from './styles';

class Main extends Component {
  state = {
    modal: false,
    breadcumb: ['Home', 'Minha conta', 'Bolsas favoritas'],
    favorites: [],
    scholarships: [],
    newScholarship: null,
    filter: {
      period: ''
    }
  }

  componentWillMount() {
    const favorites = JSON.parse(sessionStorage.getItem('favorites')) || [];
    Axios.get('https://testapi.io/api/redealumni/scholarships').then(({ data }) => {
      const withIds = data.map((item, i) => ({
        id: i,
        ...item,
      }))
      this.setState({ scholarships: withIds, favorites });
    })
  }

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  }

  setFilter = period => {
    this.setState({ filter: { period }});
  }

  updateFavorites = favorites => {
    sessionStorage.setItem('favorites', JSON.stringify(favorites));
    this.setState({ favorites });
  }

  removeFavorite = id => {
    const favorites = this.state.favorites.filter(item => item.id !== id);
    this.updateFavorites(favorites);
  }

  addFavorites = ids => {
    const favorites = this.state.scholarships.filter(item => ids.indexOf(item.id) >= 0);
    this.updateFavorites(favorites);
    this.toggleModal();
  }

  renderFavorite = (item) => (
    <Favorite visible={this.state.filter.period ? item.enrollment_semester === this.state.filter.period : true}>
      <img alt="logo" src={item.university.logo_url} />
      <FavoriteSection>
        <Label textAlign="center" bold>{item.university.name}</Label>
        <Label textAlign="center" bold color={theme.bluePrimary}>{item.course.name}</Label>
        <div>
          <Label bold padding="0 .5rem 0 0">{item.university.score}</Label>
          <ReactStars
           count={5}
           value={item.university.score}
           size={20}
           edit={false}
          />
        </div>
      </FavoriteSection>
      <FavoriteSection>
        <Label textAlign="center" bold>{item.course.shift}</Label>
        <Label textAlign="center" fontSize={1.2}>Ínicio das aulas em {item.start_date}</Label>
      </FavoriteSection>
      <FavoriteSection>
        <Label textAlign="center" bold>Mensalidade com o Quero Bolsa</Label>
        <Label textAlign="center" fontSize={1.2}>{item.full_price}</Label>
        <Label textAlign="center" bold fontSize={1.8} color={theme.green}>R$ {item.price_with_discount}</Label>
        <FavoriteButtons>
          <Button outline onClick={() => this.removeFavorite(item.id)} color={theme.bluePrimary}>Excluir</Button>
          <Button disabled={!item.enabled} bgColor={theme.yellowPrimary} color={theme.textBlack}>Ver Oferta</Button>
        </FavoriteButtons>
      </FavoriteSection>
    </Favorite>
  )

  render() {
    return (
      <Container>
        {this.state.scholarships.length
        &&
          <ModalAdd
            open={this.state.modal}
            selecteds={this.state.favorites.map(item => item.id)}
            addFavorites={this.addFavorites}
            onClose={this.toggleModal}
            scholarships={this.state.scholarships}
          />
        }
        <Breadcumb>
          {this.state.breadcumb.map(item => 
            <BreadcumbItem>
              <Label fontSize={1.2} color={theme.bluePrimary}>{item}</Label>
            </BreadcumbItem>
          )}
        </Breadcumb>
        <MainSection>
          <Label bold fontSize={3.2} padding="0 0 .5rem 0">Bolsas favoritas</Label>
          <Label>Adicione bolsas de cursos e faculdades de seu interesse e receba atualizações com as melhores ofertas disponíveis.</Label>
          <ResultSection>
            <Filters>
              <Filter selected={this.state.filter.period === ""} onClick={() => this.setFilter('')}>
                <Label bold>Todos os semestres</Label>
              </Filter>
              <Filter selected={this.state.filter.period === "2019.2"} onClick={() => this.setFilter('2019.2')}>
                <Label bold>2° semestre de 2019</Label>
              </Filter>
              <Filter selected={this.state.filter.period === "2020.1"} onClick={() => this.setFilter('2020.1')}>
                <Label bold>1° semestre de 2020</Label>
              </Filter>
            </Filters>
            <Favorites>
              <Favorite new visible onClick={() => this.setState({ modal: true }) }>
                <FontAwesomeIcon icon={faPlusCircle} size="10x" color={theme.bluePrimary} />
                <Label bold padding="3rem 0 0 0">Adicionar bolsa</Label>
                <Label fontSize={1.2} textAlign="center">Clique para adicionar bolsas de curso do seu interesse</Label>
              </Favorite>
              {this.state.favorites.map(this.renderFavorite)}
            </Favorites>
          </ResultSection>
        </MainSection>
      </Container>
    );
  }
}

export default Main