import React, { Component } from 'react';
import HomeHead from 'common/js/home/homePage/homeHead';
import MySkill from 'common/js/home/homePage/mySkill';
import HelpYou from 'common/js/home/homePage/helpYou';
import MyExperience from 'common/js/home/homePage/myExperience';
import MyBlog from 'common/js/home/homePage/myBlog';
import MyLive from 'common/js/home/homePage/myLive';
import Foot from 'common/js/foot/foot.js';

import "common/css/common.css";

class Home extends Component {
    render() {
        return (
            <div>
                <HomeHead/>
                <p className="myDesc">
                    我是 wu yun ，26岁。<br/> 一名来自中国成都的前端。
                </p>
                <MySkill/>
                <HelpYou/>
                <MyExperience/>
                <MyBlog/>
                <MyLive/>
                <Foot/>
            </div>
        );
    }
}

export default Home;