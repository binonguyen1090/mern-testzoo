import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import React from 'react';
import { Link } from 'react-router-dom';
// import './forms_index.css'

export default class GetUser extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
      
    this.props.fetchUser(this.props.user_id);
    this.props.fetchUsers();
  }
  render() {
      return(
          <div>
              {
                  this.props.users.map(user =>{
                      if (user._id === this.props.user_id){
                          return user.username;
                      }
                  })
              }
          </div>
      )
  }
}

