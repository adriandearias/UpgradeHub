const INITIAL_STATE = {
  cars: [],
  carsApproved: [],
  carsNotApproved: [],
  loading: false,
  error: null,
};

export const carsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "GET_CARS":
      return {
        ...state,
        loading: false,
        cars: [...action.contenido.cars],
        carsApproved: [...action.contenido.carsApproved],
        carsNotApproved: [...action.contenido.carsNotApproved],
      };
    case "CAR_POSTED":
      return { ...state, loading: false };
    case "ERROR_POSTING_CAR":
      return { ...state, loading: false, error: action.contenido };
    default:
      return state;
  }
};
