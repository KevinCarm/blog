import { useParams } from "react-router-dom";
import "bulma/css/bulma.css";
import "./ShowPost.css";
import { Fragment } from "react";
import HomeContentItem from "../../components/HomeContentItem";
import { useData } from "../../util/useData";

const ShowPost = () => {
    const { id } = useParams();
    const jwt = localStorage.getItem("jwt");
    const URL_POST = `http://localhost:8080/post/${id}`;

    const { data } = useData(URL_POST, jwt);

    return <Fragment>{data ? <HomeContentItem data={data} /> : null}</Fragment>;
};

export default ShowPost;
