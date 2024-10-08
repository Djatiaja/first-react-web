import Footer from '../footer/footer';
import { getImgURL } from '../utils';
import styles from './contact.module.css';

function Contact(props) {
  return (
    <div className={styles.container} id='contact'>
        
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out.</p> 
        </div>
        <div className={styles.contact}>
            <a href="https://www.linkedin.com/in/damarjati-adiyuda-muktitama-43bb34287/" className={styles.contactLink}>
                <img src={getImgURL("icon/linkedin.png")} alt="https://www.linkedin.com/in/damarjati-adiyuda-muktitama-43bb34287/"></img>
                <p>linkedin.com/Damarjati Adiyuda Muktitama</p>
            </a>
            <a href="https://github.com/Djatiaja" className={styles.contactLink}>
                <img src={getImgURL("icon/github-sign.png")} alt="github"></img>
                <p>github.com/Djatiaja</p>
            </a>
            <a href="mailto: djamgt23@gmail.com" className={styles.contactLink}>
                <img src={getImgURL("icon/mail.png")} alt="email"></img>
                <p>djamgt23@gmail.com</p>
            </a>
        </div>
    </div>
  );
}   

export default Contact; 