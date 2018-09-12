/*
* NOTE:
* Duck reducers are automatically combined in rootReducer.js
*
* Duck selectors need to be binded to their corresponding state slince.
* This is done MANUALLY in selectors/duckSelectors.js
*/

export { default as app } from './app';
export { default as auth } from './auth';
export { default as inputArea } from './inputArea';
export { default as messages } from './messages';
