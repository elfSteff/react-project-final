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




const stable = axios.create({
  baseURL: "https://api.tvmaze.com",
  headers: { Accept: "application/json" },
});

const showsHome = async (querySearch) => {
  try {
    const home = await stable.get(`/search/shows?q=${querySearch}`);
    return home;
  } catch (error) {
    console.log(error);
  }
};

export { showsHome };

