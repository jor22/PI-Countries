let initialState = {
    countries: [],
    country: []
  };

  
const  rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GET_ALL":
        return {
          ...state,
          countries: action.payload
        }
      
      default:
        return state;
    }
  }
  
  export default rootReducer;
  