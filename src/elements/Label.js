import styled from 'styled-components';
import theme from 'styles/theme';

export default styled.label.attrs(({ fontSize, textAlign, padding, color, bold, textTransform }) => ({
  fontSize: fontSize || 1.4,
  textAlign: textAlign || 'left',
  padding: padding || '0',
  color: color || theme.textBlack,
  bold: bold || false,
  textTransform: textTransform || 'none'
}))`
  pointer-events: none;
  font-size: ${props => props.fontSize}rem;
  text-align: ${props => props.textAlign};
  color: ${props => props.color};
  font-weight: ${props => props.bold ? 700 : 400};
  padding: ${props => props.padding};
  text-transform: ${props => props.textTransform};
`;
