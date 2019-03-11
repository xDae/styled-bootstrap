// @flow

import styled, { css } from 'styled-components';

// $FlowIssue
import get from 'lodash.get';
// $FlowIssue
import darken from 'polished/lib/color/darken';

import { hoverFocus } from '../utils/hover';
import { themeColorLevel } from '../utils/color-functions';
import themeProp from '../utils/theme';
import * as defaultTheme from './default-theme';

import InputGroupItem from './ListGroupItem';

const {
  listGroupHoverBg,
  listGroupDisabledColor,
  listGroupDisabledBg,
  listGroupActionColor,
  listGroupActionHoverColor,
  listGroupActionActiveColor,
  listGroupActiveColor,
  listGroupActionActiveBg,
  listGroupActiveBg
} = defaultTheme;

// TODO: it has a .withComponent before
const ListGroupButton = styled(InputGroupItem)`
  width: 100%;
  color: ${themeProp('listGroupActionColor', listGroupActionColor)};
  text-align: inherit;

  ${({ active, theme }) =>
    active &&
    css`
      color: ${get(
        theme,
        'listGroupActiveColor',
        listGroupActiveColor
      )}!important;
      background-color: ${get(
        theme,
        'listGroupActiveBg',
        listGroupActiveBg
      )}!important;
    `}

  &:active {
    color: ${themeProp(
      'listGroupActionActiveColor',
      listGroupActionActiveColor
    )};
    background-color: ${themeProp(
      'listGroupActionActiveBg',
      listGroupActionActiveBg
    )};
  }

  /* Hover state */
  ${hoverFocus(css`
    color: ${themeProp('listGroupActionHoverColor', listGroupActionHoverColor)};
    text-decoration: none;
    background-color: ${themeProp('listGroupHoverBg', listGroupHoverBg)};
  `)}

  ${({ disabled, theme }) =>
    disabled &&
    css`
      color: ${get(theme, 'listGroupDisabledColor', listGroupDisabledColor)};
      background-color: ${get(
        theme,
        'listGroupDisabledBg',
        listGroupDisabledBg
      )};
    `}

  ${({ color, theme }) => {
    if (color) {
      const colorX = themeColorLevel(
        get(theme, `${color}`, defaultTheme[color]),
        6
      );

      const backgroundX = themeColorLevel(
        get(theme, `${color}`, defaultTheme[color]),
        -9
      );

      return css`
        ${hoverFocus(css`
          color: ${colorX};
          background-color: ${darken(0.05, backgroundX)};
        `)};

        &.active {
          color: #fff;
          background-color: ${colorX};
          border-color: ${colorX}};
        }
      `;
    }
  }};
`;

// ListGroupButton.defaultProps = {};

export default ListGroupButton;
