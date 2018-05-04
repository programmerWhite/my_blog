import React ,{Component} from 'react';

import ExperienceLabel from "./experienceLabel";

import './myExperience.css';

class MyExperience extends Component{
    constructor(){
        super();

        this.experienceLabelData = [
            {
                title:"前方的路还长",
                date:"----------------"
            }
            ,{
                title:"云翠软件 （raintree maths）",
                date:"2015 - 7 >>> today"
            },
            {
                title:"韬光通信",
                date:"2015 - 5 >>> 2015 - 6"
            },
            {
                title:"电子科技大学成都学院",
                date:"2011 - 9 >>> 2015 - 7"
            },
        ]
    }
    render(){
        return(
            <div className="myExperienceDiv">
                <div className="experienceImgDiv">
                    <img src={require('../img/exp.jpg')} alt="experience"/>
                </div>
                <div className="myExperienceDescContent">
                    <div className="myExperienceHead">
                        <h2>我的历程<sub>My Experience</sub></h2>
                        <p>生命的路线当中还有许多点，它们构成不同时段的“里程碑”。从一个里程碑到下一个里程碑，又是一个过程。一个一个这样的过程构成整个生命的过程。</p>
                    </div>
                    <div className="experience-content-div">
                        <div className="experienceContentInner">
                            {
                                this.experienceLabelData.map((data,index)=>{
                                    return (<ExperienceLabel data = {data} key={index} />);
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyExperience;