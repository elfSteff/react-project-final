import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.tvmaze.com",
  headers: { Accept: "application/json" },
});

const searchShows = async (querySearch) => {
  try {
    const res = await instance.get(`/search/shows?q=${querySearch}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export { searchShows };

const imgSearch = axios.create({
  baseURL: "https://api.tvmaze.com",
  headers: { Accept: "application/json" },
});

const searchSingleShows = async (querySingleSearch) => {
  try {
    const img = await imgSearch.get(
      ` /singlesearch/shows?q=:query${querySingleSearch}`
    );
    return img;
  } catch (error) {
    console.log(error);
  }
};
export { searchSingleShows };