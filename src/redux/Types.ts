/*
 * Copyright (c) Alessio Saltarin 2019-2021
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

export const ADD_MESSAGE = 'ADD_MESSAGE';

interface AddMessage {
    type: typeof ADD_MESSAGE;
    message: string;
}

export type AllTypes = AddMessage;
