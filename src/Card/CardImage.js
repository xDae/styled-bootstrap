import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  borderTopRadius,
  borderBottomRadius
} from '../utils/src/border-radius';

const CardImage = styled.img`
  width: 100%; // Required because we use flexbox and this inherently applies align-self: stretch

  ${props =>
    props.position === 'bottom'
      ? borderBottomRadius(props.theme.cardInnerBorderRadius)
      : borderTopRadius(props.theme.cardInnerBorderRadius)};
`;

CardImage.proptypes = {
  position: 'top'
};

CardImage.proptypes = {
  position: PropTypes.oneOf(['top', 'bottom'])
};

export default CardImage;
