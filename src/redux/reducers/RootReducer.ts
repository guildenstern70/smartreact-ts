/*
 * Copyright (c) Alessio Saltarin 2019-2021
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import { Reducer } from 'redux';
import { ADD_MESSAGE, AllTypes } from '../Types';
import { StoreState } from './StoreState';

export const theAppState: StoreState = {
    messages: [],
};

export const rootReducer: Reducer<StoreState, AllTypes> = (state, action): StoreState => {
    if (state === undefined) return theAppState;

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.message],
            };
    }
    return theAppState;
};
