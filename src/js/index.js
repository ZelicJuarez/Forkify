import Search from "./models/Search";

/*GLOBAL STATE OF THE APP
  - Search object
  - Current Recipe Object
  - Shopping List Object
  - Liked recipes
*/
const state = {};

const controlSearch = async () => {
  // 1) Get query from the View
  const query = "pizza"; //TODO

  if (query) {
    // 2) New search object and add to State
    state.search = new Search(query);
    // 3) Prepare UI for results

    // 4) Search for recipes
    await state.search.getResults();
    // 5) Render results on UI
    console.log(state.search.result);
  }
};

document.querySelector(".search").addEventListener("submit", e => {
  e.preventDefault(); // to avoid page reload
  controlSearch();
});
