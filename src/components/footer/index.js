import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Label } from 'elements';
import theme from 'styles/theme';
import { Container, Contact, ContactsSection, BottomSection } from './styles';
import whatsapp from 'assets/whatsapp.png';
import info from 'assets/info.png';
import envelope from 'assets/envelope-o.png';
import comments from 'assets/comments-o.png';

const Footer = () => (
  <Container>
    <ContactsSection>
      <Contact>
        <img alt="whatsapp" src={whatsapp} />
        <div>
          <Label bold  color={theme.gray}>0800 123 2222</Label>
          <Label fontSize={1.2} color={theme.gray}>Seg-Sex 08h-22h</Label>
        </div>
      </Contact>
      <Contact>
        <img alt="comments" src={comments} />
        <div>
          <Label bold color={theme.gray}>Chat ao vivo</Label>
          <Label fontSize={1.2} color={theme.gray}>Seg-Sex 08h-22h</Label>
        </div>
        <span>Chat</span>
      </Contact>
      <Contact>
        <img alt="envelope" src={envelope} />
        <div>
          <Label bold color={theme.gray}>Mande um e-mail</Label>
          <Label fontSize={1.2} color={theme.gray}>Respondemos rapidinho</Label>
        </div>
        <span>Email</span>
      </Contact>
      <Contact>
        <img alt="info" src={info} />
        <div>
          <Label bold color={theme.gray}>Central de ajuda</Label>
          <Label fontSize={1.2} color={theme.gray}>Encontre todas respostas</Label>
        </div>
        <span>Ajuda</span>
      </Contact>
    </ContactsSection>
    <BottomSection>
      <Label fontSize={1.2} color={theme.gray} bold>Feito com <FontAwesomeIcon icon={faHeart}/> pela Quero Educação</Label>
    </BottomSection>
  </Container>
);

export default Footer;