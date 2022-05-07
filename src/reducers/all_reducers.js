
export const users = (state = [], { type, payload }) => {
	switch (type) {

		case 'ALL_USERS':
			return payload;
    
		case 'ONE_USER':
			return payload;

		default:
			return state
	}
};

export const user_profile = (state = {}, { type, payload }) => {
	switch (type) {

		case 'CURRENT_PROFILE':
			return payload;
	
    
		default:
			return state
	}
};
export const guest_profile = (state = [], { type, payload }) => {
	switch (type) {
		
		case 'GUEST_DATA':
			return payload;
		
		case 'RESET_DATA':
			return [];
    
		default:
			return state
	}
};

export const user_projects = (state = {}, { type, payload }) => {
	switch (type) {

		case 'USER_PROJECTS':
			return payload;
    
		default:
			return state
	}
};

