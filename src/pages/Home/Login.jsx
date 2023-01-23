import "bulma/css/bulma.css";
import "./Login.css";
import { Fragment, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "../../store/dataSlice";

const LOGIN_URL = "http://localhost:8080/login";

const Login = () => {
    const dispatch = useDispatch();
    const emailRef = useRef();
    const passwordRef = useRef();

    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isFormTouched, setIsFormTouched] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const onFormSubmit = event => {
        event.preventDefault();
        setIsFormTouched(true);

        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        let emailIsValid = false;
        let passwordIsValid = false;

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

        if (emailIsValid && passwordIsValid) {
            fetch(LOGIN_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: emailValue,
                    password: passwordValue,
                }),
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        setShowAlert(true);
                    }
                })
                .then(json => {
                    console.log(json.token);
                    dispatch(dataActions.saveJwt(json.token));
                })
                .catch(err => {
                    setShowAlert(true);
                    console.log(err);
                });
        }
    };

    const emailStyle =
        !isEmailValid && isFormTouched ? "input is-danger" : "input";

    const passwordStyle =
        !isPasswordValid && isFormTouched ? "input is-danger" : "input";

    return (
        <Fragment>
            {showAlert ? (
                <div class='notification is-danger is-light'>
                    <button class='delete'></button>
                    Email or password incorrect, try again
                </div>
            ) : null}
            <form
                onSubmit={onFormSubmit}
                className='container main_container box'
            >
                <div className='is-flex is-flex-direction-column input_container'>
                    <div>
                        <h3 className='mb-4'>Login</h3>
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
                        <button
                            type='submit'
                            className='button is-primary is-rounded'
                        >
                            Log in
                        </button>
                    </div>
                </div>
            </form>
        </Fragment>
    );
};

export default Login;
