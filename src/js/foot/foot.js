import React,{Component} from "react";
import "./foot.css";

class Foot extends Component{
    render(){
        return(
            <div className="foot-div">
                <div className="foot-inner-div">
                    <div className="foot-part">
                        <p>(C) 2018. All Rights.当前呈现版本:1.0.0</p>
                        <p>wuyun 个人 blog</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Foot;