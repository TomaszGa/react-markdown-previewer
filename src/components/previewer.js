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
      input: "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Test link](https://freecodecamp.com)*"
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
        <div>
          <form>
            <textarea className="input-textbox" type="text" onChange={this.inputChange} defaultValue={this.state.input}></textarea>
          </form>
        </div>
        <div className="output-box">
         <Output currentInput={this.state.input} />
        </div>
      </div>
		)
	}
}

module.exports = Previewer;