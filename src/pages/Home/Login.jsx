import "bulma/css/bulma.css";
import "./Login.css";
import { Fragment, useRef, useState } from "react";

const Login = () => {
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

        if (passwordValue && passwordValue.length >= 8) {
            setIsPasswordValid(true);
        } else {
            setIsPasswordValid(false);
        }

        if (emailValue && reg.test(emailValue)) {
            setIsEmailValid(true);
        } else {
            setIsEmailValid(false);
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
