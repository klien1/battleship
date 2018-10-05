import React, { Component } from "react";
import { connect } from "react-redux";
import { joinLobby } from "../../actions";
import renderList from "./renderList";

class UserList extends Component {
  componentWillMount() {
    this.props.joinLobby();
  }

  render() {
    return (
      <div>
        <h5>UserList</h5>
        <ul className="collection userList">
          {renderList(this.props.userList, "collection-item textWrap")}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth,
    userList: state.userList
  };
};

export default connect(
  mapStateToProps,
  { joinLobby }
)(UserList);
