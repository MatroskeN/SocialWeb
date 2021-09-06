import avatar from "../avatar.jpg";

function Profile() {
    return (
        <div className="profile__block">
            <div className="profile__avatar">
                <img src={avatar} alt="avatar"/>
            </div>
            <div className="profile__description">
                <h3 className="description__title">Description</h3>
                <div className="description__content">
                    <p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim illum iure necessitatibus nihil nobis quaerat quas sapiente ullam. Enim magnam quod ullam! Cumque eligendi itaque libero minus nesciunt nostrum voluptas?</span><span>Aliquam animi assumenda consectetur, deleniti dicta distinctio enim expedita fugit illo ipsum labore maiores minima molestias, necessitatibus nesciunt nisi quis quisquam saepe suscipit voluptates! Dicta eos exercitationem laborum maiores vel.</span><span>Adipisci, beatae, dicta enim, eveniet exercitationem impedit laboriosam magnam modi nemo obcaecati perferendis sit velit. Cumque eius molestias nostrum omnis, repellendus tempora voluptatibus. Aliquid nihil quia quod repellat sunt suscipit!</span><span>Ab alias aliquam aliquid aperiam, architecto autem commodi dolorem doloremque ducimus, earum eum eveniet illum incidunt itaque minus, necessitatibus neque odit optio perspiciatis quos reiciendis rem sapiente sed voluptas voluptates?</span><span>Aliquid atque commodi consequatur corporis culpa cum deleniti dicta eos et fuga, incidunt inventore ipsum laborum mollitia nulla officiis omnis perferendis praesentium quia quibusdam, repudiandae rerum saepe tempore unde, voluptatibus?</span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Profile;