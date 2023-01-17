import "bulma/css/bulma.css";
import "./HomeContentItem.css";
import profile from "../assets/profile.jpg";
import favoriteOff from "../assets/favorite_off.png";
import favoriteOn from "../assets/favorite_on.png";
import comments from "../assets/comments.png";
import { useEffect, useState } from "react";

const HomeContentItem = props => {
    const post = props.data;
    const initialFavs = props.data.favs;

    const [isFavoriteClick, setIsFavoriteClick] = useState(false);
    const [favsCount, setFavsCount] = useState(initialFavs);
    const [favsIsTouched, setFavsIsTouched] = useState(false);

    const onFavoriteClickHandler = () => {
        setIsFavoriteClick(prev => !prev);
        setFavsIsTouched(true);
    };

    useEffect(() => {
        if (favsIsTouched) {
            if (isFavoriteClick) {
                setFavsCount(c => c + 1);
            } else {
                setFavsCount(c => c - 1);
            }
        }
    }, [isFavoriteClick]);

    return (
        <div className='container'>
            <div className='container_item'>
                <div>
                    <div className='container_writter'>
                        <img src={profile} alt='' />
                        <p>@kevincarm023</p>
                    </div>
                    <hr />
                    <div>
                        <p>{post.content}</p>
                        <div>
                            <img
                                className=' is-flex is-flex-direction-row is-justify-content-center post_img'
                                src={post.image}
                                alt=''
                            />
                        </div>
                    </div>
                    <div
                        className='mt-5 is-flex'
                        style={{ marginLeft: "50px" }}
                    >
                        <div className='columns'>
                            <div className='column'>
                                <img
                                    onClick={onFavoriteClickHandler}
                                    style={{ width: "25px", height: "25px" }}
                                    src={
                                        isFavoriteClick
                                            ? favoriteOn
                                            : favoriteOff
                                    }
                                    alt=''
                                />
                            </div>
                            <div className='column'>
                                <p>{favsCount}</p>
                            </div>
                        </div>
                        <div className='ml-3 columns'>
                            <div className='column'>
                                <img
                                    className='ml-3'
                                    src={comments}
                                    style={{ width: "25px", height: "25px" }}
                                />
                            </div>
                            <div className='column'>
                                <p>{post.comments}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContentItem;
