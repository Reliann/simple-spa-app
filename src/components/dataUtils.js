import axios from "axios"

const getAllUsers= async ()=>{
    let resp = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    let users =  resp.data
    users = users.map(async (user)=>{
        resp = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`)
        user.todos = resp.data
        resp = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
        user.posts = resp.data
        return user
    })
    users = await Promise.all(users)
    return users
}

export default {getAllUsers}