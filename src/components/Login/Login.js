import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { handleGoogleLogin } = useFirebase();
    return (
        <div>
            <div className="login-box w-25 m-auto">
                <div className="box border border d-flex justify-content-center align-items-center">
                    <button onClick={handleGoogleLogin} className="btn w-75  btn-warning my-5">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;