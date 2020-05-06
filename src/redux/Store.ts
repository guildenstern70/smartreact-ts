/*
 * Copyright (c) Alessio Saltarin 2020.
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import { createStore } from 'redux';
import { rootReducer } from './reducers/RootReducer';

const store = createStore(rootReducer);

export default store;
