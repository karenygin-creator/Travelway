import type { RegisterData, User } from "../type/auth";

export async function registerUser(data:RegisterData):Promise<User>{
    const response=await fetch("/api/auth/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data),
    });
    if(!response.ok){
        const error=await response.json();
        throw new Error(error.detail||"Ошибка регистрации");  
    }
    const user:User=await response.json();
    return user;
}
