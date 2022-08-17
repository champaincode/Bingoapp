import './App.css';
import logo from "./assets/logo.png"

function App() {
  return (
    <div className='switchBaño'>
      <img src={logo} className="imglogo"/>
    <div className="App">
      <div className='baño1'>
        <h1>BAÑO POR BELGRANO</h1>
      <label className="button" for="toggle">
  <input id="toggle" type="checkbox"/>
  <span className="slider"></span>
</label>
      </div>
      <div className='baño2'>
        <h1>BAÑO POR CHICLANA</h1>
        <label className="buttonDos" for="toggleDos">
  <input id="toggleDos" type="checkbox"/>
  <span className="sliderDos"></span>
</label>
      </div>
 
    </div>
   

    </div>
  );
}

export default App;
