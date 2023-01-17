import "bulma/css/bulma.css";
import "./Signup.css";
import { Fragment } from "react";

const Signup = () => {
    return (
        <Fragment>
            <div className='container main_container box'>
                <div className='is-flex is-flex-direction-column input_container'>
                    <div>
                        <h3 className='mb-4'>Create your account</h3>
                    </div>
                    <div className='content'>
                        <input
                            className='input'
                            type='text'
                            placeholder='User name'
                        />
                    </div>
                    <div className='content'>
                        <input
                            className='input'
                            type='email'
                            placeholder='Email'
                        />
                    </div>
                    <div className='content'>
                        <input
                            className='input'
                            type='password'
                            placeholder='Password'
                        />
                    </div>
                    <hr />
                    <div className='is-flex is-justify-content-center'>
                        <button className="button is-primary is-rounded">Sign up</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Signup;
