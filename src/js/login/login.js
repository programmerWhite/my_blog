import React , {Component} from 'react';
import "common/js/login/login.css";

import SampleHead from 'common/js/sampleHead/sampleHead';

import LoginContent from 'common/js/login/loginContent';

import Foot from 'common/js/foot/foot';

class Login extends Component{
    render(){
        return (
            <div className="login-big-container">
                <SampleHead />

                    <div className="login-container-div">
                        <div className="login-inner-div">
                            <div className="login-img-div">
                                <img src={require("common/js/login/img/login.png")} />
                            </div>
                            <div className="login-content-div">
                                <LoginContent />
                            </div>
                        </div>
                    </div>

                <Foot />
            </div>
        );
    }
}

export default Login;
