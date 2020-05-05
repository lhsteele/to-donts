import React, { Component } from 'react'
import ListItem from './ListItem';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ["Picnic at the beach", "Go to see a movie", "Tapas with friends", "Go on holiday"],
      toDont: ''
    }
    this.COLORS = ["#fbb2d0", "#e4b014", "#91bdd0", "#f1613a"]
  }

  handleInput = ev => {
    this.setState({ toDont: ev.target.value })
  };

  handleEnterKeyPress = ev => {
    if (ev && ev.keyCode === 13) {
      const newToDont = this.state.toDont;
      const currentList = this.state.list;
      currentList.push(newToDont);
      this.setState({ list: currentList, toDont: '' })
    }
  }

  handleAddClick = () => {
    const newToDont = this.state.toDont;
    const currentList = this.state.list;
    currentList.push(newToDont);
    this.setState({ list: currentList, toDont: '' })
  }

  removeListItem = name => {
    const currentList = this.state.list;
    const newList = currentList.filter(item => item !== name)
    this.setState({ list: newList })
  };

  renderList = () => {
    const currentList = this.state.list;
    return currentList.map((listItem, i) => {
      return <ListItem key={i} name={listItem} removeListItem={this.removeListItem} color={this.COLORS[i % this.COLORS.length]}/>
    })
  };

  render() {
    return (
      <div className="list-container">
        <div className="header">To-Don'ts</div>
        <div className="add-item-container">
          <div className="input-add-icon-container" type="form">
            <input 
              type="input" 
              className="input-field" 
              onChange={ev => this.handleInput(ev)} 
              onKeyDown={ev => this.handleEnterKeyPress(ev)}
              value={this.state.toDont}/>
            <AddCircleOutlineIcon className="add-icon" onClick={this.handleAddClick}/>
          </div>
        </div>
        <ul className="list">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

