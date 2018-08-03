import React from 'react';

class AddTodoRow extends React.Component {

    state = {
        newValue:''
    };

    changedValue = (e) => {
       let listInputValue = e.target.value;
       this.setState({newValue: listInputValue });
       
    };

    saveChangedVal = (e) => {
        e.preventDefault();
        this.props.saveList(this.state.newValue);
        document.getElementById('to-do-form').reset();
    }

    render() {
        return (
            <form id="to-do-form">
                <input type="text"  id="listInput" className="listInput" onChange={this.changedValue} placeholder="Enter Text" />
                <button className="submitBtn" onClick={this.saveChangedVal} href="#">Save Now</button>
            </form>
        )
    }
};

export default AddTodoRow;