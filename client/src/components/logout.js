import React, { Component } from 'react'
import  { notification }  from '../util/notification';
import {UserService} from './../services/userService';

export class logout extends Component {


    componentDidMount(){
        const email = localStorage.getItem("email");
        const token = localStorage.getItem("token");
        
        if(token){
         
        }else{
            
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