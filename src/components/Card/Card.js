import styled from 'styled-components';
import { parseToRgb, rgba, stripUnit } from 'polished';

import * as defaults from '../../defaultTheme';

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
    cardSpacerY: '.75rem',
    cardSpacerX: '1.25rem',
    cardBorderWidth: '1px',
    cardBorderRadius: defaults.borderRadius,
    // cardBorderColor: `${rgba(defaults.black, 0.125)}`,
    cardBorderColor: `${rgba(
      Object.assign(parseToRgb(defaults.black), { alpha: 0.125 })
    )}`,
    cardBorderRadiusInner: `calc(${stripUnit(
      () => this.cardBorderRadius
    )}px - ${stripUnit(() => this.cardBorderWidth)})}px)`,
    cardCapGg: defaults.grayLightest,
    cardBg: defaults.white,
    cardLinkHoverColor: defaults.white,
    cardImgOverlayPadding: '1.25rem',
    cardDeckMargin: `${defaults.gridGutterWidthBase} / 2`,
    cardColumnsCount: 3,
    cardColumnsGap: '1.25rem',
    cardColumnsMargin: defaults.cardSpacerY
  }
};

export default Card;
