import { Component } from "react";

const INITIAL_STATE = {
    name: '',
    number: ''
}

class CreateContact extends Component {
    state = INITIAL_STATE;

    handleSubmit = (event) => {
        event.preventDefault()
        const { name, number } = this.state;
        if (!this.state.name) return alert('Enter new contact');
        if (!name) return alert('Enter name');
        if (!number) return alert('Enter number');
        this.props.createContact(this.state);
        // this.props.createContact({name, number});
        console.log(this.state);
        this.setState(INITIAL_STATE);
        
    }
    // handleChange = (event) => {
    //     this.setState({ name: event.target.value });
    // }

    //коли було тільки імʼя
    // handleChange = ({target: {value}}) => {
    //     this.setState({ name: value });
    // }

     handleChange = ({target: {name, value}}) => {
        this.setState({ [name]: value });
    }
    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={this.handleChange} required />
                <label>Number</label>
                <input type="tel" name="number" value={number} onChange={this.handleChange} required />
                <button type="submit">Add contact</button>
             </form>
        )
    }
}

export default CreateContact;

