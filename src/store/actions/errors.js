import { ERROR_ENABLE, ERROR_DISABLE, CHANGE_ERROR_TEXT} from '../constants/errors';

export const errorEnable = () => ({
  type: ERROR_ENABLE,
});

export const errorDisable = () => ({
  type: ERROR_DISABLE,
});

export const changeErrorText = (text) => ({
  type: CHANGE_ERROR_TEXT,
  text,
});