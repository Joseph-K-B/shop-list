import css from './Header.css';

function Header(){
    return(
        <header className={css.head}>
            <h1 className={css.welcome}>Welcome</h1>
        </header>
    )
}

export default Header;