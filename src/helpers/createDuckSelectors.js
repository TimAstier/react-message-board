/* eslint-disable comma-dangle */

import bindSelectors from './bindSelectors';

const createBindedSelectors = (stateSlice, selectors) => {
  return bindSelectors(
    state => state.get(stateSlice),
    selectors
  );
};

const createDuckSelectors = ducksObject => {
  return Object
    .keys(ducksObject)
    .map(duck => ({
      slice: duck,
      selectors: {...ducksObject[duck].selectors}
    }))
    .map(duck => ({
      [duck.slice]: createBindedSelectors(duck.slice, duck.selectors) }
    ))
    .reduce((slices, slice) => Object.assign(slices, slice), {});
};

export default createDuckSelectors;
