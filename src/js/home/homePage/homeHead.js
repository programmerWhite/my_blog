import React, { Component } from 'react';

import './homeHead.css';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Home from "common/js/home/home";
import Blog from "common/js/blog/blog";

class homeHead extends Component{
    render(){
        return(
            <div className="homeContainerDiv">
                <div className="myName">吴 <span>WU YUN</span></div>
                <Router>
                    <div>
                        <div className="menuContainerDiv">
                            <div className="menuLeftPart">
                                <div className="menuText">
                                    <Link to="/home">我</Link>
                                </div>
                                <div className="menuText">
                                    <span to="/">项目</span>
                                </div>
                                <div className="menuText">
                                    <span to="/">教育</span>
                                </div>
                            </div>
                            <div className="myPhoto">
                                <img src={require('common/js/home/img/myPhoto.png')} alt="我的帅照"/>
                            </div>
                            <div className="menuRightPart">
                                <div className="menuText">
                                    <Link to="/blog" replace>博文</Link>
                                </div>
                                <div className="menuText" >
                                    <span to="/">联系我</span>
                                </div>
                            </div>
                        </div>

                        <Route  path="/" component={Home} />
                        <Route  path="/blog" component={Blog} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default homeHead;