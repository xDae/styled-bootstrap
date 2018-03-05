// @flow

import styled from 'styled-components';

import themeProp from '../utils/theme';

import { formGroupMarginBottom } from './default-theme';

const FormGroup = styled.div`
  margin-bottom: ${themeProp('formGroupMarginBottom', formGroupMarginBottom)};
`;

export default FormGroup;
