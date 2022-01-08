import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input:""
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleAdd(this.state.input);
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            input:event.target.value
        })
    }

    render() {
        return (           
            <form>
                <input onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Add</button>
            </form>
        )
    }
}

export default TodoForm;