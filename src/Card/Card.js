import styled from 'styled-components';
import themeProp from '../utils/src/theme';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

import { borderRadius } from '../utils/src/border-radius';

import {
  cardBorderWidth,
  cardBorderColor,
  cardBorderRadius,
  cardBg
} from './default-theme';

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: ${themeProp('cardBg', cardBg)};
  background-clip: border-box;

  border: ${themeProp('cardBorderWidth', cardBorderWidth)} solid
    ${themeProp('cardBorderColor', cardBorderColor)};

  ${borderRadius(themeProp('cardBorderRadius', cardBorderRadius))};

  > hr {
    margin-right: 0;
    margin-left: 0;
  }
`;

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
