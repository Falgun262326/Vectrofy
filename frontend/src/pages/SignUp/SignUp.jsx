<<<<<<< HEAD
import React, { useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
=======
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PasswordStrengthMeter from '../../components/passwordStrengthMeter/passwordStrengthMeter';
import { useAuthStore } from '../../Store/Store';
import './SignUp.css';
>>>>>>> 646c1f5 (first commit)
import path4 from '../../assets/illustrations/path4.png';
import path1 from '../../assets/illustrations/path1.png';
import path2 from '../../assets/illustrations/path2.png';
import path3 from '../../assets/illustrations/path3.png';
import path5 from '../../assets/illustrations/path5.png';
<<<<<<< HEAD
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const history = useNavigate();
    const [Inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    });

    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value });
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`https://vectrofy-node-backend.onrender.com/api/v1/register`, Inputs);
            alert(response.data.message);
            setInputs({
                email: "",
                username: "",
                password: "",
            });
            history("/signin");
        } catch (error) {
            if (error.response && error.response.status === 409) {
                alert("User already exists. Please use a different email.");
            } else {
                alert("An error occurred. Please try again.");
            }
            console.error(error);
        }
    };


    return (
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

                        <h2>Sign Up</h2>
                        <div className="inputBox firstInputBox">
                            <input
                                type="text"
                                name='username'
                                required='required'
                                onChange={change}
                                value={Inputs.username} />

                            <span className="inputBoxSpan">Username</span>
                        </div>
                        <div className="inputBox secondInputBox">

                            <input
                                type="email"
                                name='email'
                                required='required'
                                onChange={change}
                                value={Inputs.email} />

                            <span className="inputBoxSpan">Email</span>
                        </div>
                        <div className="inputBox thirdInputBox">
                            <input
                                type="password"
                                name='password'
                                required='required'
                                onChange={change}
                                value={Inputs.password} />

                            <span className="inputBoxSpan">Password</span>

                        </div>

                        <div className="formLinks">
                            <p>Already a member?</p>
                            <Link to="/signin">Log In</Link>
                        </div>

                        <input type="submit" value={'Sign Up'} className='submitBtn' onClick={submit} />

=======
import { Loader } from 'lucide-react';

const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signup, error, isLoading } = useAuthStore();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await signup(email, password, name);
            navigate('/verify-email');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="signUpBackground">
            <img src={path1} className="path1" alt="designIcon" />
            <img src={path2} className="path2" alt="designIcon" />
            <img src={path3} className="path3" alt="designIcon" />
            <img src={path5} className="path5" alt="designIcon" />
            <div className="signUp signUpNew">
                <div className="signUpContainer signUpContainerNew">
                    <img src={path4} className="path4Form1" alt="designIcon" />
                    <img src={path4} className="path4Form2" alt="designIcon" />
                    <form onSubmit={handleSignUp}>
                        <h2> Sign Up</h2>
                        <div className="inputBox inputBoxNew">
                            <input
                                type="text"
                                name="name"
                                required="required"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <span className="inputBoxSpan">Full Name</span>
                        </div>
                        <div className="inputBox inputBoxNew">
                            <input
                                type="email"
                                name="email"
                                required="required"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="inputBoxSpan">Email</span>
                        </div>
                        <div className="inputBox inputBoxNew">
                            <input
                                type="password"
                                name="password"
                                required="required"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="inputBoxSpan">Password</span>
                        </div>

                        <PasswordStrengthMeter password={password} />
                        {error && <p className="text-red-500">{error}</p>}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="submitBtn"
                        >
                            {isLoading ? <Loader className="loader" /> : 'Sign Up'}
                        </button>
                        <div className="formLinks">
                            <p>Already a member?</p>
                            <Link to="/signin" className="formLink">
                                Log In
                            </Link>
                        </div>
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
