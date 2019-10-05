import React, { Component } from 'react'
import { MDBContainer, MDBBtn,MDBRow, MDBCol, MDBTable,MDBInput, MDBTableBody, MDBTableHead, MDBCard, MDBCardBody, MDBIcon, MDBPagination, MDBPageItem, MDBPageNav, MDBFormInline} from 'mdbreact';
import { Link } from 'react-router-dom'
import NavBar from './navBar'

export class candidateDetails extends Component {
    render() {
        return (
            <div>
               <NavBar/>
               {/* <Link to={{pathname :`/addcandidates`, state: {Id:null} }}>
              <MDBBtn outline color="primary" style={{float:'right'}}>
              <MDBIcon icon="chevron-left" />
              </MDBBtn>
            </Link>  */}
               <MDBContainer>
                    <MDBRow className="login_row_margin">
                        <MDBCol>
                            <MDBCard>
                                <MDBCardBody>
                                <p className="h4 text-center py-4">Candidate Details</p>
                                <h5>Personal Details</h5>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Aadhar Number :
                                            </span>Srimanta </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Name :
                                            </span> Ghosh </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Phone Number :
                                            </span>Srimanta </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">DOB :
                                            </span> Ghosh </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Alternate Phone Number :
                                            </span>Srimanta </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Email :
                                            </span> Ghosh </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Gender :
                                            </span>Srimanta </label>
                                        </div>
                                    </div>
                                </div>
                                <br/><br/>
                                <h5>Address</h5>
                                <hr/>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Address Line 1 :
                                            </span>Srimanta </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Address Line 2 :
                                            </span> Ghosh </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">City :
                                            </span>Srimanta </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">District :
                                            </span> Ghosh </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">State :
                                            </span>Srimanta </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Country :
                                            </span> Ghosh </label>
                                        </div>
                                    </div>
                                </div>
                                <br/><br/>
                                <h5>Other Details</h5>
                                <hr/>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Source :
                                            </span> Srimanta </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Source Type :
                                            </span> Ghosh </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Employment Status :
                                            </span>Srimanta </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Occupation :
                                            </span> Ghosh </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Current Annual Income:
                                            </span>Srimanta </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Educational Qualification:
                                            </span> Ghosh </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Number of Successfull Enterprises :
                                            </span>Srimanta </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Number of Failed Enterprises :
                                            </span> Ghosh </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Has Bank Account:
                                            </span>Srimanta </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Has A Credit History:
                                            </span> Ghosh </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Needs Training:
                                            </span>Srimanta </label>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <div className="md-form1">
                                            <label className="control-label"><span id="label">Status:
                                            </span> Ghosh </label>
                                        </div>
                                    </div>
                                </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

export default candidateDetails
