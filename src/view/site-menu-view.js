import { createElement } from '../render.js';

const createSiteMenuTemplate = (filters) => `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${filters.inWatchlist}</span></a>
      <a href="#history" class="main-navigation__item main-navigation__item--active">History <span class="main-navigation__item-count">${filters.inHistory}</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${filters.inFavorites}</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;


export default class SiteMenuView {
  #element = null;
  #filters = null;

  constructor(filters) {
    this.#filters = filters;
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createSiteMenuTemplate(this.#filters);
  }

  removeElement() {
    this.#element = null;
  }
}
