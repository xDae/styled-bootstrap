import styled, { css } from 'styled-components';
import stripUnit from 'polished/lib/helpers/stripUnit';
import themeProp from '../utils/theme';

import {
  borderRadiusLg,
  jumbotronPadding,
  jumbotronBg
} from './default-theme';

import { borderRadius } from '../utils/border-radius';

const Jumbotron = styled.div`
  padding: ${themeProp('jumbotronPadding', jumbotronPadding)}
  ${themeProp('jumbotronPadding', `${stripUnit(jumbotronPadding) / 2 }rem`)};

  margin-bottom: ${themeProp('jumbotronPadding', jumbotronPadding)};
  background-color: ${themeProp('jumbotronBg', jumbotronBg)};
  ${borderRadius(themeProp('borderRadiusLg', borderRadiusLg))};

  // @include media-breakpoint-up(sm) {
  //   padding: ($jumbotron-padding * 2) $jumbotron-padding;
  // }

  ${props =>
    props.fluid &&
    css`
      padding-right: 0;
      padding-left: 0;
      ${borderRadius(0)}
    `
  };
`;

export default Jumbotron;
