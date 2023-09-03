import styles from "./hero.module.css"

export default function Hero(){
    return(
        <>
        <div className={styles.container}>
            <div className={styles.description}>
                <h3>Hello, my name is:</h3>
                <h1>Francisco Figueira</h1>
                <h1>I build Software</h1>
                <h2>I'm a software enginner focusing on building web3 apps</h2>
                <div>
                    <a href="#Contact" className={styles.contact_button}>Get in touch</a>
                </div>

            </div>
            
        </div>
        </>
    )
}