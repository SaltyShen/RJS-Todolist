import React, {Component} from 'react';
import './App.css';
import ListItem from './Components/ListItem';
import AddList from './Components/addToList';

class App extends Component{
  state = {
    
    list: [
      {priority: 1, memo: "Buy face masks."},
      {priority: 2, memo: "Stay at home."},
      {priority: 3, memo: "Learn some React."}
    ]

  }
  addToList = (newItem) => {

    console.log(this.state.list);
    let list = [...this.state.list, newItem]
    
    this.setState({
      list:list
    })
  }
  rmFromList = (priority) => {

    console.log(priority);
      let rmList = this.state.list.filter(things => {
        return things.priority !== priority
      });

      this.setState({
        list : rmList
      })
  }
  
  render(){
    return (
      <div className="App">
        <h1 className="App-header"> To Do List</h1>
          <ListItem list = {this.state.list} rmFromList = {this.rmFromList}/>
          <AddList list = {this.state.list} addToList={this.addToList}/>
      </div>
    );
  }
}

export default App;
