import "bulma/css/bulma.css";
import "./HomeContentItem.css";
import profile from "../assets/profile.jpg";
import post from "../assets/post.jpeg";

const HomeContentItem = () => {
    const contentText = `Kanzi the bonobo lives in America and has learnt how to build a fire, light it using matches and toast marshmallows on it. It shows just how like us some primates really are`;
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
            </div>
        </div>
    );
};

export default HomeContentItem;
