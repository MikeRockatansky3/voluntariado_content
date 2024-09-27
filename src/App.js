import logo from './logo.svg';
import './App.css';
import Voluntariados from './components/voluntariados/Voluntariados';
import Registro from './components/registro/Registro';

function App() {
  return (
    <div className="App">
      <main>
      <div className='container'>

      <div className='voluntariados'>
          <Voluntariados />
        </div>

        <div className='registro'>
          <Registro />
        </div>
        
      </div>
      </main>
    </div>
  );
}

export default App;
