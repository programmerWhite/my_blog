import React, { Component } from 'react';

import './homeHead.css';

import {
    Link,
} from 'react-router-dom';



class homeHead extends Component{
    render(){
        return(
            <div className="homeContainerDiv">
                <div className="myName">吴 <span>WU YUN</span></div>
                <div>
                    <div className="menuContainerDiv">
                        <div className="menuLeftPart">
                            <div className="menuText">
                                <Link to="/">我</Link>
                            </div>
                            <div className="menuText">
                                <Link to="/" className="home-page">项目</Link>
                            </div>
                            <div className="menuText">
                                <Link to="/">教育</Link>
                            </div>
                        </div>
                        <div className="myPhoto">
                            <img src={require('common/js/home/img/myPhoto.png')} alt="我的帅照"/>
                        </div>
                        <div className="menuRightPart">
                            <div className="menuText">
                                <Link to="/blog" className="bo-wen">博文</Link>
                            </div>
                            <div className="menuText" >
                                <Link to="/contract" className="contract-me">联系我</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default homeHead;