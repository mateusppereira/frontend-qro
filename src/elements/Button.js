import styled from 'styled-components';
import theme from 'styles/theme';

export default styled.button.attrs(({ disabled, outline, fontSize, padding, color, bgColor, width }) => ({
  width: width || '100%',
  fontSize: fontSize || 1.4,
  padding: padding || '0',
  bgColor: bgColor || theme.blueSecondary,
  color: color || theme.gray,
  outline: outline || false,
  disabled: disabled || false
}))`
  cursor: pointer;
  height: 2.5rem;
  border-radius: 3px;
  border: 1px solid ${props => props.bgColor};
  font-size: ${props => props.fontSize}rem;
  padding: ${props => props.padding};
  width: ${props => props.width};
  color: ${props => props.color};
  opacity: ${props => props.disabled ? 0.6 : 1};
  background-color: ${props => props.outline ? 'transparent' : props.bgColor};
  pointer-events: ${props=> props.disabled ? 'none' : 'all'};
`;
