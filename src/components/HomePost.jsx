import "bulma/css/bulma.css";
import { Fragment, useState } from "react";
import "./HomePost.css";
import photoIcon from "../assets/photo.png";

const HomePost = () => {
    const [isPostValid, setIsPostValid] = useState(false);
    const [fileValue, setFileValue] = useState("");
    const [postContent, setPostContent] = useState("");

    const onPostChangeHandler = event => {
        const postValue = event.target.value;
        if (!postValue || postValue.length === 0) {
            setIsPostValid(false);
        } else {
            setPostContent(postValue);
            setIsPostValid(true);
        }
    };

    const onPostClickHandler = () => {
        const formData = new FormData();
        formData.append("file", fileValue);
        formData.append("content", postContent);
        fetch("http://localhost:8080/post", {
            method: "POST",
            body: formData,
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJST0xFUyI6WyJST0xFX1VTRVIiXSwic3ViIjoia2V2aW5AZW1haWwuY29tIiwiaWF0IjoxNjc0MzI3ODk5LCJleHAiOjE2NzQzNTY2OTl9.y3_mKswGr0r8ZYRFtkIQQ_OiDr-7RUlrkNGxc90nIME`,
            },
        }).then(res => {
            console.log(res);
        });
    };

    const onFileChangeHandler = event => {
        setFileValue(event.target.files[0]);
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
                                        onChange={onFileChangeHandler}
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
