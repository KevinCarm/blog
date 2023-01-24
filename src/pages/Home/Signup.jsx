import "bulma/css/bulma.css";
import "./Signup.css";
import logo from "../../assets/logo.png";
import { Fragment, useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const SIGNUP_URL = "http://localhost:8080/users";

const Signup = () => {
    const history = useHistory();
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [isUserNameValid, setIsUserNameValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isFormTouched, setIsFormTouched] = useState(false);
    const [isRequestSending, setIsRequestSending] = useState(false);

    const onFormSubmit = event => {
        event.preventDefault();
        setIsFormTouched(true);
        setIsRequestSending(true);
        const usernameValue = usernameRef.current.value;
        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        let emailIsValid = false;
        let usernameIsValid = false;
        let passwordIsValid = false;

        if (usernameValue && usernameValue.length >= 6) {
            setIsUserNameValid(true);
            usernameIsValid = true;
        } else {
            setIsUserNameValid(false);
            usernameIsValid = false;
        }

        if (passwordValue && passwordValue.length >= 8) {
            setIsPasswordValid(true);
            passwordIsValid = true;
        } else {
            setIsPasswordValid(false);
            passwordIsValid = false;
        }

        if (emailValue && reg.test(emailValue)) {
            setIsEmailValid(true);
            emailIsValid = true;
        } else {
            setIsEmailValid(false);
            emailIsValid = false;
        }

        if (usernameIsValid && emailIsValid && passwordIsValid) {
            const requestData = {
                email: emailValue,
                username: usernameValue,
                password: passwordValue,
                imagePath: "",
            };
            fetch(SIGNUP_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestData),
            })
                .then(response => {
                    setIsRequestSending(false);
                    return response.json();
                })
                .then(data => {
                    setIsRequestSending(false);
                    console.log(data);
                    return history.push("/login");
                })
                .catch(err => {
                    setIsRequestSending(false);
                    console.log(err);
                });
        }
    };

    const usernameStyle =
        !isUserNameValid && isFormTouched ? "input is-danger" : "input";

    const emailStyle =
        !isEmailValid && isFormTouched ? "input is-danger" : "input";

    const passwordStyle =
        !isPasswordValid && isFormTouched ? "input is-danger" : "input";

    const buttonStyle = !isRequestSending
        ? "button is-primary is-rounded"
        : "button is-primary is-rounded is-loading";

    return (
        <Fragment>
            <form
                onSubmit={onFormSubmit}
                className='container main_container box'
            >
                <div className='is-flex is-flex-direction-column input_container'>
                    <div className='is-flex is-justify-content-center mb-6'>
                        <img
                            style={{ width: "65px", height: "65px" }}
                            src={logo}
                        />
                    </div>
                    <div>
                        <h3 className='mb-4'>Create your account</h3>
                    </div>
                    <div className='content'>
                        <div className='field'>
                            <div className='control'>
                                <input
                                    ref={usernameRef}
                                    className={usernameStyle}
                                    type='text'
                                    placeholder='User name'
                                />
                            </div>
                            {!isUserNameValid && isFormTouched ? (
                                <p className='help is-danger'>
                                    User name invalid
                                </p>
                            ) : null}
                        </div>
                    </div>
                    <div className='content'>
                        <div className='field'>
                            <div className='control'>
                                <input
                                    ref={emailRef}
                                    className={emailStyle}
                                    type='email'
                                    placeholder='Email'
                                />
                            </div>
                            {!isEmailValid && isFormTouched ? (
                                <p className='help is-danger'>Email invalid</p>
                            ) : null}
                        </div>
                    </div>
                    <div className='content'>
                        <div className='field'>
                            <div className='control'>
                                <input
                                    ref={passwordRef}
                                    className={passwordStyle}
                                    type='password'
                                    placeholder='Password'
                                />
                            </div>
                            {!isPasswordValid && isFormTouched ? (
                                <p className='help is-danger'>
                                    Password invalid
                                </p>
                            ) : null}
                        </div>
                    </div>
                    <hr />
                    <div className='is-flex is-justify-content-center'>
                        <button type='submit' className={buttonStyle}>
                            Sign up
                        </button>
                    </div>
                </div>
            </form>
        </Fragment>
    );
};

export default Signup;
