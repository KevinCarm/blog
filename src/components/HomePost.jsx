import "bulma/css/bulma.css";
import { Fragment } from "react";
import "./HomePost.css";

const HomePost = () => {
    return (
        <Fragment>
            <div className='container mt-6'>
                <div className='card_container'> 
                    <div className='home_title is-flex-direction-row is-justify-content-flex-start'>
                        Home
                    </div>
                    <div className='card'>
                        <div className='card-content'>
                            <div className='columns'>
                                <div className='column'>
                                    <textarea
                                        class='textarea'
                                        placeholder="What's happening ?"
                                    ></textarea>
                                </div>
                            </div>
                            <footer className='p-3 card-footer is-flex-direction-row is-justify-content-flex-end'>
                                <div>
                                    <button className='button is-primary is-rounded'>
                                        Post
                                    </button>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default HomePost;
