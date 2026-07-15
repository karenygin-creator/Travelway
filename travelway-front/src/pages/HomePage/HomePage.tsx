import { Header } from "../../components/Header/Header"
import styles from "./HomePage.module.css"
export function HomePage(){
    return(
        <div className={styles.page}>
            <Header/>
            <main className={styles.main}>
                <section className={styles.placeholder}> 
                    <h1>
                        AVIAJD
                    </h1>
                    <p>TExt text img</p>
                </section>
            </main> 
        </div>
    )
}