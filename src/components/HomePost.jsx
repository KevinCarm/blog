import "bulma/css/bulma.css";
import { Fragment, useState } from "react";
import "./HomePost.css";
import photoIcon from "../assets/photo.png";

const HomePost = () => {
    const [isPostValid, setIsPostValid] = useState(false);

    const onPostChangeHandler = event => {
        const postValue = event.target.value;
        if (!postValue || postValue.length === 0) {
            setIsPostValid(false);
        } else {
            setIsPostValid(true);
        }
    };

    const onPostClickHandler = () => {
        console.log("Click");
    };

    return (
        <Fragment>
            <div className='container mt-6'>
                <div className='card_container'>
                    <div className='home_title is-flex-direction-row is-justify-content-flex-start'>
                        Home
                    </div>
                    <div className='card' style={{ borderRadius: "10px" }}>
                        <div className='card-content'>
                            <h4
                                className='mb-3'
                                style={{ textAlign: "left", fontSize: "17px" }}
                            >
                                What's happening?
                            </h4>
                            <div className='columns'>
                                <div className='column'>
                                    <textarea
                                        onChange={onPostChangeHandler}
                                        class='textarea'
                                        placeholder='Hi!'
                                    ></textarea>
                                </div>
                            </div>
                            <footer className='p-3 card-footer is-flex-direction-row is-justify-content-space-between'>
                                <div
                                    className='img_select'
                                    style={{
                                        position: "relative",
                                        cursor: "pointer",
                                    }}
                                >
                                    <img
                                        src={photoIcon}
                                        alt=''
                                        style={{
                                            cursor: "pointer",
                                            width: "30px",
                                            height: "30px",
                                        }}
                                    />
                                    <input
                                        type='file'
                                        style={{
                                            cursor: "pointer",
                                            opacity: "0.0",
                                            position: "absolute",
                                            top: "0",
                                            bottom: "0",
                                            right: "0",
                                            left: "0",
                                        }}
                                    />
                                </div>
                                <div>
                                    <button
                                        onClick={onPostClickHandler}
                                        className='button is-primary is-rounded'
                                        disabled={!isPostValid}
                                    >
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
