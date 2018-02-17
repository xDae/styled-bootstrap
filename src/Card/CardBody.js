import styled from 'styled-components';

import themeProp from '../utils/theme';
import { cardSpacerX } from './default-theme';

const CardBody = styled.div`
  flex: 1 1 auto;
  padding: ${themeProp('cardSpacerX', cardSpacerX)};
`;

export default CardBody;
