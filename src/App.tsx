import './App.scss';
import './index.scss';
import cheesecake from './assets/cheesecake.png';
import { RxDragHandleDots2 } from 'react-icons/rx';
export function App() {
  return (
    <main className="container">
      <h1>Classic Cheesecake Recipe</h1>
      <fieldset>
        <label htmlFor="terms">
          <input type="checkbox" id="terms" name="terms" />I agree to the Terms
          and Conditions
        </label>
        <p>
        <RxDragHandleDots2 style = {{transform: 'rotate(90deg)' }} />Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eum
          modi eaque laboriosam sint fugiat quis, laudantium non ratione, magni
          cumque? In quo voluptas, sint ipsa quibusdam porro laborum. Dolorum.
        </p>
      </fieldset>
      <img src={cheesecake} alt="Cheesecake" />
    </main>
  );
}
export default App;
