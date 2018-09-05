import { configure } from '@storybook/react';

// Loading stories dynamically using Webpack's require.context
// See: https://storybook.js.org/basics/writing-stories/#loading-stories-dynamically

const req = require.context('../src/components', true, /stories.js/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
