import React from 'react';

export class AddNewTask extends React.Component{
  constructor(){
    super();
    this.submit = this.submit.bind(this);
  }

  submit(event){
    event.preventDefault();
    var input = event.target.querySelector('input')
    var value = input.value;
    input.value = '';
    this.props.updateList(value);
  }
  render(){
    return(
      <form onSubmit={this.submit}>
        <input type="text" placeholder="What needs to be done today ?"/>
        <p/>
      </form>
    )
  }
}
