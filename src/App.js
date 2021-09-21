import './style/style.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation/Navigation";
import Content from "./containers/Content";
import {BrowserRouter} from "react-router-dom";


global.time = '20:49';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navigation/>
                <Content/>
            </div>
        </BrowserRouter>
    );
}


export default App;
