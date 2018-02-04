import styled from 'styled-components';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

import { borderRadius } from '../utils/src/border-radius';

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: $card-bg;
  background-clip: border-box;

  ${props => `
    border: ${props.theme.cardBorderWidth} solid ${props.theme.cardBorderColor};
  `};

  ${borderRadius(props => props.theme.cardBorderRadius)};

  > hr {
    margin-right: 0;
    margin-left: 0;
  }
`;

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
