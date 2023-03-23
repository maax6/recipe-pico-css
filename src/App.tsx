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
        <p className="recipe">
          <p></p>
        </p>
      </section>
    </main>
  );
}
export default App;
