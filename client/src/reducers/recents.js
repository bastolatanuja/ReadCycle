import { GET_RECENTS } from "../constants/actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (recents = [], action) => {
  switch (action.type) {
    case GET_RECENTS:
      return action.payload;
    default:
      return recents;
  }
};
