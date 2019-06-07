import styled from 'styled-components';
import media from 'styles/media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 70vh;
  background: ${props => props.theme.bgGray};

  padding: 2rem 5rem;
`;

export const Breadcumb = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  list-style: none;
`;

export const BreadcumbItem = styled.li`
  & + & {
    padding: 0 .7rem;

    ::before {
      font-size: 1.4rem;
      color: ${props => props.theme.textBlack};
      content: "/";
      margin-right: .7rem;
    }
  }
`;

export const MainSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  padding: 3rem 0;
`;

export const ResultSection = styled.div`
  flex: 1;
  padding: 1rem 0;
`;

export const Filters = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  list-style: none;
`;
  
export const Filter = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: .3rem 2.5rem;
  border: 1px solid ${props => props.theme.bluePrimary};
  background: ${props => props.selected ? props.theme.bluePrimary : 'transparent'};
  & label { color: ${props => props.selected ? props.theme.gray : props.theme.textBlack }; }

  &:hover {
    background: ${props => props.theme.blueSecondary};
    & label { color: ${props => props.theme.gray}; }
  }

  :first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  
  :last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const Favorites = styled.div`
  padding: 1.5rem 0;
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Favorite = styled.div`
  cursor: pointer;
  flex: 1;
  height: 40rem;
  min-width: 20rem;
  max-width: 25rem;
  padding: 2rem;
  margin: .5rem;

  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: ${props => props.new ? 'center' : 'space-between' };
  align-items: center;

  background: #fff;
  box-shadow: 0 0 5px ${props => props.theme.gray};
  border-radius: 4px;

  transition: all .1s;

  & div:last-child {
    padding-bottom: 0;
  }

  & img {
    max-height: 8rem;
    max-width: 20rem;
    margin-bottom: 1.5rem;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 10px #ddd;
  }

  ${media.mobile`
    flex: 1;
    max-width: 100%;
  `};
`;

export const FavoriteSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;

  & div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
  }

  & + & {
    padding-top: 1.5rem;
    border-top: 1px solid ${props => props.theme.gray};
  }
`;

export const FavoriteButtons = styled.div`
  padding-top: 1.5rem;

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content:space-around;

  & button:first-child {
    width: 70%;
    margin-right: .3rem;
  }
`;