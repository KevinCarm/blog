import "bulma/css/bulma.css";
import { Fragment, useEffect, useState } from "react";
import HomeContentItem from "./HomeContentItem";

const HomeContent = () => {
    const [page, setPage] = useState(0);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const POSTS_URL = `http://localhost:8080/post?page=${page}`;
        fetch(POSTS_URL, {
            method: "GET",
        })
            .then(response => response.json())
            .then(data => {
                setPosts(prev => {
                    return [...prev, ...data];
                });
            })
            .catch(err => console.log(err));
    }, [page]);

    const showMoreClickHandler = () => {
        setPage(prev => prev + 1);
    };

    return (
        <Fragment>
            <div>
                {posts.map(i => (
                    <HomeContentItem key={i.id} data={i} />
                ))}
            </div>
            <div className='is-flex is-justify-content-center'>
                <button
                    onClick={showMoreClickHandler}
                    className='button is-primary'
                >
                    Load more posts
                </button>
            </div>
        </Fragment>
    );
};

export default HomeContent;
