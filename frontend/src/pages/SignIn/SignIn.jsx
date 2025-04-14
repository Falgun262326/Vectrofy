<<<<<<< HEAD
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import path4 from '../../assets/illustrations/path4.png';
import path1 from '../../assets/illustrations/path1.png';
import path2 from '../../assets/illustrations/path2.png';
import path3 from '../../assets/illustrations/path3.png';
import path5 from '../../assets/illustrations/path5.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const history = useNavigate();
    const [Inputs, setInputs] = useState({
        username: "",
        password: "",
    });

    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value });
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`https://vectrofy-node-backend.onrender.com/api/v1/signin`, Inputs);
            setInputs({
                username: "",
                password: "",
            });
            console.log(response.data);
            sessionStorage.setItem("id", response.data.user._id);

            history("/");
        } catch (error) {
            if (error.response && error.response.status === 409) {
                alert("User already exists. Please use a different email.");
            } else if (error.response) {
                alert(error.response.data.message);
            }
            console.error(error);  // Log the full error for debugging
=======
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import path4 from "../../assets/illustrations/path4.png";
import path1 from "../../assets/illustrations/path1.png";
import path2 from "../../assets/illustrations/path2.png";
import path3 from "../../assets/illustrations/path3.png";
import path5 from "../../assets/illustrations/path5.png";
import { Loader } from "lucide-react";
import { useAuthStore } from '../../Store/Store';

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);
    const { login, error, isLoading } = useAuthStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/');
        } catch (error) {
            console.log(error);
>>>>>>> 646c1f5 (first commit)
        }
    };


    return (
<<<<<<< HEAD
        <div className='signUpBackground'>
            <img src={path1} className='path1' alt='designIcon' />
            <img src={path2} className='path2' alt='designIcon' />
            <img src={path3} className='path3' alt='designIcon' />
            <img src={path5} className='path5' alt='designIcon' />
            <div className="signUp">
                <div className="signUpContainer">
                    <img src={path4} className='path4Form1' alt='designIcon' />
                    <img src={path4} className='path4Form2' alt='designIcon' />
                    <form>

                        <h2>Log In</h2>
                        <div className="inputBox firstInputBox">
                            <input
                                type="text"
                                name='username'
                                required='required'
                                onChange={change}
                                value={Inputs.username} />

                            <span className="inputBoxSpan">Username</span>
=======
        <div className="signUpBackground">
            <img src={path1} className="path1" alt="designIcon" />
            <img src={path2} className="path2" alt="designIcon" />
            <img src={path3} className="path3" alt="designIcon" />
            <img src={path5} className="path5" alt="designIcon" />

            <div className="signUp">
                <div className="signUpContainer">
                    <img src={path4} className="path4Form1" alt="designIcon" />
                    <img src={path4} className="path4Form2" alt="designIcon" />

                    <form onSubmit={handleSubmit}>
                        <h2>Log In</h2>

                        <div className="inputBox firstInputBox">
                            <input
                                type="text"
                                name="email"
                                required="required"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <span className="inputBoxSpan">email</span>
>>>>>>> 646c1f5 (first commit)
                        </div>

                        <div className="inputBox thirdInputBox">
                            <input
                                type="password"
<<<<<<< HEAD
                                name='password'
                                required='required'
                                onChange={change}
                                value={Inputs.password} />

                            <span className="inputBoxSpan">Password</span>

                        </div>

                        <div className="formLinkSignUp">
                            <Link to="/signup">Sign Up</Link>
                        </div>

                        <input type="submit" value={'Log In'} className='submitBtn' onClick={submit} />

=======
                                name="password"
                                required="required"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                            <span className="inputBoxSpan">Password</span>
                        </div>

                        {error && <p className="errorMessage">{error}</p>}

                        <div className="formLinks">
                            <Link to="/forgot-password">Forgot Password?</Link>
                            <Link to="/signup">Sign Up</Link>
                        </div>

                        <button
                            type="submit"
                            className="submitBtn"
                            disabled={isLoading}
                        >
                            {isLoading ? <Loader className="loader" /> : "Sign Up"}
                        </button>
>>>>>>> 646c1f5 (first commit)
                    </form>
                </div>
            </div>
        </div>
<<<<<<< HEAD
    )
}

export default SignUp
=======
    );
};

export default SignUp;
>>>>>>> 646c1f5 (first commit)
