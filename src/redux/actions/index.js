export const QUERY = "QUERY";

export const queryAction = data => ({ type: QUERY, payload: data });
export const getSongsAction = param => {
  return async dispatch => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + param);
      if (resp.ok) {
        const data = await resp.json();
        dispatch(queryAction(data.data.slice(0, 4)));
      } else {
        throw new Error("Errore nel fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
