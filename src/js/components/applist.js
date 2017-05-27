import React from 'react';
  var html
export class ToDoAppList extends React.Component{
  constructor(){
    super();
    this.remove = this.remove.bind(this)
    this.strike = this.strike.bind(this)
    this.state = {
      isComplete: null
    };
  }
  remove(elem){
    var value = elem.target.parentNode.parentNode.querySelector('span').innerText;
    this.props.remove(value);
  }
  strike(elem){
    var value = elem.target.parentNode.parentNode.querySelector('span').innerText;
    this.props.check(value)

    // var parentNode = elem.target.parentNode.parentNode;
    // console.log($(parentNode).find('li:eq('+ position + ")"))
    // console.log(position)
  }
  render(){
    // items = this.props.tasks.map(() => return <li>items )

    var items = this.props.tasks.map((element,i) => {
      return <li key={i}><span>{element}</span><div className="btn-container"><button className="button -salmon center" onClick={this.remove}>X</button><button className="button -blue center" onClick={this.strike}>✓</button></div></li>
    })
    return(
      <ul>
        {items}
      </ul>
    )
  }
}
