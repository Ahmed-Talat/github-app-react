import './Form.css';
import React from "react";
import axios from "axios";

class Form extends React.Component {
	state = { userName: '' };
	handleSubmit = async (event) => {
  	event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    this.setState({ userName: '' });
  };
	render() {
  	return (
    	<form onSubmit={this.handleSubmit} class="form-background-color">
        <div class="col-6">
          <input 
            class="form-control"
            type="text" 
            value={this.state.userName}
            onChange={event => this.setState({ userName: event.target.value })}
            placeholder="GitHub username" 
            required 
          />
        </div>
        <div class="col-2 ms-3"> 
          <button class = "form-control btn btn-secondary ">Add card</button>
        </div>
    	</form>
    );
  }
}

export default Form;