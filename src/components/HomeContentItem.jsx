import "bulma/css/bulma.css";
import "./HomeContentItem.css";
import profile from "../assets/profile.jpg";
import favoriteOff from "../assets/favorite_off.png";
import favoriteOn from "../assets/favorite_on.png";
import comments from "../assets/comments.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FILE_URL = "http://localhost:8080/file/";
const UPDATE_FAVORITES_URL = "http://localhost:8080/favorites";

const HomeContentItem = props => {
    const post = props.data;
    const initialFavs = post.numberFavorites;
    const jwt = useSelector(state => state.data.jwt_token);
    const date = Date.parse(post.postDate);
    const finalDate = new Date(date).toLocaleString("en-US");

    const [isFavoriteClick, setIsFavoriteClick] = useState(false);
    const [favsCount, setFavsCount] = useState(initialFavs);
    const [favsIsTouched, setFavsIsTouched] = useState(false);

    const onFavoriteClickHandler = () => {
        setIsFavoriteClick(prev => !prev);
        setFavsIsTouched(true);
    };

    async function updateFavorites(isToIncrease) {
        const response = await fetch(UPDATE_FAVORITES_URL, {
            method: "PUT",
            body: JSON.stringify({
                id: post.id,
                isToIncrease: isToIncrease,
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`,
            },
        });

        console.log(response);
    }

    useEffect(() => {
        if (favsIsTouched) {
            if (isFavoriteClick) {
                setFavsCount(c => c + 1);
                updateFavorites(true);
            } else {
                setFavsCount(c => c - 1);
                updateFavorites(false);
            }
        }
    }, [isFavoriteClick]);

    return (
        <div className='container'>
            <div className='container_item mt-6'>
                <div style={{ width: "100%" }}>
                    <div className='container_writter'>
                        <img src={profile} alt='' />
                        <p
                            style={{ fontSize: "19px", fontWeight: "bolder" }}
                        >{`@${post.user.username}`}</p>
                    </div>
                    <hr />
                    <div>
                        <p>{post.content}</p>
                        <div>
                            <img
                                className=' is-flex is-flex-direction-row is-justify-content-center post_img'
                                src={`${FILE_URL}${post.imagePath}`}
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
                        <div
                            className='ml-6 columns'
                            style={{ width: "200px" }}
                        >
                            <div className='column is-flex is-flex-direction-row-reverse'>
                                <p>{finalDate}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContentItem;
