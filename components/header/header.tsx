import styles from "./header.module.css"

export default function Header(){

    return (

      <div className={styles.container}>
        <div className={styles.left}>
           
        </div>
            <div className={styles.right}>
                <a href="#Skills" className={styles.a}>Skills</a>
                <a href="#Projects" className={styles.a}>Projects</a>
                <a href="#Contact" className={styles.a}>Contact me</a>
            </div>
      </div>
    )
}
