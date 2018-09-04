import { configure, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered';

// Loading stories dynamically using Webpack's require.context
// See: https://storybook.js.org/basics/writing-stories/#loading-stories-dynamically

const req = require.context('../src/components', true, /stories.js/);

addDecorator(centered);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
