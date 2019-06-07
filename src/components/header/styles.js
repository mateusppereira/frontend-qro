import styled from 'styled-components';
import media from 'styles/media';

export const Container = styled.div`
  height: 10rem;
  min-height: 50px;
  background: ${props => props.theme.bgGray};

  padding: 0 5rem;

  ${media.mobile` padding: 0 1rem; `}
`;

export const TopSection = styled.div`
  height: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;

  div:not(:last-child) {
    border-right: 2px solid ${props => props.theme.gray};
  }
`;

export const HowItWorks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;

  ${media.mobile`
    flex-direction: column;
    justify-content: flex-start;

    label {
      display: none;
    }
    &::after {
      margin-top: .5rem;
      font-size: 1.4rem;
      font-weight: 700;
      color: ${props => props.theme.bluePrimary};
      content: "Ajuda"
    }
  `}
`;

export const ContactInfos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0 1rem;

  img {
    width: 3.2rem;
    height: 3rem;
  }

  div {
    padding: 0 .5rem;
    display: flex;
    flex-direction: column;
  }

  ${media.mobile` display: none; `}
`;

export const Logo = styled.img`
  width: 15rem;
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const AccountSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  
  ${media.mobile`
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 1rem;

    border-left: 2px solid ${props => props.theme.gray};
    
    label {
      display: none;
    }
    &::after {
      margin-top: .5rem;
      font-size: 1.4rem;
      font-weight: 700;
      color: ${props => props.theme.bluePrimary};
      content: "Conta"
    }
  `}
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;

  height: 30%;
  background: ${props => props.theme.bluePrimary};
  border-top: 1px solid ${props => props.theme.textBlack};
  
  margin: 0 -5rem;
  padding: 0 5rem;

  ${media.mobile`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `};
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > label, svg {
    display: none;
  }
  ul {

    height: 100%;
    list-style: none;

    display: flex;
    flex-direction: row;
    align-items: center;
    background: ${props => props.selected ? props.theme.blueSecondary : 'transparent'};
 
    ${media.mobile` display: none; `}
  }

  ${media.mobile`
    {
      > label, svg {
        display: block;
      }
    }
  `};
`;

export const MenuItem = styled.li`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 13rem;
  background: ${props => props.selected ? props.theme.blueSecondary : 'transparent'};

  &:hover {
    background: ${props => props.theme.blueSecondary};
  }
`;

export const AccountNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  width: 15rem;

  ${media.mobile` width: 10rem; `};
`;