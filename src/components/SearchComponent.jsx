import React, {Component} from 'react';


class SearchComponent extends Component{
    // To use class or not to use class.. that is the question

    constructor(){
        super();
        this.state = {
            searchField: ''
        }
    }

    handleChange = e =>{
        this.setState({
            searchField: e.target.value
        });
    };

    handleSubmit = e =>{
        e.preventDefault();
        this.props.searchUser(this.state.searchField);
        e.target.search.value = '';
    };


    render(){
        return(
            <div className="search-bar">
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input type="text" name="search" placeholder="search user" onChange={this.handleChange}/>
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchComponent;