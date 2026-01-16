//import logo from './logo.svg';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

//Demo ES6
const name = "React";
//tạo arrow function
const sayHello = () => {
  return `Hello, ${name}!`;
}

//Demo JSX
function App() {
  return (
    <div>
      {/*Create JSX element*/}
      <h3>Welcome to {name} Application</h3>

      {/*Using JavaScript expression inside JSX*/}
      <p>{sayHello()}</p> 

      {/*Redndering HTML elements using JSX*/}
      <p>This is a paragraph element.</p>

    </div>
  );
}

//Demo Fragment: thay vì dùng <div> bao quanh thì dùng <></> để tránh tạo thêm node thừa trong DOM
export default App;
