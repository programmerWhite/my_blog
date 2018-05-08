import React , {Component} from 'react';
import "common/js/login/loginContent.css";

import {InputLabel} from "common/js/tool/inputComponent";

class LoginContent extends Component{
    render(){
        return (
            <div className="login-box-container-div">
                <h2>登陆<sub>Login</sub></h2>
                <div className="input-line-site-div">
                    <InputLabel type="text" placeHolder="用户名" labelText="用户名"/>
                </div>
                <div className="input-line-site-div">
                    <InputLabel type="password" placeHolder="密码" labelText="密码"/>
                </div>
                <div className="input-line-site-div">
                    <div className="login-button">登录</div>
                </div>
            </div>
        );
    }
}

export default LoginContent;