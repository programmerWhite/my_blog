import React , {Component} from 'react';
import "common/js/login/loginContent.css";

import {InputLabel} from "common/js/tool/inputComponent";

class LoginContent extends Component{

    constructor(){
        super();
        this.state = {
            userName:null,
            password:null
        }
    }

    loginSystem(){
        console.log(this.state);
        location.href = "#/upLoadImg";
    }

    callBackF(e){
        var type = e.target.getAttribute('type');
        var value = e.target.value;

        if(type=="text"){
            this.setState({
                userName:value
            });
        }else if(type=="password"){
            this.setState({
                password:value
            });
        }

    }

    render(){
        return (
            <div className="login-box-container-div">
                <h2>登陆<sub>Login</sub></h2>
                <div className="input-line-site-div">
                    <InputLabel type="text" placeHolder="用户名" callBack={this.callBackF.bind(this)} labelText="用户名"/>
                </div>
                <div className="input-line-site-div">
                    <InputLabel type="password" placeHolder="密码" callBack={this.callBackF.bind(this)} labelText="密码"/>
                </div>
                <div className="input-line-site-div">
                    <div className="login-button" onClick={this.loginSystem.bind(this)}>登录</div>
                </div>
            </div>
        );
    }
}

export default LoginContent;