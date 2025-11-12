import api from "./api";

export async function createUser(user){
    try{
        const result = await api.post("/user/store", user, {
            'Content-Type': 'application/json'
        })
        return result.data
    }catch (err){
        throw err
    }
}

export async function login(nick, password){
    try{
        const result = await api.post("/user/login", {
            nick: nick,
            password: password,
            mid: "ok"
        }, {
            'Content-Type': 'application/json'
        })
        return result.data
    }catch (err){
        throw err
    }
}