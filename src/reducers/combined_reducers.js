import { combineReducers } from 'redux';
import { users, user_profile, user_projects, guest_profile, project_details, user_projects_brief} from './all_reducers';

const all_reducers = combineReducers({
    users, user_profile, user_projects, guest_profile, project_details, user_projects_brief
});
export default all_reducers;