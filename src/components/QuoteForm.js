import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    content: '',
    author: '',
    votes: 0
  }

  handleOnChange = event => {
    // Handle Updating Component State
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    // Handle Form Submit event default
    event.preventDefault()
    // Create quote object from state
    const quote = {
      ...this.state, id: uuid(),
    };
    // Pass quote object to action creator
    this.props.dispatchAddQuote(quote);
    // Update component state to return to default state
    this.setState({
      content: '',
      author: ''
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        value={this.state.content}
                        name="content"
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        name="author"
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    dispatchAddQuote: (quote) => dispatch(addQuote(quote))
  }
}

//add arguments to connect as needed
export default connect(null, mapDispatchToProps)(QuoteForm);
