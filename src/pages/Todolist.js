import React, { Component } from 'react';
import Card from '../components/Card';

class TodoList extends Component {
  constructor(props){
    super()
    this.state = {
      taskList: [{title: '1', priority: 1},
                  {title: '3', priority: 2}],
      inputTitle: 'hi',
      inputPriority: 1
    }
  }

  changeState = (event) => {
    this.setState({[event.target.name]: [event.target.value]})
  }

  render(){
    return (
      <div >
        <div className='col' style={{'background-color': 'red'}}>
          {this.state.taskList.map(task => 
            <Card info={task} />
          )}
        </div>
        <div className='col'>
          Title: <input type='text' name='inputTitle' 
          value={this.state.inputTitle} onChange={this.changeState}></input>
          
          Priority: <input type='number' name='inputPriority' 
          value={this.state.inputPriority} onChange={this.changeState}></input>
        </div>
        <button className='btn btn-danger'>Click ME</button>
      </div>
    )
  }
}

export default TodoList;