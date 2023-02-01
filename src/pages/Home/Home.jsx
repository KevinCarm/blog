import "bulma/css/bulma.css";
import { Fragment } from "react";
import HomePost from "../../components/HomePost";
import "./Home.css";
import HomeContent from "../../components/HomeContent";
import { useDispatch } from "react-redux";
import { dataActions } from "../../store/dataSlice";

const POSTS_URL = "http://localhost:8080/post?page=0";

const Home = () => {
    const dispatch = useDispatch();
    fetch(POSTS_URL, {
        method: "GET",
    })
        .then(response => response.json())
        .then(data => {
            dispatch(dataActions.savePosts(data));
        });
    return (
        <Fragment>
            <HomePost />
            <div className='mt-6'></div>
            <HomeContent />
        </Fragment>
    );
};

export default Home;
