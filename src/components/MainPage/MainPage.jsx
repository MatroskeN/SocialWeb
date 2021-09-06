import Wallpaper from "../Wallpaper";
import Profile from "../Profile";
import Posts from "../Posts";

function MainPage() {
    return (
        <div className="main-page">
            <Wallpaper/>
            <Profile/>
            <Posts/>
        </div>
    )
}

export default MainPage;
