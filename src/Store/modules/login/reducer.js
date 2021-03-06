import produce from "immer";

const INITIAL_STATE = {
  token: null,
  signed: false,
  business: null,
  loading: false,
};

export default function login(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@login/SIGN_IN_SUCCESS": {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.business = action.payload.user.business;
        draft.loading = false;
        break;
      }
      case "@login/SIGN_UP_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@login/SIGN_IN_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@login/SIGN_FAILURE": {
        draft.loading = false;
        break;
      }
      case "@login/SIGN_OUT": {
        draft.token = null;
        draft.signed = null;
        break;
      }
      default:
    }
  });
}
