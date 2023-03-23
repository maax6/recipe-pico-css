import './App.scss';
import './index.scss';
import cheesecake from './assets/cheesecake.png';
import { RxDragHandleDots2 } from 'react-icons/rx';
export function App() {
  return (
    <main className="container">
      <h1>Classic Cheesecake Recipe</h1>

      <p className="cta">
        <div className="dots">
          <RxDragHandleDots2 style={{ transform: 'rotate(90deg)' }} />{' '}
        </div>
        <p>
          Look no further for a creamy and ultra smooth classic cheesecake
          recipe! Paired with a buttery graham cracker crust, no one can deny
          its simple decadence. For the best results, bake in a water bath.
        </p>
      </p>

      <img src={cheesecake} alt="Cheesecake" />
    </main>
  );
}
export default App;
