// @flow

import { css } from 'styled-components';

// $FlowIssue
import darken from 'polished/lib/color/darken';

export function alertVariant(
  background: string,
  border: string,
  bodyColor: string
) {
  return css`
    color: ${bodyColor};
    background-color: ${background};
    border-color: ${border};

    hr {
      border-top-color: ${darken(0.05, border)};
    }

    a {
      color: ${darken(0.1, bodyColor)};
    }
  `;
}

export default alertVariant;
