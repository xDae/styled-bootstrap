import styled from 'styled-components';

import * as defaults from '../../defaultTheme';

const Heading = styled.span`
  margin-bottom: ${defaults.headingsMarginBottom};
  font-family: ${defaults.headingsFontFamily};

  font-weight: ${defaults.headingsFontWeight};
  line-height: ${defaults.headingsLineHeight};
  color: ${defaults.headingsColor};

  ${props => {
    switch (props.size) {
      case 'h1':
        return `font-size: ${defaults.fontSizeH1};`;
      case 'h2':
        return `font-size: ${defaults.fontSizeH2};`;
      case 'h3':
        return `font-size: ${defaults.fontSizeH3};`;
      case 'h4':
        return `font-size: ${defaults.fontSizeH4};`;
      case 'h5':
        return `font-size: ${defaults.fontSizeH5};`;
      case 'h6':
        return `font-size: ${defaults.fontSizeH6};`;
      default:
        return `font-size: ${defaults.fontSizeH1};`;
    }
  }};
`;

Heading.h1 = Heading.withComponent('h1').extend`
  ${props => !props.size && `${`font-size: ${defaults.fontSizeH1};`}`}
`;

Heading.h2 = Heading.withComponent('h2').extend`
  ${props => !props.size && `${`font-size: ${defaults.fontSizeH3};`}`}
`;

Heading.h3 = Heading.withComponent('h3').extend`
  ${props => !props.size && `${`font-size: ${defaults.fontSizeH3};`}`}
`;

Heading.h4 = Heading.withComponent('h4').extend`
  ${props => !props.size && `${`font-size: ${defaults.fontSizeH4};`}`}
`;

Heading.h5 = Heading.withComponent('h5').extend`
  ${props => !props.size && `${`font-size: ${defaults.fontSizeH5};`}`}
`;

Heading.h6 = Heading.withComponent('h6').extend`
  ${props => !props.size && `${`font-size: ${defaults.fontSizeH6};`}`}
`;

export default Heading;
