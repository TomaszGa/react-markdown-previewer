var React = require('react');
var marked = require('marked');
function Output(props){

  return(
    <div
    dangerouslySetInnerHTML={{__html: marked(props.currentInput)}}
    />
  )
}

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
        <textarea className="input-textbox" type="text" onChange={this.inputChange} defaultValue="Well this is a test"></textarea>

      </form>
      </div>
      <div className="output-box">
       This is your output:
       <Output currentInput={this.state.input} />
      </div>
      </div>
		)
	}
}

module.exports = Previewer;