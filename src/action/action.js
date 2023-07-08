import * as actions from "./actiontypes"
export const setUser = (payload) => {
    return {
      type: actions.set_users,
      user: payload,
    };
  };