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
  linkColor
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
    )}

  ${props => transition(props.theme.btnTransition)}

  // Share hover and focus styles
  ${hoverFocus(css`
    text-decoration: none;
  `)}

  &:focus,
  &.focus {
    outline: 0;
    box-shadow: ${props => props.theme.btnFocusBoxShadow};
  }

  &.disabled,
  &:disabled {
    cursor: ${props => props.theme.cursorDisabled};
    opacity: .65;
    // @include box-shadow(none);
  }

  ${({ theme, color }) => {
    switch (color) {
      case 'primary':
        return buttonVariant(
          theme.btnPrimaryColor,
          theme.btnPrimaryBg,
          theme.btnPrimaryBorderColor
        );
      case 'secondary':
        return buttonVariant(
          theme.btnSecondaryColor,
          theme.btnSecondaryBg,
          theme.btnSecondaryBorderColor
        );
      case 'info':
        return buttonVariant(
          theme.btnInfoColor,
          theme.btnInfoBg,
          theme.btnInfoBorderColor
        );
      case 'success':
        return buttonVariant(
          theme.btnSuccessColor,
          theme.btnSuccessBg,
          theme.btnSuccessBorderColor
        );
      case 'warning':
        return buttonVariant(
          theme.btnWarningColor,
          theme.btnWarningBg,
          theme.btnWarningBorderColor
        );
      case 'danger':
        return buttonVariant(
          theme.btnDangerColor,
          theme.btnDangerBg,
          theme.btnDangerBorderColor
        );
      default:
        return null;
    }
  }}

  ${props =>
    props.color === 'link' &&
    css`
    font-weight: ${props => props.theme.fontWeightNormal};
    color: ${props => props.theme.linkColor};
    border-radius: 0;

    &,
    &:active,
    &.active,
    &:disabled {
      background-color: transparent;
      /** @include box-shadow(none); */
    }

    &,
    &:focus,
    &:active {
      border-color: transparent;
    }

    ${hover(css`
      border-color: transparent;
    `)}

    ${hoverFocus(css`
      color: ${props => props.theme.linkHoverColor};
      text-decoration: ${props => props.theme.linkHoverDecoration};
      background-color: transparent;
    `)}

    &:disabled {
      color: ${btnLinkDisabledColor};

      ${hoverFocus(css`
        text-decoration: none;
      `)}
    }
  `}

  ${({ theme, outline, color }) => {
    if (outline) {
      switch (color) {
        case 'primary':
          return buttonOutlineVariant(theme.btnPrimaryBg);
        case 'secondary':
          return buttonOutlineVariant(theme.btnSecondaryBorder);
        case 'info':
          return buttonOutlineVariant(theme.btnInfoBg);
        case 'success':
          return buttonOutlineVariant(theme.btnSuccessBg);
        case 'warning':
          return buttonOutlineVariant(theme.btnWarningBg);
        case 'danger':
          return buttonOutlineVariant(theme.btnDangerBg);
        default:
          return null;
      }
    }
  }}

  ${props =>
    props.size === 'large' &&
    buttonSize(
      props.theme.inputBtnPaddingYlg,
      props.theme.inputBtnPaddingXlg,
      props.theme.fontSizeLg,
      props.theme.inputBtnLineHeightLg,
      props.theme.btnBorderRadiusLg
    )}

  ${props =>
    props.size === 'small' &&
    buttonSize(
      props.theme.inputBtnPaddingYsm,
      props.theme.inputBtnPaddingXsm,
      props.theme.fontSizeSm,
      props.theme.inputBtnLineHeightSm,
      props.theme.btnBorderRadiusSm
    )}

  ${props =>
    props.active &&
    css`
    background-image: none;
    // ${boxShadow(props.theme.btnFocusBoxShadow)}
  `}

  ${props =>
    props.block &&
    css`
    display: block;
    width: 100%;
  `}
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
