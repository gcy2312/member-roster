import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';



export default class SearchAct extends Component {
  state = {
    actQuery: '',
  }

  handleActSearch = (suggestion) => {
    this.setState({
      actQuery: suggestion,
    });
    this.props.handleActSearch(suggestion);
  }

  render() {
    return (


      <Form id="nameSearch" >
        <Form.Group >
          <FloatingLabel controlId="floatingInput"
            label="Search by activity"
          >
            <Form.Control
              type="text"
              placeholder="Search by name"
              onChange={(event) => this.handleActSearch(event)} />
          </FloatingLabel>
        </Form.Group>

      </Form>


    )
  }
}