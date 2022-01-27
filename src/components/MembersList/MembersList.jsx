import React, { Component } from "react";
import './MembersList.css';
import Member from "../Member/Member";

export default class MembersList extends Component {
  render() {
    const { members, onRemove } = this.props;
    return (
      <div id="membersList">
        {members.map((member) => (
          <div key={member.id}>
            <Member
              member={member}
              onRemove={onRemove}
            >
            </Member>
          </div>
        ))}
      </div>
    )
  }
}