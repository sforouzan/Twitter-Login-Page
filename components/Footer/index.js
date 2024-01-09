import styles from './Footer.module.css'
export default function Footer() {
    return(
        <footer className={styles.footer}>
        <ul>
          <li className={styles.underlinehover}>About</li>
          <li className={styles.underlinehover}>Download the X app</li>
          <li className={styles.underlinehover}>Help Center</li>
          <li className={styles.underlinehover}>Terms of Service</li>
          <li className={styles.underlinehover}>Privacy Policy</li>
          <li className={styles.underlinehover}>Cookie Policy</li>
          <li className={styles.underlinehover}>Accessibility</li>
          <li className={styles.underlinehover}>Ads info</li>
          <li className={styles.underlinehover}>Blog</li>
          <li className={styles.underlinehover}>Status</li>
          <li className={styles.underlinehover}>Careers</li>
          <li className={styles.underlinehover}>Brand Resources</li>
          <li className={styles.underlinehover}>Advertising</li>
          <li className={styles.underlinehover}>Marketing</li>
          <li className={styles.underlinehover}>X for Business</li>
          <li className={styles.underlinehover}>Developers</li>
          <li className={styles.underlinehover}>Directory</li>
          <li className={styles.underlinehover}>Settings</li>
          <li>© 2024 X Corp.</li>
        </ul>
      </footer>
    )
}