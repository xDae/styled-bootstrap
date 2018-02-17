import React, { Fragment, Component } from 'react';

import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { Collapse, Button, CardBody, Card } from '../../main';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  render() {
    return (
      <div>
        <Button
          color="primary"
          onClick={this.toggle}
          style={{ marginBottom: '0.5rem' }}
        >
          Toggle
        </Button>
        <Collapse
          isOpen={boolean('isOpen', this.state.collapse)}
          onEntering={action('onEntering Collapse')}
          onEntered={action('onEntered Collapse')}
          onExit={action('onExit Collapse')}
          onExiting={action('onExiting Collapse')}
          onExited={action('onExited Collapse')}
        >
          <Card>
            <CardBody>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default storiesOf('Collapse', module)
  .addDecorator(withKnobs)
  .addDecorator(
    host({
      title: 'Toggle the visibility of content across your project.',
      align: 'center',
      width: 420
    })
  )
  .add('Default Collapse', () => (
    <Fragment>
      <Example />
    </Fragment>
  ));
