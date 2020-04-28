import React, {Component} from 'react';

class AddToList extends Component {
    state = {

        priority: null,
        memo: null

    }
    handleChange = (e) => {
        console.log(e); 
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        this.props.addToList(this.state);
    }
    render(){
        return(
        <div>
            <form className="list-form" onSubmit={this.handleSubmit}>
                <input type="number" step="1" min="0" max="100" id="priority" placeholder="Priority(0:100)" onChange={this.handleChange}/>
                <input type="text" id="memo" maxLength="280" placeholder="What do you need to do?" onChange={this.handleChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
}

export default AddToList;