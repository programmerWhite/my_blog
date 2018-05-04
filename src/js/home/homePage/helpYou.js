import React, { Component } from 'react';

import 'common/icon/iconfont.css';
import 'common/js/home/homePage/helpYou.css';

class HelpYouTitle extends  Component{
    render(){
        return (
            <div className="helpTitleContent">
                <h2>我能做什么<span>How Can I Help You?</span></h2>
                <p>

                </p>
            </div>
        );
    }
}
class HelpOne extends  Component{
    render(){
        return (
            <div className="helpTitleOneContent">
                <div className="helpImg">
                    <div className={this.props.data.icon} />
                </div>
                <div>
                    <div className="helpOneTitle">
                        {this.props.data.title}
                        <sub>{this.props.data.sub}</sub>
                    </div>
                    <p className="helpOneDesc">{this.props.data.desc}</p>
                </div>
            </div>
        );
    }
}

function helpOneData(){
    return [
        {
            icon:"icon iconfont icon-integral",
            title:"搭建",
            sub:"Web Designing",
            desc:"专注定制行业专属网站,资深设计为量身打造,只为网站搭建。"
        },
        {
            icon:"icon iconfont icon-mobilephone",
            title:"移动",
            sub:"Mobile Designing",
            desc:"手机,电脑,微信网站,多站合一,是手机端网站制作 的不二之选。"
        },
        {
            icon:"icon iconfont icon-tools",
            title:"基础 ",
            sub:"Html CSS js",
            desc:"网站的骨架，页面的基础，完全不能忽视的存在。一切高楼大厦都是都是以他为起点。"
        },
        {
            icon:"icon iconfont icon-workbench",
            title:"响应式",
            sub:"response Designing",
            desc:"集中创建页面的图片排版大小，可以智能地根据用户行为以及使用的设备环境进行相对应的布局。"
        },
    ];
}

class helpPart extends Component{


    render(){
        return(
            <div className="helpYouContainer">
                <HelpYouTitle />
                <div className="helpOneContainer">
                    {
                        helpOneData().map((dataOne,index)=>{
                            return <HelpOne key={index} data={dataOne} />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default helpPart;