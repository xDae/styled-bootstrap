import styled, { css } from 'styled-components';
import { stripUnit } from 'polished';

import {
  borderRadiusLg,
  jumbotronPadding,
  jumbotronBg
} from '../../defaultTheme';

import { borderRadius } from '../../utils/border-radius';

const Jumbotron = styled.div`
  ${props =>
    props &&
    `padding: ${props.theme.jumbotronPadding} ${stripUnit(
      props.theme.jumbotronPadding
    ) / 2}rem;`};

  margin-bottom: ${props => props.theme.jumbotronPadding};
  background-color: ${props => props.theme.jumbotronBg};
  ${borderRadius(props => props.theme.borderRadiusLg)};

  // @include media-breakpoint-up(sm) {
  //   padding: ($jumbotron-padding * 2) $jumbotron-padding;
  // }

  ${props =>
    props.fluid &&
    css`
    padding-right: 0;
    padding-left: 0;
    ${borderRadius(0)}
  `};
`;

Jumbotron.defaultProps = {
  theme: {
    jumbotronPadding,
    jumbotronBg,
    borderRadiusLg
  }
};

export default Jumbotron;
