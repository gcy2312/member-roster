import React, { Component } from 'react';
import MembersList from '../MembersList/MembersList';
import SearchName from '../SearchName/SearchName';
import SearchAct from '../SearchAct/SearchAct';




import { mockData } from "../../data";


export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Members: [],
      filteredMembers: [],
      value: '',
      actValue: '',
    };
    this.handleRemove = this.handleRemove.bind(this);
  }

  getMemberData() {
    const members = mockData.members;
    this.setState({ Members: members }, function stateUpdateComplete() {
      console.log(this.state.Members);
    }.bind(this));
  }

  handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    this.setState({ value: value });
  }

  handleActSearch = (event) => {
    let actValue = event.target.value.toLowerCase();
    this.setState({ actValue: actValue });
  }

  nameFiltered = () =>
    this.state.Members
      .filter((member) =>
        member.firstName.toLowerCase().includes(this.state.value) ||
        member.lastName.toLowerCase().includes(this.state.value));

  actFiltered = () =>
    this.state.Members
      .filter(member => member.activities
        .some(activity => activity.toLowerCase().includes(this.state.actValue))
      )
      .map(member => {
        let n = Object.assign({}, member, {
          'activities': member.activities.filter(
            activity => activity.toLowerCase().includes(this.state.actValue)
          )
        })
        return n;
      });

  filterMembers = () => {
    if (this.state.value === "" && this.state.actValue === "") {
      return this.state.Members
    } else if (this.state.actValue !== "") {
      return this.actFiltered()
    } else if (this.state.value !== "") {
      return this.nameFiltered()
    }
  }

  handleRemove(id) {
    const newList = this.state.Members.filter((item) => item.id !== id);
    this.setState({ Members: newList }, function stateUpdateComplete() {
      console.log(this.state.Members);
    }.bind(this));
  }

  componentDidMount() {
    this.getMemberData();
  }
  render() {
    const filteredMembers = this.filterMembers();
    return (
      <div>
        <SearchName handleSearch={this.handleSearch}></SearchName>
        <SearchAct handleActSearch={this.handleActSearch}></SearchAct>

        <MembersList
          members={filteredMembers}
          onRemove={this.handleRemove}
        ></MembersList>

      </div>
    )
  }
}