import styled from 'styled-components';

import { borderRadius } from '../utils/border-radius';
import themeProp from '../utils/theme';

import {
  cardSpacerY,
  cardSpacerX,
  cardCapBg,
  cardInnerBorderRadius,
  cardBorderWidth,
  cardBorderColor
} from './default-theme';

const CardHeader = styled.div`
  padding: ${themeProp('cardSpacerY', cardSpacerY)}
    ${themeProp('cardSpacerX', cardSpacerX)};
  margin-bottom: 0; // Removes the default margin-bottom of <hN>
  background-color: ${themeProp('cardCapBg', cardCapBg)};

  border-bottom: ${themeProp('cardBorderWidth', cardBorderWidth)} solid
    ${themeProp('cardBorderColor', cardBorderColor)}};

  &:first-child {
    ${borderRadius(`
      ${themeProp('cardInnerBorderRadius', cardInnerBorderRadius)},
      ${themeProp('cardInnerBorderRadius', cardInnerBorderRadius)},
      0,
      0`)};
  }
`;

export default CardHeader;
