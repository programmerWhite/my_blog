import React ,{Component} from 'react';

import './experienceLabel.css';

class ExperienceLabel extends Component{

    render(){
        return(
            <div className="myExperienceLabelOne">
                <div className="experienceLabelTriangle"></div>
                <div className="experienceLabelTitle">{this.props.data.title}</div>
                <div className="experienceLabelDate">{this.props.data.date}</div>
            </div>
        );
    }
}

export default ExperienceLabel;