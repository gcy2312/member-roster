import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';



export default class SearchName extends Component {
  state = {
    query: '',
  }

  handleNameSearch = (suggestion) => {
    this.setState({
      query: suggestion,
    });
    this.props.handleSearch(suggestion);
  }

  render() {
    return (


      <Form id="nameSearch" >
        <Form.Group >
          <FloatingLabel controlId="floatingInput"
            label="Search by name"
          >
            <Form.Control

              type="text"
              placeholder="Search by name"
              onChange={(event) => this.handleNameSearch(event)} />
          </FloatingLabel>
        </Form.Group>

      </Form>


    )
  }
}