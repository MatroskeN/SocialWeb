import PostItem from "./PostItem";


function Posts() {
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
                <PostItem message='Why no one loves me wtf'/>
                <PostItem message='Haha dat cause me stupid'/>
            </div>
        </div>
    )
}

export default Posts;