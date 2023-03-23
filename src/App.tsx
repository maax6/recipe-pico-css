import './App.scss';
import './index.scss';
import cheesecake from './assets/cheesecake.png';
import { RxDragHandleDots2 } from 'react-icons/rx';
import { FaUtensils } from 'react-icons/fa';
export function App() {
  return (
    <main className="container">
      <h1 className="title">Classic Cheesecake Recipe</h1>

      <div className="cta">
        <div className="cta__dots">
          <RxDragHandleDots2 style={{ transform: 'rotate(90deg)' }} />{' '}
        </div>
        <p className='cta__text'>
          Look no further for a creamy and ultra smooth classic cheesecake
          recipe! Paired with a buttery graham cracker crust, no one can deny
          its simple decadence. For the best results, bake in a water bath.
        </p>
      </div>

      <img src={cheesecake} alt="Cheesecake" className='img'/>
      <div className="yieldsCard">
        <span className="material-symbols-outlined yieldsCard__icon">
          local_dining
        </span>
        <div className="yieldsCard__serving">
          <span className="yieldsCard__title">YIELDS</span>
          <span className="yieldsCard__numbers">12 servings</span>
        </div>
      </div>
    </main>
  );
}
export default App;
