const initialState= {
  profileData: null,
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PROFILE_DATA_FULFILLED':
      return Object.assign({}, state, {
        profileData: action.payload
      })
    default:
      return state
  }
}

export default mainReducer;
