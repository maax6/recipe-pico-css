import './App.scss';
import './index.scss';
import cheesecake from './assets/cheesecake.png';

export function App() {
  return (
    <main className="container">
      <h1>Classic Cheesecake Recipe</h1>
      <img src={cheesecake} alt="Cheesecake" />
      <fieldset>
        <label meta="danger" htmlFor="terms">
          <input type="checkbox" id="terms" name="terms" />I agree to the Terms
          and Conditions
        </label>
      </fieldset>
    </main>
  );
}
export default App;
