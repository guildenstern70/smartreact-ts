/*
 * Copyright (c) Alessio Saltarin 2020.
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import { ADD_MESSAGE, AllTypes } from './Types';

export function addMessage(message: string): AllTypes {
    return {
        type: ADD_MESSAGE,
        message,
    };
}
