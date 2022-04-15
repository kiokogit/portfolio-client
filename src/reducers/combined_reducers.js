import { combineReducers } from 'redux';
import { users, user_profile} from './all_reducers';

const all_reducers = combineReducers({
    users, user_profile
});
export default all_reducers;