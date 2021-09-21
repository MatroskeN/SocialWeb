import PostItem from "./PostItem";


function Posts(props) {
    let postData = [
        {id:1,message:"Why no one loves me wtf"},
        {id:2,message:"Haha dat cause me stupid"}
    ]
    return (
        <div className="posts__block">
            <h3 className="posts__title">My posts</h3>
            <div className="post__new">
                <button className="post__new-btn">
                    Add new post +
                </button>
                <input className="post__new-field" type="text" name="new" id="new"
                       placeholder="Enter whatever u damned want, idc"/>
            </div>
            <hr/>
            <div className="post__content">
                <PostItem message={postData[0].message} profileName={props.profileName} postTime={props.postTime}/>
                <PostItem message={postData[1].message} profileName={props.profileName} postTime={props.postTime}/>
            </div>
        </div>
    )
}

export default Posts;
