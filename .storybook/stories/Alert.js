import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Alert from '../../src/components/Alert/Alert';

export default storiesOf('Alert', module)
  .add('Alert', () => (
    <div>
      <Alert type="success">
        <strong>Well done!</strong> You successfully read <a href="#">this important alert message</a>.
      </Alert>
      <Alert type="info">
        <strong>Heads up!</strong> This <a href="#">alert needs your attention</a>, but it's not super important.
      </Alert>
      <Alert type="warning">
        <strong>Warning!</strong> Better check yourself, you're <a href="#">not looking too good</a>.
      </Alert>
      <Alert type="danger">
        <strong>Oh snap!</strong> <a href="#">Change a few things up</a> and try submitting again.
      </Alert>
    </div>
  ));
