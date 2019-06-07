import { faChevronDown, faInfoCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Label } from "elements";
import React from "react";
import theme from "styles/theme";
import whatsapp from "assets/whatsapp1.png";
import { AccountSection, MenuItems, MenuItem, AccountNav, ContactInfos, Container, HowItWorks, LeftSection, Logo, Navbar, NavItems, RightSection, TopSection } from "./styles";

const Header = () => {
  return (
    <Container>
      <TopSection>
        <LeftSection>
          <HowItWorks>
            <FontAwesomeIcon icon={faInfoCircle} size="6x" color={theme.bluePrimary} />
            <Label bold padding="0 0 0 .5rem" color={theme.bluePrimary}>
              Como funciona
            </Label>
          </HowItWorks>
          <ContactInfos>
            <img alt="whatsapp" src={whatsapp} />
            <div>
              <Label bold color={theme.bluePrimary}>0800 123 2222</Label>
              <Label bold fontSize={1.2} color={theme.bluePrimary}>Envie mensagem ou ligue</Label>
            </div>
          </ContactInfos>
        </LeftSection>
        <Logo src="http://izabelahendrix.edu.br/noticias/2018/quero-bolsa-entrevista-reitor-e-psicologa-do-izabela-sobre-saude-mental-de-universitarios/@@images/ae57c16e-32df-4f50-94ed-fbfdee916748.png" />
        <RightSection>
          <AccountSection>
            <Label bold padding="0 .5rem 0 0" color={theme.bluePrimary}>Nome Sobrenome</Label>
            <FontAwesomeIcon icon={faUserCircle} size="6x" color={theme.bluePrimary} />
          </AccountSection>
        </RightSection>
      </TopSection>
      <Navbar>
        <AccountNav>
          <Label bold fontSize={1.6} color={theme.gray}>Minha conta</Label>
        </AccountNav>
        <MenuItems>
          <Label bold padding="0 .5rem 0 0" color={theme.gray}>Menu</Label>
          <FontAwesomeIcon icon={faChevronDown} size="6x" color={theme.gray} />
          <ul>
            <MenuItem>
              <Label bold color={theme.gray}>Pré-matriculas</Label>
            </MenuItem>
            <MenuItem selected>
              <Label bold color={theme.gray}>Bolsas favoritas</Label>
            </MenuItem>
          </ul>
        </MenuItems>
      </Navbar>
    </Container>
  );
};


export default Header;
