import './App.css';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <div>
        <Lottery/>
        <Lottery title="Mini Daily" maxNum={10} maxBalls={4} />
      </div>
    </div>
  );
}

export default App;
