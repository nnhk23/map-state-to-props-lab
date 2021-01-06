import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {/* Users: */}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.props.users.map(obj => <li key={obj.hometown}>Username: {obj.username}</li>)}
          {/* In addition, display the total number of users curently in the store */}
          Total number of users shopping: {this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  // console.log(state)
  // debugger
  return { users: state.users, userCount: state.users.length }
}
// connect this component to Redux
export default connect(mapStateToProps)( Users )
