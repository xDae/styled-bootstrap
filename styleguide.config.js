const path = require('path');

module.exports = {
  title: 'styled-bootstrap',
  highlightTheme: 'material',
  components: 'src/components/**/[A-Z]*.js',
  styleguideDir: 'docs',
  theme: {
    color: {
      base: '#333',
      // name: '#fff',
      link: '#563d7c',
      linkHover: '#cdbfe3',
      sidebarBackground: '#563d7c',
    },
    sidebarWidth: 250
  },
  styles: {
    Logo: {
      logo: {
        color: '#fff'
      }
    },
    ComponentsList: {
      item: {
        '& a': {
          color: '#fff !important',
          fontWeight: 500
        },
        '& a:hover': {
          fontWeight: 500,
          color: '#cdbfe3 !important'
        }
      }
    }
  },
  webpackConfig: Object.assign({},
    require('./node_modules/react-scripts/config/webpack.config.dev'),
    {
      resolve: {
        alias: {
          'rsg-components/Wrapper': path.join(__dirname, 'src/lib/styleguide/Wrapper'),
          'rsg-components/StyleGuide/StyleGuideRenderer': path.join(__dirname, 'src/lib/styleguide/StyleGuideRenderer')
        }
      }
    }
  )
};
