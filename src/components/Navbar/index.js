import styles from './Navbar.module.scss';
import { ReactComponent as Logo} from '../../assets/logo.svg'
import classNames from 'classnames';

export default function Navbar(){
return(
    <nav className={styles.nav}>
        <Logo className={styles.logo}/>
        <div className={styles.links}>
            <div>
                <a href='/' className={styles.link}>
                Página inicial</a>
            </div>
        </div>
        <div className={styles.busca}>

        </div>
        <div className={styles.icones}>
            <a href='/carrinho'>
            {window.location.pathname === '/carrinho' 
            ?
            :
            }
            </a>
        </div>
    </nav>
)
}