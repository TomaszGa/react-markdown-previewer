var React = require('react');

class Previewer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      input: "Well this is a test"
    }
  this.inputChange = this.inputChange.bind(this);
  }
  inputChange(event) {
    var value = event.target.value;
    console.log(value);
    this.setState(function(){
      return {
        input: value
      }
    });
  }  
	render(){
		return(
      <div className="app-box">
      <div className="input-box">
      <form className="input-form">
        <label>Enter text to preview</label>
        <textarea className="input-textbox" type="text" onChange={this.inputChange}></textarea>

      </form>
      </div>
      <div className="output-box">
       <p>This is your output:</p>
      </div>
      </div>
		)
	}
}

module.exports = Previewer;