import React,{Component} from 'react';

import "./mySkill.css";



class SkillProgress extends Component{
    constructor(props){
        super(props);
        this.BarStyle = {border:"1px solid white","borderColor":this.props.bgC};
        this.InnerBarStyle = {
            backgroundColor:this.props.bgC,
            width:this.props.lengthV
        };
    }

    render(){
        return(
            <div className="skillBarDiv">
                <div className="skillName">{this.props.textV}</div>
                <div className="skillProgressDiv" style={this.BarStyle}>
                    <div className="skillInnerProgress" style={this.InnerBarStyle}></div>
                </div>
            </div>
        );
    }
}

class mySkill extends Component{
    render(){
        return (
            <div className="mySkillDiv">
                <div className="skillContent">
                    <div className="skill-head-div">
                        <h2>个人能力<sub>My Skills & Abilities</sub></h2>
                        <p>
                            人在看待别人的时候首先要学会看待自我，吾日三省吾身，时刻不能停下自己的脚步。
                            因为在你前方的路学习的东西还很多，
                            活到老学到老。
                        </p>
                    </div>
                    <div className="skillBarContent">
                        <SkillProgress bgC="#e07702" lengthV="90%" textV="html & css - 3+ years Experience"/>
                        <SkillProgress bgC="#9cd4e0" lengthV="70%" textV="Javascript - 3+ Years Experience"/>
                        <SkillProgress bgC="#0769ad" lengthV="80%" textV="jquery - 3+ Years Experience"/>
                        <SkillProgress bgC="#282c34" lengthV="30%" textV="react - 0.3+ Years Experience"/>
                        <SkillProgress bgC="#dd1b16" lengthV="60%" textV="angular 1 - 0.5+ Years Experience"/>
                        <SkillProgress bgC="#026e00" lengthV="50%" textV="node js - 0.8+ Years Experience"/>

                    </div>
                </div>
            </div>
        )
    }
}

export default mySkill;