import logo from "../logo.svg";

function Header() {
    return (
        <header className='header'>
            <img className="App-logo" src={logo} alt="logo"/>
            <h1 className='header__title'>Elementary</h1>
        </header>
    )
}

export default Header;