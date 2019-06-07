import styled from 'styled-components';
import media from 'styles/media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 20rem;
  background: ${props => props.theme.bgGray};
`;

export const ContactsSection = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  background: ${props => props.theme.blueSecondary};
  padding: 0 5rem;

  & div:first-child {
    ${media.mobile`
      min-width: 100%;
      & img {
        height: 6rem;
        width: 6rem;
      }
      & label {
        font-size: 2.2rem;
      }
    `};
  }

  ${media.mobile` padding: 0; `};
`;

export const Contact = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 2rem 0;

  & span {
    display: none;

    padding-top: .5rem;
    font-size: 1.6rem;
    font-weight: 700;
    color: ${props => props.theme.gray};
  }

  & img {
    max-height: 4rem;
    max-width: 4rem;
  }

  & div {
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
  }

  & + & {
    ${media.mobile`
      flex-direction: column;
      border-top: 2px solid ${props => props.theme.bluePrimary};
      
      & label { display: none; }
      & span { display: block; }
    `}
  }
`;

export const BottomSection = styled.div`
  flex: 1;
  padding: 4rem;
  background: ${props => props.theme.bluePrimary};
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;