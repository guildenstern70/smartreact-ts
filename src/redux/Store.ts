/*
 * Copyright (c) Alessio Saltarin 2019-2021
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import { createStore } from 'redux';
import { rootReducer } from './reducers/RootReducer';

const store = createStore(rootReducer);

export default store;
