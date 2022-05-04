import React from "react";
import './UserProfile.css'

export default class UserProfile extends React.Component {

    render() {
        return (
            <div className="container" id="body1">
                <div className="row">
                    <div className="col-12">

                        <div className="my-5">
                            <h3>My Profile</h3>
                            <hr/>
                        </div>

                        <form className="file-upload1">
                            <div className="row mb-5 gx-5">

                                <div className="col-xxl-8 mb-5 mb-xxl-0">
                                    <div className="bg-secondary-soft1 px-41 py-51 rounded1">
                                        <div className="row g-3">
                                            <h4 className="mb-4 mt-0">Contact detail</h4>
                                            <div className="col-md-6">
                                                <label className="form-label">First Name *</label>
                                                <input type="text" className="form-control1" placeholder=""
                                                       aria-label="First name" placeholder="Scaralet"/>
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label">Last Name *</label>
                                                <input type="text" className="form-control1" placeholder=""
                                                       aria-label="Last name" placeholder="Doe"/>
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label">Phone number *</label>
                                                <input type="text" className="form-control1" placeholder=""
                                                       aria-label="Phone number" placeholder="(333) 000 555"/>
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label">Mobile number *</label>
                                                <input type="text" className="form-control1" placeholder=""
                                                       aria-label="Phone number" placeholder="+91 9852 8855 252"/>
                                            </div>

                                            <div className="col-md-6">
                                                <label htmlFor="inputEmail4" className="form-label">Email *</label>
                                                <input type="email" className="form-control1" id="inputEmail4"
                                                       placeholder="example@homerealty.com"/>
                                            </div>
                                            <div className="col-md-6">
                                                {/*<label className="form-label">Skype *</label>*/}
                                                {/*<input type="text" className="form-control1" placeholder=""*/}
                                                {/*       aria-label="Phone number" value="Scaralet D"/>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-4">
                                    <div className="bg-secondary-soft1 px-41 py-51 rounded1">
                                        <div className="row g-3">
                                            <h4 className="mb-4 mt-0">Upload your profile photo</h4>
                                            <div className="text-center">
                                                <div className="square1 position-relative display-2 mb-3">
                                                    <i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary1"/>
                                                </div>
                                                <input type="file" id="customFile" name="file" hidden=""/>
                                                <label className="btn btn-success-soft1 btn-block"
                                                       htmlFor="customFile">Upload</label>
                                                <button type="button" className="btn btn-danger-soft1">Remove
                                                </button>
                                                <p className="text-muted mt-3 mb-0"><span
                                                    className="me-1">Note:</span>Minimum
                                                    size 300px x 300px</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-5 gx-5">

                                <div className="col-xxl-6">
                                    <div className="bg-secondary-soft1 px-41 py-51 rounded1">
                                        <div className="row g-3">
                                            <h4 className="my-4">Change Password</h4>
                                            <div className="col-md-6">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Old
                                                    password
                                                    *</label>
                                                <input type="password" className="form-control1"
                                                       id="exampleInputPassword1"/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="exampleInputPassword2" className="form-label">New
                                                    password
                                                    *</label>
                                                <input type="password" className="form-control1"
                                                       id="exampleInputPassword2"/>
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="exampleInputPassword3" className="form-label">Confirm
                                                    Password *</label>
                                                <input type="password" className="form-control1"
                                                       id="exampleInputPassword3"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="gap-3 d-md-flex justify-content-md-end text-center">
                                <button type="button" className="btn btn-danger btn-lg">Delete profile</button>
                                <button type="button" className="btn btn-primary btn-lg">Update profile</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}
