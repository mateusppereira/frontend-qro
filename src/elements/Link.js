import styled from 'styled-components';
import theme from 'styles/theme';

export default styled.button.attrs(({ fontSize, padding, color, width }) => ({
  width: width || 'auto',
  fontSize: fontSize || 1.4,
  padding: padding || '0',
  color: color || theme.bluePrimary
}))`
  cursor: pointer;
  border: 0;
  background: transparent;
  text-decoration: underline;
  font-size: ${props => props.fontSize}rem;
  padding: ${props => props.padding};
  width: ${props => props.width};
  color: ${props => props.color};
`;
