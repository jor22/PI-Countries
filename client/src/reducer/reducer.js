let initialState = {
    countries: [],
    filtredCountries: [],
    country: []
  };

  
const  rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GET_ALL":
        return {
          ...state,
          countries: action.payload,
          filtredCountries: action.payload
        }

        case 'GET_BY_NAME':
        return {
          ...state,
          countries: action.payload,
        }


        case 'GET_DETAILS':
        return {
          ...state,
          country: action.payload,
        }

        case 'FILTER_BY_ACTIVITY':
          const filteredByAct =
          action.payload === 'All' ? state.filtredCountries : state.filtredCountries.filter( (c) => 
          c.Activities && c.Activities.filter((act) => act.name === action.payload).length)
          return {
          ...state,
          countries: filteredByAct,
        }

        case 'FILTER_BY_CONTINENT':
        const filteredByCont =
          action.payload === 'All' ? state.filtredCountries : state. filtredCountries.filter((c) => 
          c.continent === action.payload)
        return {
          ...state,
          countries: filteredByCont,
        }
      

        case 'SORT':
        var sorted
        if (action.payload.length === 2) {
          sorted =
            action.payload === 'AZ'
              ? state.countries.sort((a, b) => {
                  if (a.name > b.name) return 1
                  if (a.name < b.name) return -1
                  return 0
                })
              : state.countries.sort((a, b) => {
                  if (a.name > b.name) return -1
                  if (a.name < b.name) return 1
                  return 0
                })
        }else {
          sorted =
            action.payload === 'populationAsc'
              ? state.countries.sort((a, b) => a.population - b.population)
              : state.countries.sort((a, b) => b.population - a.population)
        }
      return {
        ...state,
        countries: sorted,
      }

      default:
        return state;
    }
  }
  
  export default rootReducer;
  