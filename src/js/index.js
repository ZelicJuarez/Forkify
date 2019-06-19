import Search from "./models/Search";
import * as searchView from "./views/searchView";
import { elements, renderLoader, clearLoader } from "./views/base";

/*GLOBAL STATE OF THE APP
  - Search object
  - Current Recipe Object
  - Shopping List Object
  - Liked recipes
*/
const state = {};

const controlSearch = async () => {
  // 1) Get query from the View
  const query = searchView.getInput();
  //console.log(query);

  if (query) {
    // 2) New search object and add to State
    state.search = new Search(query);
    // 3) Prepare UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);
    // 4) Search for recipes
    await state.search.getResults();
    // 5) Render results on UI
    clearLoader();
    searchView.renderResults(state.search.result);
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault(); // to avoid page reload
  controlSearch();
});

elements.searchResPages.addEventListener("click", e => {
  const btn = e.target.closest(".btn-inline");
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});
