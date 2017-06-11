import './App.css';
var React = require('react');
var Previewer = require ('./components/previewer')
class App extends React.Component {
  render() {
    return (
      <div >
      <h1 className="app-heading">Markdown Previewer</h1>
      <Previewer/>
      <footer>Coded by Tomasz Galina</footer>
      </div>
    );
  }
}

export default App;
