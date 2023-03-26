import { useState } from 'react';
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
            <div className="recipe__instructions">
              <div className="recipe__instructions__item">
                <span className="recipe__instructions__item__number">1</span>
                <span className="recipe__instructions__item__details">
                  {' '}
                  Adjust the oven rack to the lower-middle position and preheat
                  oven to 350°F (177°C).
                </span>
              </div>
              <div className="recipe__instructions__item">
                <span className="recipe__instructions__item__number">2</span>
                <span className="recipe__instructions__item__details">
                  {' '}
                  Make the crust: Using a food processor, pulse the graham
                  crackers into crumbs. Pour into a medium bowl and stir in
                  sugar and melted butter until combined. (You can also pulse it
                  all together in the food processor.) Mixture will be sandy.
                  Press firmly into the bottom and slightly up the sides of a
                  9-inch or 10-inch springform pan. No need to grease the pan
                  first. I use the bottom of a measuring cup to pack the crust
                  down tightly. Pre-bake for 8 minutes. Remove from the oven and
                  place the hot pan on a large piece of aluminum foil. The foil
                  will wrap around the pan for the water bath in step 4. Allow
                  crust to slightly cool as you prepare the filling.
                </span>
              </div>
              <div className="recipe__instructions__item">
                <span className="recipe__instructions__item__number">3</span>
                <span className="recipe__instructions__item__details">
                  Make the filling: Using a handheld or stand mixer fitted with
                  a paddle attachment, beat the cream cheese and granulated
                  sugar together on medium-high speed in a large bowl until the
                  mixture is smooth and creamy, about 2 minutes. Add the sour
                  cream, vanilla extract, and lemon juice then beat until fully
                  combined. On medium speed, add the eggs one at a time, beating
                  after each addition until just blended. After the final egg is
                  incorporated into the batter, stop mixing. To help prevent the
                  cheesecake from deflating and cracking as it cools, avoid
                  over-mixing the batter as best you can.
                </span>
              </div>
              <div className="recipe__instructions__item">
                <span className="recipe__instructions__item__number">4</span>
                <span className="recipe__instructions__item__details">
                  Prepare the simple water bath (see note) Boil a pot of water.
                  You need 1 inch of water in your roasting pan for the water
                  bath, so make sure you boil enough. I use an entire kettle of
                  hot water. As the water is heating up, wrap the aluminum foil
                  around the springform pan. Pour the cheesecake batter on top
                  of the crust. Use a rubber spatula or spoon to smooth it into
                  an even layer. Place the pan inside of a large roasting pan.
                  Carefully pour the hot water inside of the pan and place in
                  the oven. (Or you can place the roasting pan in the oven
                  first, then pour the hot water in. Whichever is easier for
                  you.)
                </span>
              </div>
              <div className="recipe__instructions__item">
                <span className="recipe__instructions__item__number">5</span>
                <span className="recipe__instructions__item__details">
                  Bake cheesecake for 55-70 minutes or until the center is
                  almost set. When it’s done, the center of the cheesecake will
                  slightly wobble if you gently shake the pan. Turn the oven off
                  and open the oven door slightly. Let the cheesecake sit in the
                  oven in the water bath as it cools down for 1 hour. Remove
                  from the oven and water bath, then cool cheesecake completely
                  at room temperature. Then refrigerate the cheesecake for at
                  least 4 hours or overnight.
                </span>
              </div>
              <div className="recipe__instructions__item">
                <span className="recipe__instructions__item__number">6</span>
                <span className="recipe__instructions__item__details">
                  Use a knife to loosen the chilled cheesecake from the rim of
                  the springform pan, then remove the rim. Using a clean sharp
                  knife, cut into slices for serving. For neat slices, wipe the
                  knife clean and dip into warm water between each slice.
                </span>
              </div>
              <div className="recipe__instructions__item">
                <span className="recipe__instructions__item__number">7</span>
                <span className="recipe__instructions__item__details">
                  Serve cheesecake with desired toppings. Cover and store
                  leftover cheesecake in the refrigerator for up to 5 days.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="source">
        <i style={{ color: '#BDBDBD' }}>
          Source: <br />{' '}
          <a href="https://sallysbakingaddiction.com/classic-cheesecake/">
            {' '}
            https://sallysbakingaddiction.com/classic-cheesecake/
          </a>
        </i>
      </div>
      <footer className="footer">created by ⌘ Maxime - devChallenges.io</footer>
    </main>
  );
}
export default App;
