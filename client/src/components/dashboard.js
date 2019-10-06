import React, { Component } from 'react'
import { MDBContainer,MDBRow, MDBCol} from 'mdbreact';

import NavBar from './navBar'

export class dashboard extends Component {
    render() {
        return (
            <>
            <NavBar/>
            <MDBContainer>
            <MDBRow className="loader">
                <MDBCol md="4"></MDBCol>
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="spinner-border text-success" role="status">
              <span className="sr-only">Loading...</span>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="spinner-border text-danger" role="status">
              <span className="sr-only">Loading...</span>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="spinner-border text-warning" role="status">
              <span className="sr-only">Loading...</span>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="spinner-border text-info" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            </MDBRow>
            </MDBContainer>
          </>
        )
    }
}

export default dashboard
