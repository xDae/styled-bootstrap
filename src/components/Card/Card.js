import styled from 'styled-components';
// import { parseToRgb, rgba, stripUnit } from 'polished';

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
  `}

  ${borderRadius(props => props.theme.cardBorderRadius)}
`;

const CardBlock = styled.div`
  flex: 1 1 auto;
  padding: ${props => props.theme.cardSpacerX};
`;

CardBlock.defaultProps = {
  theme: {
    cardSpacerX: '1.25rem'
  }
};

Card.Block = CardBlock;

Card.defaultProps = {
  theme: {
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
  }
};

export default Card;
