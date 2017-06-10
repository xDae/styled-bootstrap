import { configure, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered';

addDecorator(centered);

const req = require.context('./stories', true, /.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
