import Wallpaper from "../../components/Wallpaper";
import Profile from "../../components/Profile";
import Posts from "../../components/Posts";

const profile_name = "Mr. Cayn Wrynn"
const post_time = "20:49"

function MainPage() {
    return (
        <div className="main-page">
            <Wallpaper profileName={profile_name}/>
            <Profile/>
            <Posts profileName={profile_name} postTime={post_time}/>
        </div>
    )
}

export default MainPage;
