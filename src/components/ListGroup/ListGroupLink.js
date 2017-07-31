// @flow

import { css } from 'styled-components';

import { hoverFocus } from '../../utils/hover';

import InputGroupItem from './ListGroupItem';

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
  listGroupActionHoverColor,
  listGroupActionActiveColor,
  listGroupActionActiveBg
} from '../../defaultTheme';

const ListGroupLink = InputGroupItem.withComponent('a').extend`
  width: 100%;
  color: ${props => props.theme.listGroupActionColor};
  text-align: inherit;

  // Hover state
  ${hoverFocus(css`
    color: ${props => props.theme.listGroupActionHoverColor};
    text-decoration: none;
    background-color: ${props => props.theme.listGroupHoverBg};
  `)}

  ${props =>
    props.active &&
    css`
    color: ${props.theme.listGroupActionActiveColor};
    background-color: ${props.theme.listGroupActionActiveBg};
  `}
`;

ListGroupLink.defaultProps = {
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
    listGroupActionHoverColor,
    listGroupActionActiveColor,
    listGroupActionActiveBg
  }
};

export default ListGroupLink;
