import { useUser } from '../../context/UserCtx';
import css from './Header.css';

function Header(){
    const {userName} = useUser();
    return(
        <header className={css.head}>
            {userName ? (
                <h1 className={css.welcome}>Welcome {userName}</h1>
            ) : (
                <h1 className={css.welcome}>Welcome</h1>
            )}
        </header>
    )
}

export default Header;