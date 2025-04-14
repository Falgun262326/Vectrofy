import { useState } from "react";
import { useAuthStore } from "../../Store/Store";
import { Loader, Mail } from "lucide-react";
import './forgotPassword.css'
import path4 from '../../assets/illustrations/path4.png';
import path1 from '../../assets/illustrations/path1.png';
import path2 from '../../assets/illustrations/path2.png';
import path3 from '../../assets/illustrations/path3.png';
import path5 from '../../assets/illustrations/path5.png';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { isLoading, forgotPassword } = useAuthStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await forgotPassword(email);
        setIsSubmitted(true);
    };

    return (
        <>
            <div className="signUpBackground">
                <img src={path1} className="path1" alt="designIcon" />
                <img src={path2} className="path2" alt="designIcon" />
                <img src={path3} className="path3" alt="designIcon" />
                <img src={path5} className="path5" alt="designIcon" />
                <div className="emailVerificationPage ">
                    <div className="signUpContainer signUpContainerNew">
                        <img src={path4} className="path4Form1" alt="designIcon" />
                        <img src={path4} className="path4Form2" alt="designIcon" />
                        <h2> Forgot Password</h2>

                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit}>
                                <p className="textContent">Enter your email address and we'll send you a link to reset your password.</p>
                                <div className="inputBox inputBoxNew">
                                    <input
                                        type="text"
                                        name="name"
                                        required="required"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <span className="inputBoxSpan">email</span>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="submitBtn"
                                >
                                    {isLoading ? <Loader className="loader" /> : 'Send Reset Link'}
                                </button>
                            </form>
                        )
                            :
                            (
                                <div className="confirmation-message">
                                    <Mail className="icon" />
                                    <p className="confirmation-text">
                                        If an account exists for {email}, you will receive a password reset link shortly.
                                    </p>
                                </div>
                            )}

                    </div>
                </div>
            </div>

        </>
    );
};
export default ForgotPasswordPage;
