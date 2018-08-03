import React from 'react';
import AddTodoRow from '../AddTodoRow/AddTodoRow';
import SaveTypedValue from '../ShowTodoData/ShowTodoData'

class Todo extends React.Component {

    state = {
        //counter: 0,
        showList: false,
        newCounter: 0,
        todoSavedList: [],
        AddTodoRowValue: [],
    };

    addList = () => {
        const doesShow = this.state.showList;
        this.setState({ showList : !doesShow})
    }

    saveList = (getVal) => {
        //e.preventDefault();
        const savedList = this.state.AddTodoRowValue;
        savedList.push(getVal);
        this.setState({ AddTodoRowValue: savedList });
        this.setState({ newCounter: ++this.state.newCounter });
    }

    render() {
        let displayList = null;
        if (this.state.showList) {
            displayList = (
                <AddTodoRow saveList={this.saveList} />
            );
        }
        //let todo = [];
        //for (let i = 0; i < this.state.counter; i++) {
        //    todo.push(<AddTodoRow saveList={this.saveList} />);
        //};

        let displaySavedValue = [];
        for (let i = 0; i < this.state.newCounter; i++) {
            displaySavedValue.push(<SaveTypedValue key={i} text={this.state.AddTodoRowValue[i]} />);
        }

        return (
            <div>
                <button className="addList" onClick={this.addList} value="Add List">Add List</button>
                {displayList}
                {/* <SaveTypedValue text={this.state.AddTodoRowValue}/> */}
                {displaySavedValue}
            </div>
        );
    }
}

export default Todo;