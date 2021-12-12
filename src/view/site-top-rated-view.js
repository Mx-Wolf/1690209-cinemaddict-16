import AbstractView from './abstract-view.js';

const createSiteTopRatedFilmsTemplate = () => `<section class="films-list films-list--extra films-list--top-rated">
  <h2 class="films-list__title">Top rated</h2>

  <div class="films-list__container">
  </div>
  </section>`;

export default class SiteTopRatedFilmsView extends AbstractView {
  get template() {
    return createSiteTopRatedFilmsTemplate();
  }
}
