import React ,{useContext} from 'react'
import '../style.css'
import {FoodContext} from './context'
import { Link , Redirect } from 'react-router-dom';
import Home from './home';
import Register from './register';
const Login = () => {
	const context = useContext(FoodContext)
	if (context.login===true)
	{
		
		return <div>welcome </div>;

	}
	else
	{
		
		return (
     
			<div class="container">
		<div className="d-flex justify-content-center h-100">
			<div className="card">
				<div className="card-header">
					<h3>Sign In</h3>
					<div className="d-flex justify-content-end social_icon">
						<span><i className="fab fa-facebook-square"></i></span>
						<span><i className="fab fa-google-plus-square"></i></span>
						<span><i className="fab fa-twitter-square"></i></span>
					</div>
				</div>
				<div className="card-body">
					<form>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input type="text" className="form-control" placeholder="username" />
							
						</div>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-key"></i></span>
							</div>
							<input type="password" className="form-control" placeholder="password" />
						</div>
						<div className="row align-items-center remember">
							<input type="checkbox" />Remember Me
						</div>
						<div className="form-group">
							<button className="btn float-right login_btn"><a href="/register">Login</a></button>
						</div>
					</form>
				</div>
				<div className="card-footer">
					<div className="d-flex justify-content-center links">
						Don't have an account?<a href="/register">Sign Up</a>
					</div>
					<div className="d-flex justify-content-center">
						<a href="#">Forgot your password?</a>
					</div>
				</div>
			</div>
		</div>
	</div>
		
		)	

	}
	
		
    
}

export default Login;
