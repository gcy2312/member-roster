import React, { Component } from "react";
import './Member.css';
import Card from 'react-bootstrap/Card';


export default class Member extends Component {

  handleClick = (id) => {
    this.props.onRemove(id);
  }

  render() {
    const { member } = this.props;
    return (
      <div id="memberCards">
        <Card id="indCard">
          <Card.Body>
            <Card.Title>{member.firstName} {member.lastName}</Card.Title>
            <Card.Text>Age: {member.age}</Card.Text>
            <Card.Text>Rating: {member.rating}</Card.Text>
            <Card.Text>Activities:</Card.Text>

            {
              member.activities.map((activity, index) => (
                <ul key={index}>
                  <li>{activity}</li> </ul>
              ))
            }

            <button type="button" onClick={() => this.handleClick(member.id)}>
              Remove Member
            </button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}