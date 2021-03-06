import React ,{Component} from 'react';
import "common/js/contractMe/contractContent.css";
import "common/icon/iconfont.css";

class ContractMe extends Component{
    render(){
        return (<div className="contract-me-div">
            <div className="contract-me-img-div">
                <div className="contract-me-shade-div"></div>
                <img className="map-img" src={require("common/js/contractMe/img/mySite.png")} />
                <div className="flex-part-div">
                    <div className="contract-me-form">
                        <h2>联系我<sub>contract me</sub></h2>
                        <input type="text" placeholder="你的名字" id="visitorName"/>
                        <input type="text" placeholder="你的邮箱" id="visitorEmail"/>
                        <textarea placeholder="你的信息" id="visitorMessage"></textarea>
                        <div>
                            <div className="submit-button" id="submitButton">提交</div>
                        </div>
                    </div>
                    <div className="phone-desc-div">
                        <div className="site-container-div">
                            <span className="site-icon icon iconfont icon-coordinates_fill"></span>
                        </div>
                        <span>如果你着急,请给我来电：</span>
                        <p>182 - 0012 - 9286</p>
                        <span>不论你在哪里，我在这里等你。</span>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default ContractMe;