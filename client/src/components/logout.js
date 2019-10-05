import React, { Component } from 'react'
import  { notification }  from '../util/notification';
import {UserService} from './../services/userService';

export class logout extends Component {


    componentDidMount(){

        const token = localStorage.getItem("token");
        
        if(token){
         const logout = UserService.logout()
         localStorage.clear()
         this.props.history.push("/");
         notification.createNotification(201,"Logged out Successfully")
        }else{
            this.props.history.push("/");
            notification.createNotification(500,"Please Login to Access")
        }
      }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default logout