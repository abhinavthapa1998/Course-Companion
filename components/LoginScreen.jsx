import "./login.css";
const LoginScreen = () => {


    return(
    <div className="logincard">
        <h2 className="loginhead">Welcome</h2>
        <div className="loginsub">Please sign-in to continue</div>
        <div className="loginform">
            <div className="label">Email</div>
            <input id="email" className="input" type="email" placeholder="Enter your E-mail"></input>
            <div className="label">Password</div>
            <input id="pass" className="input" type="password" placeholder="Enter your Password"></input>
            <div className="lgn-btn"type="submit">Login</div>
        </div>
    </div>


    )}

export default LoginScreen;