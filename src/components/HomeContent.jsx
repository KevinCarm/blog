import { Fragment } from "react";
import { useSelector } from "react-redux";
import HomeContentItem from "./HomeContentItem";

const HomeContent = () => {
    const initialPosts = useSelector(state => state.data.posts);
    return (
        <Fragment>
            {initialPosts.map(i => (
                <HomeContentItem key={new Date().toISOString()} data={i} />
            ))}
        </Fragment>
    );
};

export default HomeContent;
