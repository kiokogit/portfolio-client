
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

