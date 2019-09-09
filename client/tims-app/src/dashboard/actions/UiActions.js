export const UI_ACTION_TYPES = {
  DASHBOARD_TITLE_CHANGED: 'DASHBOARD_TITLE_CHANGED'
};

export const dashboardTitleUpdated = updatedTitle => {
  return {
    type: UI_ACTION_TYPES.DASHBOARD_TITLE_CHANGED,
    payload: updatedTitle
  };
};
