// @flow

import styled, { css } from 'styled-components';

import {
  buttonVariant,
  buttonSize,
  buttonOutlineVariant
} from '../../utils/button';

import { hoverFocus, hover } from '../../utils/hover';
import { transition } from '../../utils/transition';
import { boxShadow } from '../../utils/box-shadow';

import {
  inputBtnPaddingY,
  inputBtnPaddingX,
  inputBtnLineHeight,
  inputBtnPaddingYsm,
  inputBtnPaddingXsm,
  inputBtnLineHeightSm,
  inputBtnPaddingYlg,
  inputBtnPaddingXlg,
  inputBtnLineHeightLg,
  btnFontWeight,
  btnBoxShadow,
  btnFocusBoxShadow,
  btnActiveBoxShadow,
  btnPrimaryColor,
  btnPrimaryBg,
  btnPrimaryBorderColor,
  btnSecondaryColor,
  btnSecondaryBg,
  btnSecondaryBorderColor,
  btnInfoColor,
  btnInfoBg,
  btnInfoBorderColor,
  btnSuccessColor,
  btnSuccessBg,
  btnSuccessBorderColor,
  btnWarningColor,
  btnWarningBg,
  btnWarningBorderColor,
  btnDangerColor,
  btnDangerBg,
  btnDangerBorderColor,
  btnLinkDisabledColor,
  btnBlockSpacingY,
  btnBorderRadius,
  btnBorderRadiusLg,
  btnBorderRadiusSm,
  btnTransition,
  fontSizeBase,
  inputBtnBorderWidth,
  fontSizeLg,
  fontSizeSm,
  fontWeightNormal,
  linkColor,
  themeColors
} from '../../defaultTheme';

const Button = styled.button`
  display: inline-block;
  font-weight: ${props => props.theme.btnFontWeight};
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: ${props => props.theme.inputBtnBorderWidth} solid transparent;

  ${props =>
    !props.size &&
    buttonSize(
      props.theme.inputBtnPaddingY,
      props.theme.inputBtnPaddingX,
      props.theme.fontSizeBase,
      props.theme.inputBtnLineHeight,
      props.theme.btnBorderRadius
    )};

  ${props => transition(props.theme.btnTransition)};

  // Share hover and focus styles
  ${hoverFocus('text-decoration: none;')};

  &:focus,
  &.focus {
    outline: 0;
    box-shadow: ${props => props.theme.btnFocusBoxShadow};
  }

  &.disabled,
  &:disabled {
    opacity: .65;
    ${boxShadow('none')};
  }

  ${({ color }) =>
    themeColors[color] &&
    buttonVariant(themeColors[color], themeColors[color])};

  ${props =>
    props.color === 'link' &&
    css`
    font-weight: ${props.theme.fontWeightNormal};
    color: ${props.theme.linkColor};
    border-radius: 0;

    &,
    &:active,
    &.active,
    &:disabled {
      background-color: transparent;
      ${boxShadow('none')}
    }

    &,
    &:focus,
    &:active {
      border-color: transparent;
    }

    ${hover('border-color: transparent;')}

    ${hoverFocus(css`
      color: ${props.theme.linkHoverColor};
      text-decoration: ${props.theme.linkHoverDecoration};
      background-color: transparent;
    `)}

    &:disabled {
      color: ${btnLinkDisabledColor};

      ${hoverFocus('text-decoration: none;')}
    }
  `};

  ${({ outline, color }) =>
    outline && buttonOutlineVariant(themeColors[color])};

  ${props =>
    props.size === 'large' &&
    buttonSize(
      props.theme.inputBtnPaddingYlg,
      props.theme.inputBtnPaddingXlg,
      props.theme.fontSizeLg,
      props.theme.inputBtnLineHeightLg,
      props.theme.btnBorderRadiusLg
    )};

  ${props =>
    props.size === 'small' &&
    buttonSize(
      props.theme.inputBtnPaddingYsm,
      props.theme.inputBtnPaddingXsm,
      props.theme.fontSizeSm,
      props.theme.inputBtnLineHeightSm,
      props.theme.btnBorderRadiusSm
    )};

  ${props =>
    props.active &&
    css`
    background-image: none;
    ${boxShadow(props.theme.btnFocusBoxShadow)}
  `};

  ${props =>
    props.block &&
    css`
    display: block;
    width: 100%;
  `};
`;

Button.Link = Button.withComponent('a');

Button.defaultProps = {
  theme: {
    inputBtnPaddingY,
    inputBtnPaddingX,
    inputBtnLineHeight,
    inputBtnPaddingYsm,
    inputBtnPaddingXsm,
    inputBtnLineHeightSm,
    inputBtnPaddingYlg,
    inputBtnPaddingXlg,
    inputBtnLineHeightLg,
    btnFontWeight,
    btnBoxShadow,
    btnFocusBoxShadow,
    btnActiveBoxShadow,
    btnPrimaryColor,
    btnPrimaryBg,
    btnPrimaryBorderColor,
    btnSecondaryColor,
    btnSecondaryBg,
    btnSecondaryBorderColor,
    btnInfoColor,
    btnInfoBg,
    btnInfoBorderColor,
    btnSuccessColor,
    btnSuccessBg,
    btnSuccessBorderColor,
    btnWarningColor,
    btnWarningBg,
    btnWarningBorderColor,
    btnDangerColor,
    btnDangerBg,
    btnDangerBorderColor,
    btnLinkDisabledColor,
    btnBlockSpacingY,
    btnBorderRadius,
    btnBorderRadiusLg,
    btnBorderRadiusSm,
    btnTransition,
    fontSizeBase,
    inputBtnBorderWidth,
    fontSizeLg,
    fontSizeSm,
    fontWeightNormal,
    linkColor
  }
};

export default Button;
