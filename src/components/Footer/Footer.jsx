import { FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer () {
  return (
     <footer className={styles.footer}>
      <p className={styles.name}>Feito por: Kauam Sobreira</p>
      <a href="https://github.com/ksobreira" target="_blank" className={styles.logosFooter}>
        <FaGithub size={20} />
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/kauam-sobreira-1b82a2365/" target ="_blank" className={styles.logosFooter}>
        <FaLinkedin size={20} />
        LinkedIn
      </a>
    </footer>
  )
}

export default Footer