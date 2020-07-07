import React , {useState } from 'react'
import '../styleRegister.css'
import axios from 'axios'

function Register() {
	const [user,setUser] = useState({name :'',email:'',username : '',passworld:''})
	const handleSubmit = (e) =>{
		e.preventDefault();
		axios.post("http://localhost:5000/auth/register",{
					name:user.name,
					email:user.email,
					username:user.username,
					passworld:user.passworld,
				})
				.then((res)=>{setUser({name :'',email:'',username : '',passworld:''})})
		         .catch((err)=>{console.log('erreur')})
	}
	console.log (user)
    return (
        <form>
			<input placeholder="Enter your name" value={user.name} onChange={e =>setUser({...user,name:e.target.value})}/>
			<input placeholder="Enter your email" value={user.email} onChange={e =>setUser({...user,email:e.target.value})}/>
			<input placeholder="Enter your username" value={user.username} onChange={e =>setUser({...user,username:e.target.value})}/>
			<input placeholder="Enter your passwolrld" value={user.passworld} onChange={e =>setUser({...user,passworld:e.target.value})}/>
		    <button type ='submit' onClick={handleSubmit}>submit</button>
		</form>
    )
}

export default Register
