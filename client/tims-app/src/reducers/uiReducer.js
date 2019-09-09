import { UI_ACTION_TYPES } from '../dashboard/actions/UiActions';

const defaultState = {
  dashboardHeaderTitle: 'Dashboard'
};

export const ui = (state = defaultState, action) => {
  switch (action.type) {
    case UI_ACTION_TYPES.DASHBOARD_TITLE_CHANGED:
      return {
        ...state,
        dashboardHeaderTitle: action.payload
      };

    default:
      return state;
  }
};
