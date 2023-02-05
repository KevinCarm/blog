import "bulma/css/bulma.css";
import { Fragment } from "react";
import HomePost from "../../components/HomePost";
import "./Home.css";
import HomeContent from "../../components/HomeContent";

const Home = () => {
    return (
        <Fragment>
            <HomePost />
            <div className='mt-6'></div>
            <HomeContent />
        </Fragment>
    );
};

export default Home;
