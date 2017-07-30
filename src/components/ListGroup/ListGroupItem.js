// @flow

import styled from 'styled-components';
import { borderRadius } from 'polished';

import { hoverFocus } from '../../utils/hover';

import {
  listGroupBg,
  listGroupBorderColor,
  listGroupBorderWidth,
  listGroupBorderRadius,
  listGroupItemPaddingY,
  listGroupItemPaddingX,
  listGroupHoverBg,
  listGroupActiveColor,
  listGroupActiveBg,
  listGroupActiveBordeColor,
  listGroupDisabledColor,
  listGroupDisableddBg,
  listGroupActionColor,
  listGroupActionHoveColor,
  listGroupActionActiveColor,
  listGroupActionActiveBg
} from '../../defaultTheme';

const ListGroupItem = styled.li`
  position: relative;
  display: block;
  ${props =>
    `padding: ${props.theme.listGroupItemPaddingY} ${props.theme
      .listGroupItemPaddingX};`}
  margin-bottom: -${props => props.theme.listGroupBorderWidth};
  background-color: ${props => props.theme.listGroupBg};
  ${props => `
    border: ${props.theme.listGroupBorderWidth} solid ${props.theme
    .listGroupBorderColor};
  `}

  &:first-child {
    ${borderRadius('top', listGroupBorderRadius)}
  }

  &:last-child {
    margin-bottom: 0;
    ${borderRadius('bottom', listGroupBorderRadius)}
  }

  ${hoverFocus('text-decoration: none;')}

  &.disabled,
  &:disabled {
    color: ${props => props.theme.listGroupDisabledColor};
    background-color: ${props => props.theme.listGroupDisabledBg};
  }

  &.active {
    z-index: 2;
    color: ${props => props.theme.listGroupActiveColor};
    background-color: ${props => props.theme.listGroupActiveBg};
    border-color: ${props => props.theme.listGroupActiveBorderColor};
  }
`;

ListGroupItem.defaultProps = {
  theme: {
    listGroupBg,
    listGroupBorderColor,
    listGroupBorderWidth,
    listGroupBorderRadius,
    listGroupItemPaddingY,
    listGroupItemPaddingX,
    listGroupHoverBg,
    listGroupActiveColor,
    listGroupActiveBg,
    listGroupActiveBordeColor,
    listGroupDisabledColor,
    listGroupDisableddBg,
    listGroupActionColor,
    listGroupActionHoveColor,
    listGroupActionActiveColor,
    listGroupActionActiveBg
  }
};

export default ListGroupItem;
