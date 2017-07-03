import styled from 'styled-components';

import {
  cardSpacerY,
  cardSpacerX,
  cardBorderWidth,
  cardBorderRadius,
  cardBorderColor,
  cardInnerBorderRadius,
  cardCapBg,
  cardBg,
  cardInverseLinkHoverColor,
  cardImgOverlayPadding,
  cardDeckMargin,
  cardColumnsCount,
  cardColumnsGap,
  cardColumnsMargin
} from '../../defaultTheme';

import { borderRadius } from '../../utils/border-radius';

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.cardBg};

  ${props => `
    border: ${props.theme.cardBorderWidth} solid ${props.theme.cardBorderColor};
  `};

  ${borderRadius(props => props.theme.cardBorderRadius)};
`;

const CardBody = styled.div`
  flex: 1 1 auto;
  padding: ${props => props.theme.cardSpacerX};
`;

CardBody.defaultProps = {
  theme: {
    cardSpacerX: '1.25rem'
  }
};

Card.Body = CardBody;

const CardHeader = styled.div`
  ${props => `padding: ${props.theme.cardSpacerY} ${props.theme.cardSpacerX}`};
  margin-bottom: 0; // Removes the default margin-bottom of <hN>
  background-color: ${props => props.theme.cardCapBg};
  ${props =>
    `border-bottom: ${props.theme.cardBorderWidth} solid ${props.theme
      .cardBorderColor}}`};

  &:first-child {
    ${borderRadius(
      props => props.theme.cardInnerBorderRadius,
      props => props.theme.cardInnerBorderRadius,
      0,
      0
    )};
  }
`;

const CardFooter = styled.div`
  ${props => `padding: ${props.theme.cardSpacerY} ${props.theme.cardSpacerX}`};
  background-color: ${props => props.theme.cardCapBg};
  ${props =>
    `border-top: ${props.theme.cardBorderWidth} solid ${props.theme
      .cardBorderColor}}`};

  &:last-child {
    @include border-radius(0 0 $card-inner-border-radius $card-inner-border-radius);
    ${borderRadius(
      0,
      0,
      props => props.theme.cardInnerBorderRadius,
      props => props.theme.cardInnerBorderRadius
    )};
  }
`;

const theme = {
  cardSpacerY,
  cardSpacerX,
  cardBorderWidth,
  cardBorderRadius,
  cardBorderColor,
  cardInnerBorderRadius,
  cardCapBg,
  cardBg,
  cardInverseLinkHoverColor,
  cardImgOverlayPadding,
  cardDeckMargin,
  cardColumnsCount,
  cardColumnsGap,
  cardColumnsMargin
};

Card.Header = CardHeader;
Card.Footer = CardFooter;

Card.Footer.defaultProps = { theme };
Card.Header.defaultProps = { theme };
Card.defaultProps = { theme };

export default Card;
