import './App.scss';
import './index.scss';
import cheesecake from './assets/cheesecake.png';
import { RxDragHandleDots2 } from 'react-icons/rx';
export function App() {
  return (
    <main className="container">
      <h1 className="title">Classic Cheesecake Recipe</h1>

      <div className="cta">
        <div className="cta__dots">
          <RxDragHandleDots2 style={{ transform: 'rotate(90deg)' }} />{' '}
        </div>
        <p className="cta__text">
          Look no further for a creamy and ultra smooth classic cheesecake
          recipe! Paired with a buttery graham cracker crust, no one can deny
          its simple decadence. For the best results, bake in a water bath.
        </p>
      </div>

      <img src={cheesecake} alt="Cheesecake" className="img" />
      <section className="sec">
        <article className="rapid">
          <div className="rapid__Card orange">
            <span className="material-symbols-outlined rapid__Card__icon">
              local_dining
            </span>
            <div className="rapid__Card__serving">
              <span className="rapid__Card__title">YIELDS</span>
              <span className="rapid__Card__numbers">12 servings</span>
            </div>
          </div>
          <div className="rapid__timings">
            <div className="rapid__Card">
              <span className="material-symbols-outlined rapid__Card__icon">
                schedule
              </span>
              <div className="rapid__Card__serving">
                <span className="rapid__Card__title">PREP TIME</span>
                <span className="rapid__Card__numbers">45 minutes</span>
              </div>
            </div>
            <div className="rapid__Card">
              <span className="material-symbols-outlined rapid__Card__icon">
                schedule
              </span>
              <div className="rapid__Card__serving">
                <span className="rapid__Card__title">COOK TIME</span>
                <span className="rapid__Card__numbers">1 hour</span>
              </div>
            </div>
            <div className="rapid__Card">
              <span className="material-symbols-outlined rapid__Card__icon">
                schedule
              </span>
              <div className="rapid__Card__serving">
                <span className="rapid__Card__title">TOTAL TIME</span>
                <span className="rapid__Card__numbers">7,75 hours</span>
              </div>
            </div>
          </div>
        </article>
        <div className="recipe">
          <div className="recipe__ingredients">
            <h2 className="recipe__ingredients__title">Ingredients</h2>
            <h3 className="recipe__ingredients__meal">Graham Cracker Crust</h3>
            <div className="recipe__checklist">
              <div className="recipe__checklist__item">
                <div className="recipe__checklist__item__checkbox">
                  <input type="checkbox" />
                </div>
                <span className="recipe__checklist__item__details">
                  {' '}
                  1 and 1/2 cups (150g) graham cracker crumbs (about 10 full
                  sheet graham crackers)
                </span>
              </div>
              <div className="recipe__checklist__item">
                <div className="recipe__checklist__item__checkbox">
                  <input type="checkbox" />
                </div>
                <span className="recipe__checklist__item__details">
                  {' '}
                  5 Tablespoons (70g) unsalted butter, melted{' '}
                </span>
              </div>
              <div className="recipe__checklist__item">
                <div className="recipe__checklist__item__checkbox">
                  <input type="checkbox" />
                </div>
                <span className="recipe__checklist__item__details">
                  {' '}
                  1/4 cup (50g) granulated sugar{' '}
                </span>
              </div>
              <h3 className="recipe__ingredients__meal">Cheesecake</h3>
              <div className="recipe__checklist__item">
                <div className="recipe__checklist__item__checkbox">
                  <input type="checkbox" />
                </div>
                <span className="recipe__checklist__item__details">
                  {' '}
                  four 8-ounce blocks (904g) full-fat cream cheese, softened to
                  room temperature
                </span>
              </div>
              <div className="recipe__checklist__item">
                <div className="recipe__checklist__item__checkbox">
                  <input type="checkbox" />
                </div>
                <span className="recipe__checklist__item__details">
                  {' '}
                  1 cup (200g) granulated sugar
                </span>
              </div>
              <div className="recipe__checklist__item">
                <div className="recipe__checklist__item__checkbox">
                  <input type="checkbox" />
                </div>
                <span className="recipe__checklist__item__details">
                  {' '}
                  1 cup (240g) full-fat sour cream, at room temperature
                </span>
              </div>
              <div className="recipe__checklist__item">
                <div className="recipe__checklist__item__checkbox">
                  <input type="checkbox" />
                </div>
                <span className="recipe__checklist__item__details">
                  {' '}
                  1 teaspoon pure vanilla extract
                </span>
              </div>
              <div className="recipe__checklist__item">
                <div className="recipe__checklist__item__checkbox">
                  <input type="checkbox" />
                </div>
                <span className="recipe__checklist__item__details">
                  {' '}
                  2 teaspoons fresh lemon juice (optional, but recommended)
                </span>
              </div>
              <div className="recipe__checklist__item">
                <div className="recipe__checklist__item__checkbox">
                  <input type="checkbox" />
                </div>
                <span className="recipe__checklist__item__details">
                  {' '}
                  3 large eggs, at room temperature
                </span>
              </div>
              <div className="recipe__checklist__item">
                <div className="recipe__checklist__item__checkbox">
                  <input type="checkbox" />
                </div>
                <span className="recipe__checklist__item__details">
                  {' '}
                  topping suggestions: salted caramel, lemon curd, strawberry
                  topping, chocolate ganache, red wine chocolate ganache, fresh
                  fruit, whipped cream, or raspberry sauce (recipe in notes)
                </span>
              </div>
            </div>
            <h2 className="recipe__ingredients__title">Instructions</h2>
          </div>
        </div>
      </section>
    </main>
  );
}
export default App;
