import './App.css';
var React = require('react');
var Previewer = require ('./components/previewer')
class App extends React.Component {
  render() {
    return (
      <div >
      <Previewer/>
      </div>
    );
  }
}

export default App;
