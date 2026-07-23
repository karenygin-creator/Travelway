import { useState, type FormEvent } from "react"
import styles from "./LoginPage.module.css"
import { useNavigate,Link } from "react-router-dom";
import { loginUser } from "../../services/authService";
export function LoginPage(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[isLoading,setIsLoading]=useState(false);
    const[error,setError]=useState("")
    const navigate=useNavigate(); 
   async function handleSubmit(event:FormEvent<HTMLFormElement>){
           event.preventDefault();
           setError('');
           try {
               setIsLoading(true);
               const user = await loginUser({
                   email:email,
                   password:password,
               })
               localStorage.setItem(
                "userId",user.user_id.toString()
               );
               localStorage.setItem(
                "loginMessage",user.message.toString()
               );
               navigate('/');
           
           } catch (error) {
               if(error instanceof Error){
                   setError(error.message);
   
               }
               else{
                   setError('Неизвестная ошибка')
               }
           }finally{
               setIsLoading(false);
           }
       }
    return(
        <main className={styles.page}>
            <section className={styles.card}>
                <div className={styles.heading}>
                    <h1>Войти аккаунт</h1>
                    <p>
                        Войдите в аккаунт что бы покупать билеты
                    </p>
                </div>
                <form 
                className={styles.form}
                onSubmit={handleSubmit}>
                    <label className={styles.field}>
                        <span>Email</span>
                        <input type="email"
                        placeholder="Aboba@gmail.com" 
                        required
                        onChange={(event)=>setEmail(event.target.value)}/>
                    </label>
                    <label className={styles.field}>
                        <span>Password</span>
                        <input type="password"
                        placeholder="Введите пароль"
                        minLength={6}
                        required 
                        onChange={(event)=>setPassword(event.target.value)}/>
                    </label>
                    {error&&(
                        <p className={styles.error}>
                            {error}
                        </p>
                    )}
                    <button className={styles.submitButton}
                    type="submit"
                    disabled={isLoading}>
                        {isLoading?"Вход....":'Войти'}
                    </button>
                </form>
                <p className={styles.loginText}>
                    Нету аккаунта?{" "}
                    <Link to='/register'>
                    Зарегистрироваться
                    </Link>
                </p>
            </section>
        </main>
    )
}