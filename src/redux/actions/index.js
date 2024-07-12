export const QUERY = "QUERY";
export const SELECTED = "SELECTED";

export const queryAction = data => ({ type: QUERY, payload: data });
export const selectAction = data => ({ type: SELECTED, payload: data });
