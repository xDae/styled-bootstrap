// @flow

import styled, { css } from 'styled-components';
// $FlowIssue
import { borderRadius } from 'polished';
// $FlowIssue
import get from 'lodash.get';

import { hoverFocus } from '../utils/hover';
import listGroupItemVariant from './utils/list-group-item-variant';
import themeProp from '../utils/theme';
import { themeColorLevel } from '../utils/color-functions';

import * as defaultTheme from './default-theme';

const {
  listGroupBg,
  listGroupBorderColor,
  listGroupBorderWidth,
  listGroupBorderRadius,
  listGroupItemPaddingY,
  listGroupItemPaddingX,
  listGroupActiveColor,
  listGroupActiveBg,
  listGroupActiveBorderColor,
  listGroupDisabledColor,
  listGroupDisabledBg
} = defaultTheme;

const ListGroupItem = styled.li`
  position: relative;
  display: block;
  padding: ${themeProp('listGroupItemPaddingY', listGroupItemPaddingY)}
    ${themeProp('listGroupItemPaddingX', listGroupItemPaddingX)};

  margin-bottom: -${themeProp('listGroupBorderWidth', listGroupBorderWidth)};
  background-color: ${themeProp('listGroupBg', listGroupBg)};

  border: ${themeProp('listGroupBorderWidth', listGroupBorderWidth)} solid
    ${themeProp('listGroupBorderColor', listGroupBorderColor)};

  &:first-child {
    ${borderRadius('top', listGroupBorderRadius)};
  }

  &:last-child {
    margin-bottom: 0;
    ${borderRadius('bottom', listGroupBorderRadius)};
  }

  ${hoverFocus(css`
    z-index: 1;
    text-decoration: none;
  `)};

  ${({ disabled, theme }) =>
    disabled &&
    css`
      color: ${get(theme, 'listGroupDisabledColor', listGroupDisabledColor)};
      background-color: ${get(
        theme,
        'listGroupDisabledBg',
        listGroupDisabledBg
      )};
    `};

  ${({ active, theme }) =>
    active &&
    css`
      z-index: 2;
      color: ${get(theme, 'listGroupActiveColor', listGroupActiveColor)};
      background-color: ${get(theme, 'listGroupActiveBg', listGroupActiveBg)};
      border-color: ${get(
        theme,
        'listGroupActiveBorderColor',
        listGroupActiveBorderColor
      )};
    `};

  ${({ color, theme }) =>
    color &&
    listGroupItemVariant(
      get(theme, `${color}`, defaultTheme[color]),
      themeColorLevel(get(theme, `${color}`, defaultTheme[color]), -9),
      themeColorLevel(get(theme, `${color}`, defaultTheme[color]), 6)
    )};
`;

// ListGroupItem.defaultProps = {};

export default ListGroupItem;
