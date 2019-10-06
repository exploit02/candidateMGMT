import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import  './../css/login.css'
import {UserService} from './../services/userService';
import  { notification }  from '../util/notification';


export class login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: null,
       password: null
    }
  }
  
  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

 handleSubmitForm = async (event) => {
    event.preventDefault();

    if(this.state.email && this.state.password){
        const res = await UserService.login(this.state)

        if(res.status == 201){
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("email", res.data.user.email);
            localStorage.setItem("name", res.data.user.firstName);
            localStorage.setItem("isLoggedIn", true);
            this.setState({
                email: null ,
                password: null 
            });
            this.props.history.push("/dashboard");
            notification.createNotification(res.status,"Logged in Successfully")
        }else{
          notification.createNotification(res.status, res.message)
        }

    }else{
        notification.createNotification(400,"Did you miss filling some field.")
    }

 }

  render() {
    return (
      <MDBContainer >
      <MDBRow className="login_row_margin">
      <MDBCol md="7">
      </MDBCol>
        <MDBCol md="5">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Log In</p>
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Your Email
                </label>
                <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  name="email"
                  onChange={this.handleChange}
                />
                <br />
                <label
                  htmlFor="defaultFormCardEmailEx"
                  className="grey-text font-weight-light"
                >
                  Your Password
                </label>
                <input
                  type="password"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                  name="password"
                  onChange={this.handleChange}
                />
                <div className="text-center py-4 mt-3">
                  <MDBBtn className="btn btn-outline-purple" type="submit" onClick={this.handleSubmitForm}>
                    Log In
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    )
  }
}

export default login
