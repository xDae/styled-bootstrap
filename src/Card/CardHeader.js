import styled from 'styled-components';

import { borderRadius } from '../utils/src/border-radius';

const CardHeader = styled.div`
  ${props => `padding: ${props.theme.cardSpacerY} ${props.theme.cardSpacerX}`};
  margin-bottom: 0; // Removes the default margin-bottom of <hN>
  background-color: ${props => props.theme.cardCapBg};

  ${props =>
    `border-bottom: ${props.theme.cardBorderWidth} solid ${
      props.theme.cardBorderColor
    }}`};

  &:first-child {
    ${borderRadius(`
      ${props => props.theme.cardInnerBorderRadius},
      ${props => props.theme.cardInnerBorderRadius},
      0,
      0`)};
  }
`;

export default CardHeader;
