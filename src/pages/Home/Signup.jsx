import "bulma/css/bulma.css";
import "./Signup.css";
import logo from "../../assets/logo.png";
import { Fragment, useRef, useState } from "react";

const Signup = () => {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [isUserNameValid, setIsUserNameValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isFormTouched, setIsFormTouched] = useState(false);

    const onFormSubmit = event => {
        event.preventDefault();
        setIsFormTouched(true);
        const usernameValue = usernameRef.current.value;
        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (usernameValue && usernameValue.length >= 6) {
            setIsUserNameValid(true);
        } else {
            setIsUserNameValid(false);
        }

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

    const usernameStyle =
        !isUserNameValid && isFormTouched ? "input is-danger" : "input";

    const emailStyle =
        !isEmailValid && isFormTouched ? "input is-danger" : "input";

    const passwordStyle =
        !isPasswordValid && isFormTouched ? "input is-danger" : "input";

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
                        <button
                            type='submit'
                            className='button is-primary is-rounded'
                        >
                            Sign up
                        </button>
                    </div>
                </div>
            </form>
        </Fragment>
    );
};

export default Signup;
