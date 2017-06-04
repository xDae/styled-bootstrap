import React from 'react';
import styled from 'styled-components';

import { sassRgba } from '../../utils/sassRgba'

import * as defaults from '../../defaultTheme';

const Input = styled.input`
    display: block;
    width: 100%;
    ${props => `padding: ${props.theme.inputBtnPaddingY} ${props.theme.inputBtnPaddingX};`}
    font-size: ${props => props.theme.fontSizeBase};
    line-height: ${props => props.theme.inputBtnLineHeight};
    color: ${props => props.theme.inputColor};
    background-color: ${props => props.theme.inputBg};
    background-image: none;
    background-clip: padding-box;
    ${props => `border: ${props.theme.inputDtnBorderWidth} solid ${props.theme.inputBorderColor};`}

    ${props => defaults.enableRounded
    ? `border-radius: ${props.theme.inputBorderRadius};`
    : `border-radius: 0;`
    }}

    // @include box-shadow($input-box-shadow);
    // @include transition($input-transition);

    &::-ms-expand {
      background-color: transparent;
      border: 0;
    }

    // @include form-control-focus();

    // Placeholder
    &::placeholder {
      color: ${props => props.theme.inputColorPlaceholder};
      // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
      opacity: 1;
    }

    // Disabled and read-only inputs
    //
    // HTML5 says that controls under a fieldset > legend:firstChild won't be
    // disabled if the fieldset is disabled. Due to implementation difficulty, we
    // don't honor that edge case; we style them as disabled anyway.
    &:disabled,
    &[readonly] {
      background-color: ${props => props.theme.inputBgDisabled};
      // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655.
      opacity: 1;
    }
`;

Input.defaultProps = {
  theme: {
    inputDg: defaults.white,
    inputBgDisabled: defaults.grayLighter,

    inputColor: defaults.gray,
    inputBorderColor: sassRgba(defaults.black, .15),
    inputBtnBorderWidth: defaults.borderWidth, // For form controls and buttons
    inputBoxShadow: `inset 0 1px 1px rgba($black,.075)`,

    inputBorderRadius: defaults.borderRadius,
    inputBorderRadiusLg: defaults.borderRadiusLg,
    inputBorderRadiusSm: defaults.borderRadiusSm,

    inputBgFocus: defaults.inputBg,
    inputBorderColorFocus: `lighten($brand-primary, 25%)`,
    // inputBoxShadowFocus: `${defaults.inputBoxShadow}, ${sassRgba(inputBorderColorFocus, .6)}`,
    inputColorFocus: defaults.inputColor,

    inputColorPlaceholder: defaults.grayLight,

    // inputHeight: ((defaults.fontSizeBase * inputBtnLineHeight) + (inputBtnPaddingY * 2)),
    // inputHeightLg: ((defaults.fontSizeLg * inputBtnLineHeightLg) + (inputBtnPaddingYLg * 2)),
    // inputHeightSm: ((defaults.fontSizeSm * inputBtnLineHeightSm) + (inputBtnPaddingYSm * 2)),

    inputTransition: `${defaults.borderColor} ease-in-out .15s, box-shadow ease-in-out .15s`,

    formTextMarginTop: '.25rem',
    formFeedbackMarginTop: defaults.formTextMarginTop,

    formCheckMarginBottom: '.5rem',
    formCheckInputGutter: '1.25rem',
    formCheckInputMarginY: '.25rem',
    formCheckInputMarginX: '.25rem',

    formCheckInlineMarginX: '.75rem',

    formGroupMarginBottom: '1rem',

    inputGroupAddonBg: defaults.grayLighter,
    inputGroupAddonBorderColor: defaults.inputBorderColor,
  }
}

export default Input;
