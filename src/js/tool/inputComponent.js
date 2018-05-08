import React , {Component} from 'react';
import "common/js/tool/inputComponent.css";

class InputLabel extends Component{


    render(){
        return (
            <div className="input-line-div">
                <p className="input-label-div">{this.props.labelText}</p>
                <input className="input-style-dom" onChange={(e)=>{this.props.callBack(e)}} type={this.props.type} placeholder={this.props.placeHolder} />
                <div className="input-notice-div"></div>
            </div>
        );
    }
}

export {InputLabel};