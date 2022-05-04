import React from "react";
import './Modal.css'

export class LogIn extends React.Component {
    LoginModal() {
        return (
            <div className="modal py-5" tabIndex="-1" role="dialog"
                 id="modalLogin">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-5 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-end p-0">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"/>
                                    </div>
                                    <div className="col-12 mb-2 d-flex justify-content-center">
                                        <img src={require('./imgs/logoBlueFilledPNG.png')} style={{height: "110px"}} alt="Serenity"/>

                                    </div>
                                    <div className="col-12 d-flex justify-content-center">
                                        <h2 id="custom-colour" className="fw-bold mb-0">Log In</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-body p-5 pt-0 border-bottom-0">
                            <form>

                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control rounded-4" id="floatingInput"
                                           placeholder="name@example.com"/>
                                    <label id="custom-colour" htmlFor="floatingInput">Email Address</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control rounded-4" id="floatingPassword"
                                           placeholder="Password"/>
                                    <label id="custom-colour" htmlFor="floatingPassword">Password</label>
                                </div>

                                <button id="signup-btn" className="w-100 mb-2 btn btn-lg rounded-4 btn-primary"
                                        type="submit">Log In
                                </button>

                                <div className="container">
                                    <div className="row">
                                        <div className="col-6 d-flex justify-content-start ps-4">

                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="flexCheckDefault"/>

                                            <small id="custom-colour" className="text-muted">
                                                &nbsp;Remember Me
                                            </small>

                                        </div>
                                        <div className="col-6 d-flex justify-content-end p-0">
                                            <small id="custom-colour" className="text-muted">
                                                <a id="custom-link" href="#" data-bs-toggle="modal" data-bs-target="#modalForgot">
                                                    Forgot Password?
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>


                                <hr className="my-4"/>
                                <h2 id="custom-colour" className="fs-5 fw-bold mb-3">Or use a third-party</h2>

                                <form action="https://web.facebook.com/login/">
                                <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-4" type="submit">
                                    <i className="bi-facebook" role="img" aria-label="GitHub"/>
                                    &nbsp;Log In with Facebook
                                </button>
                                </form>

                                <form action="https://accounts.google.com/servicelogin">
                                <button className="w-100 py-2 btn btn-outline-warning rounded-4" type="submit">
                                    <i className="bi-google" role="img" aria-label="GitHub"/>
                                    &nbsp;Log In with Google
                                </button>
                                </form>


                            </form>
                        </div>

                        <div className="modal-footer d-flex justify-content-center border-bottom-0">

                            <small className="text-muted">Dont't have an account?&nbsp;
                                <a id="custom-link" href="#" data-bs-target="#modalSignin" data-bs-toggle="modal">
                                    Sign Up

                                </a>
                            </small>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            this.LoginModal()
        );
    }
}

export class SignUp extends React.Component {
    SignupModal() {
        return (
            <div className="modal py-5" tabIndex="-1" role="dialog"
                 id="modalSignin">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-5 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-end p-0">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"/>

                                    </div>
                                    <div className="col-12 mb-2 d-flex justify-content-center">
                                        <img src={require('./imgs/logoBlueFilledPNG.png')} style={{height: "110px"}} alt="Serenity"/>

                                    </div>
                                    <div className="col-12 d-flex justify-content-center">
                                        <h2 id="custom-colour" className="fw-bold mb-0">Sign Up</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-body p-5 pt-0 border-bottom-0">
                            <form>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control rounded-4" id="floatingInput"
                                           placeholder="John Doe"/>
                                    <label id="custom-colour" htmlFor="floatingInput">Name</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control rounded-4" id="floatingInput"
                                           placeholder="name@example.com"/>
                                    <label id="custom-colour" htmlFor="floatingInput">Email Address</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control rounded-4" id="floatingInput"
                                           placeholder="+92 XXX XXXXXXX"/>
                                    <label id="custom-colour" htmlFor="floatingInput">Phone</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control rounded-4" id="floatingPassword"
                                           placeholder="Password"/>
                                    <label id="custom-colour" htmlFor="floatingPassword">Password</label>
                                </div>

                                <button id="signup-btn" className="w-100 mb-2 btn btn-lg rounded-4 btn-primary"
                                        type="submit">Sign Up
                                </button>

                                <small id="custom-colour" className="text-muted">By clicking Sign up, you agree to the
                                    terms of
                                    use.
                                </small>


                                <hr className="my-4"/>
                                <div className="d-flex justify-content-center">
                                <h2 id="custom-colour" className="fs-5 fw-bold mb-3">Or use a third-party</h2>
                                </div>

                                <form action="https://web.facebook.com/login/">
                                <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-4" type="submit">
                                    <i className="bi-facebook" role="img" aria-label="GitHub"/>
                                    &nbsp;Sign Up with Facebook
                                </button>
                                </form>

                                <form action="https://accounts.google.com/servicelogin">
                                <button className="w-100 py-2 btn btn-outline-warning rounded-4" type="submit">
                                    <i className="bi-google" role="img" aria-label="GitHub"/>
                                    &nbsp;Sign Up with Google
                                </button>
                                </form>
                            </form>
                        </div>

                        <div className="modal-footer d-flex justify-content-center border-bottom-0">

                            <small className="text-muted">Already have an account?&nbsp;
                                <a id="custom-link" href="#" data-bs-target="#modalLogin" data-bs-toggle="modal">
                                    Log In
                                </a>
                            </small>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render = () => {
        return (
            this.SignupModal()
        );
    }
}

export class Reset extends React.Component {
    ForgotPasswordModal() {
        return (
            <div className="modal py-5" tabIndex="-1" role="dialog"
                 id="modalForgot">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-5 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-end p-0">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"/>
                                    </div>
                                    <div className="col-12 mb-2 d-flex justify-content-center">
                                        <img src={require('./imgs/logoBlueFilledPNG.png')} style={{height: "110px"}} alt="Serenity"/>

                                    </div>
                                    <div className="col-12 d-flex justify-content-center">
                                        <h2 id="custom-colour" className="fw-bold mb-0">Reset Your Password</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-body p-5 pt-0 border-bottom-0">
                            <form>

                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control rounded-4" id="floatingInput"
                                           placeholder="name@example.com"/>
                                    <label id="custom-colour" htmlFor="floatingInput">Email Address</label>
                                </div>

                                <small id="custom-colour" className="text-muted">
                                    A verification code will be emailed to you. Please submit that at next step with
                                    your new password and we are done.
                                </small>

                                <button id="signup-btn" className="w-100 mt-4 mb-2 btn btn-lg rounded-4 btn-primary"
                                        type="submit">Reset Password
                                </button>


                                <hr className="my-4"/>

                                <div className="row">
                                    <div className="col">
                                        <p id="custom-colour" className="m-0 p-0">
                                            <strong>Contact Us</strong>
                                        </p>
                                        <a id="custom-link" href="#" className="m-0 p-0">
                                            bookings@serenity.pk
                                        </a>
                                    </div>
                                    <div className="col offset-2">
                                        <p id="custom-colour" className="m-0 p-0">
                                            <strong>Help Line</strong>
                                        </p>
                                        <a id="custom-link" href="tel:+923111444100" className="m-0 p-0">
                                            03-XXX-XXX-XXX
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            this.ForgotPasswordModal()
        );
    }
}