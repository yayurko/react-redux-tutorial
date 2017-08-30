import ADD_TASK from 'actions.js'

// reducers

const Reducer = (state, action) => {
	switch (action.type) {
		case ADD_TASK:
		  return state;
		case COMPLETE_TASK:
		  return state;
		default:
		  return state;
	}
}