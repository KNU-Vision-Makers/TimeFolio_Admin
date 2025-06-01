import Link from 'next/link';
import styles from './page.module.css';
import Logo from '@/components/Logo';

// 로그인 페이지
const LoginPage = () => {
    return(
        <div className={styles.login}>
            <Logo />
            <div className={styles.inputbox}>
                <input type='text' placeholder='ID' required />
            </div>
            <div className={styles.inputbox}>
                <input type='password' placeholder='Password' required />
            </div>
            <div className="big-button">
                <button>Login</button>
            </div>
            <div className={styles.dividingline}></div>
            <div className={styles.tosignup}>
                <p>Don't you have an account?</p>
                <Link href={'/signup'} className={styles.tosignuplink}>
                    Sign up
                </Link>
            </div>
        </div>
    )
}

export default LoginPage