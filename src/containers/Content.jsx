import MainPage from "./MainPage/MainPage";
import {Route} from "react-router-dom";
import Messages from "../components/Messages/Messages";
import News from "../components/News/News";
import Settings from "../components/Settings/Settings";

function Content(props) {
    return (
            <main className='content'>
                <Route path="/profile" component={MainPage}/>
                <Route path="/messages" component={Messages}/>
                <Route path="/news" component={News}/>
                <Route path="/settings" component={Settings}/>
            </main>
    )
}

export default Content;
