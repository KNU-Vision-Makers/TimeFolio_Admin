import styles from './page.module.css';
import '../../styles/globals.css'
import Logo from '@/components/Logo';

// 회원가입입 페이지
const SignUpPage = () => {
    return(
        <div className={styles.signup}>
            <Logo />
            <div className={styles.inputbox}>
                <input type='text' placeholder='Name' required />
            </div>
            <div className={styles.inputbox}>
                <input type='date' placeholder='Birth Date' required />
            </div>
            <div className={styles.inputbox}>
                <input type='tel' placeholder='Phone Number' required />
            </div>
            <div className={styles.inputbox}>
                <input type='text' placeholder='ID' required />
            </div>
            <div className={styles.inputbox}>
                <input type='password' placeholder='Password' required />
            </div>
            <div className={styles.consentcheck}>
                <input type='checkbox' required />
                <p>개인정보 수집 및 이용에 동의합니다.</p>
            </div>
            <div className="big-button" style={{ marginTop: '5px' }}>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default SignUpPage