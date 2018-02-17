import styled from 'styled-components';

import { borderRadius } from '../utils/border-radius';
import themeProp from '../utils/theme';

import {
  cardSpacerY,
  cardSpacerX,
  cardBorderWidth,
  cardBorderColor,
  cardInnerBorderRadius
} from './default-theme';

const CardFooter = styled.div`
  padding: ${themeProp('cardSpacerY', cardSpacerY)}
    ${themeProp('cardSpacerX', cardSpacerX)};
  background-color: ${props => props.theme.cardCapBg};
  border-top: ${themeProp('cardBorderWidth', cardBorderWidth)} solid
    ${themeProp('cardBorderColor', cardBorderColor)};

  &:last-child {
    ${borderRadius(`
      0,
      0,
      ${themeProp('cardInnerBorderRadius', cardInnerBorderRadius)},
      ${themeProp('cardInnerBorderRadius', cardInnerBorderRadius)}
    `)};
  }
`;

export default CardFooter;
