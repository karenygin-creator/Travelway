import { TransportTabs } from "../TransportTabs/TransportTabs"
import styles from "./Hero.module.css"
export function Hero(){
    return(
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                    Путешествуйте <br />
                    по воздуху и поездами
                    </h1>
                    <p className={styles.description}>
                    Быстрый поиск и выгодные цены <br />
                    на авиабилеты и ж/д билеты
                    </p>
                </div>
                <div className={styles.searchBlock}>
                    <TransportTabs/>
                    <div className={styles.formPlaceholder}>
                    Forma
                </div>
                </div>
                
            </div>
        </section>
    )
}