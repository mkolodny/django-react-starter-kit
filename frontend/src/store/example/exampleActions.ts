import { createAction } from 'redux-starter-kit';

const namespace = 'example/'

interface ReplaceMePayload {
}

export const replaceMe = createAction<ReplaceMePayload>(`${namespace}/replaceMe`);
