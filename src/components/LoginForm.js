import { useState } from 'react'


const LoginForm = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const userInfo = {
        username:'admin',
        password:'admin'
    }

    const onSubmit = (e)=>{
        e.preventDefault()

        if(!username || !password){
            alert('Please input username or password');
            return
        }

        if(username===userInfo.username && password===userInfo.password){
            alert('Sukses login');
            return
        }else{
            alert('Username or password tidak valid!');
            return
        }

      


    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Username</label>
                <input type="text" placeholder="Username" 
                    value={username} 
                    onChange={(e)=>setUsername(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Password</label>
                <input type="password" 
                placeholder="Content" 
                value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
        
            <input type="submit" value="Submit" className="btn btn-block" />
        </form>
    )
}

export default LoginForm
