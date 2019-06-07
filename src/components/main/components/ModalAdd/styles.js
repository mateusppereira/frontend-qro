import styled, { keyframes, css } from 'styled-components';
import media from 'styles/media';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(31,45,48, .88);
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  z-index: 10;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  min-width: 300px;
  width: ${props => props.open ? '50vw' : '0'};
  height: ${props => props.open ? '90vh' : '0'};
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  padding: 2rem;
  background: ${props => props.theme.bgGray};

  transition: all .3s;
  animation: ${props=> props.open ? css`${fadeIn} .3s;` : css`${fadeOut} .3s;` };
  overflow: hidden;
  /* ${props => props.open ? css`animation: fadeIn .5s` : css`animation: fadeOut .5s` }; */

  ${media.mobile` width: 90vw;`}
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 0;
  top: -20px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Filter = styled.div`
  min-width: 50%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 1.5rem;

  & select {
    border: 1px solid ${props => props.theme.gray};
    height: 3rem;
  }

  & .checkbox {
    span {
      font-size: 1.2rem;
      padding-left: .3rem;
      pointer-events: none;
    }
  }
`;

export const Result = styled.div`
  margin-top: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ResultHeader = styled.div`
  padding-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
`;

export const SortSelect = styled.select`
  border: 0;
  background: transparent;
  color: ${props => props.theme.bluePrimary};
`;

export const Scholarships = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 1rem;
  max-height: 100%;
  overflow: auto;
`;


export const Scholarship = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  min-height: 8rem;

  & img {
    max-width: 10rem;
    max-height: 7rem;
  }
`;

export const Section = styled.div`
  flex: ${props => props.flex};
  display: flex;
  flex-direction: column;
`;

export const Buttons = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  & button + button {
    margin-left: 1rem;
    transition: all 0.1s;

    &:hover {
      transform: scale(1.02);
    }
  }
`;