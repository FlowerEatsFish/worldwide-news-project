/**
 * To mutate the value of max news number via Actions.
 */

import { SET_MAX_NEWS_NUMBER } from 'action';
import { IReducerMaxNewsNumberAction } from 'model/reducer';
import { storeMaxNewsNumber } from 'store';

const maxNewsNumber = (state = storeMaxNewsNumber, action: IReducerMaxNewsNumberAction): number => {
  switch (action.type) {
    case SET_MAX_NEWS_NUMBER:
      return action.value;
    default:
      return state;
  }
};

export default maxNewsNumber;
