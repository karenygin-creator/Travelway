import styles from "./RegisterPage.module.css"
export function RegisterPage(){
    return(
        <main className={styles.page}>
            <section className={styles.card}>
                <div className={styles.heading}>
                    <h1>Создать аккаунт</h1>
                    <p>
                        Зарегистрируйтесь что бы покупать билеты
                    </p>
                </div>
                <form 
                className={styles.form}>
                    <label className={styles.field}>
                        <span>Фио</span>
                        <input type="text"
                        placeholder="Введите ФИО" />
                    </label>
                    <label className={styles.field}>
                        <span>Телефон</span>
                        <input type="tel"
                        placeholder="Введите телефон" />
                    </label>
                    <label className={styles.field}>
                        <span>Email</span>
                        <input type="email"
                        placeholder="Введите email" />
                    </label>
                    <label className={styles.field}>
                        <span>Password</span>
                        <input type="password"
                        placeholder="Введите password" />
                    </label>
                    <label className={styles.field}>
                        <span>Repeat password</span>
                        <input type="password"
                        placeholder="Повторите пароль" />
                    </label>
                    <button className={styles.submitButton}
                    type="submit">

                    </button>
                </form>
                <p className={styles.loginText}>
                    Уже есть аккаунт?{" "}
                    
                </p>
            </section>
        </main>
    )
}