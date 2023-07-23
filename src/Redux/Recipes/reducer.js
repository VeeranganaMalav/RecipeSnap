import { GETRECIPES, ISLOADING, ISERROR } from "./actiontypes";

const initState = {
  isLoading: false,
  isError: false,
  recipes: [],
  totalPages: 0,
};
export const reducer = (state = initState, { type, payload, totalPages }) => {
  switch (type) {
    case ISLOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case ISERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GETRECIPES: {
      return {
        ...state,
        isLoading: false,
        recipes: payload,
        totalPages: totalPages,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
