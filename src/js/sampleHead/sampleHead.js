import React ,{Component} from "react";
import "common/js/sampleHead/sampleHead.css";

import {
    Link,
} from 'react-router-dom';

class SampleHead extends Component{
    render(){
        return (
            <div className="sample-head-container-div">
                <div className="sample-head-inner-div">
                    <div className="sample-head-log-div">
                        <span>吴</span>
                        <sub>WU YUN</sub>
                    </div>
                    <div className="sample-head-menu-div">
                        <span>
                            <Link to="/" className="home-page">主页</Link>
                        </span>
                        <span>
                            <Link to="/live" className="my-live">生活</Link>
                        </span>
                        <span>
                            <Link to="/blog" className="bo-wen">博文</Link>
                        </span>
                        <span>
                            <Link to="/contract" className="contract-me">联系我</Link>
                        </span>
                    </div>
                    <div className="login-button-div">
                        <Link to="/login" className="login">登陆</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default SampleHead;