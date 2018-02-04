import styled from 'styled-components';

import { borderRadius } from '../utils/src/border-radius';

const CardFooter = styled.div`
  ${props => `padding: ${props.theme.cardSpacerY} ${props.theme.cardSpacerX}`};
  background-color: ${props => props.theme.cardCapBg};
  ${props =>
    `border-top: ${props.theme.cardBorderWidth} solid ${
      props.theme.cardBorderColor
    }}`};

  &:last-child {
    ${borderRadius(`
      0,
      0,
      ${props => props.theme.cardInnerBorderRadius},
      ${props => props.theme.cardInnerBorderRadius}`)};
  }
`;

export default CardFooter;
