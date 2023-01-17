import { Fragment } from "react";
import HomeContentItem from "./HomeContentItem";
import post from "../assets/post.jpg";

const data = [
    {
        id: 43,
        image: post,
        favs: 123,
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus. Tristique senectus et netus et malesuada fames.",
        comments: 345,
    },
    {
        id: 88,
        image: post,
        favs: 87,
        content:
            "Odio euismod lacinia at quis risus sed vulputate odio. Eget sit amet tellus cras adipiscing enim eu turpis. Sit amet venenatis urna cursus eget nunc. Blandit massa enim nec dui nunc mattis enim",
        comments: 12,
    },
];

const HomeContent = () => {
    return (
        <Fragment>
            {data.map(post => (
                <HomeContentItem key={post.id} data={post} />
            ))}
        </Fragment>
    );
};

export default HomeContent;
