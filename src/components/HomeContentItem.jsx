import "bulma/css/bulma.css";
import "./HomeContentItem.css";
import profile from "../assets/profile.jpg";
import post from "../assets/post.jpeg";
import favoriteOff from "../assets/favorite_off.png";
import favoriteOn from "../assets/favorite_on.png";
import comments from "../assets/comments.png";
import { useState } from "react";

const HomeContentItem = () => {
    const contentText = `Kanzi the bonobo lives in America and has learnt how to build a fire, light it using matches and toast marshmallows on it. It shows just how like us some primates really are`;

    const [isFavoriteClick, setIsFavoriteClick] = useState(false);
    const onFavoriteClickHandler = () => {
        setIsFavoriteClick(prev => !prev);
    };

    return (
        <div className='container_item'>
            <div>
                <div className='container_writter'>
                    <img src={profile} alt='' />
                    <p>@kevincarm023</p>
                </div>
                <hr />
                <div>
                    <p>{contentText}</p>
                    <div>
                        <img
                            className=' is-flex is-flex-direction-row is-justify-content-center post_img'
                            src={post}
                            alt=''
                        />
                    </div>
                </div>
                <div className='mt-5 is-flex' style={{ marginLeft: "50px" }}>
                    <div className='columns'>
                        <div className='column'>
                            <img
                                onClick={onFavoriteClickHandler}
                                style={{ width: "25px", height: "25px" }}
                                src={isFavoriteClick ? favoriteOn : favoriteOff}
                                alt=''
                            />
                        </div>
                        <div className='column'>
                            <p>654</p>
                        </div>
                    </div>
                    <div className='ml-4 columns'>
                        <div className='column'>
                            <img
                                className='ml-4'
                                src={comments}
                                style={{ width: "25px", height: "25px" }}
                            />
                        </div>
                        <div className='column'>
                            <p>34</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContentItem;
