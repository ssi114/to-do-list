import React from 'react';

class SaveTypedValue extends React.Component {
    render() {
        return (
            <div className="savedList">{this.props.text}</div>
        )
    }
};

export default SaveTypedValue;