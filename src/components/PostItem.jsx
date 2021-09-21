import avatar from "../avatar.jpg";

function PostItem(props) {
    return (
        <div className="post__item">
            <div className="post__sender">
                <img src={avatar} alt="avatar" className="post__avatar"/>
                <div className="post__name">{props.profileName}</div>
            </div>
            <div className="post__message">
                <p>{props.message}</p>
            </div>
            <div className="post__time">
                {props.postTime}
            </div>
        </div>
    )
}

export default PostItem;
