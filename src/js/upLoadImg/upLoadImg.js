import React,{Component} from 'react';
import "common/js/upLoadImg/upLoadImg.css";
import $ from "jquery";

import SampleHead from 'common/js/sampleHead/sampleHead';

import ImgBox from 'common/js/upLoadImg/imgBox';

import Foot from 'common/js/foot/foot';

var IP_ADDRESS = "http://localhost:18080";

class UpLoadImg extends Component{
    constructor(){
        super();

        this.emptyData = {
            id:0,
            date:"",
            title:"",
            desc:" ",
            imgData:[

            ]
        }

        this.getBoxData();

        this.state = {
            imgDataV:[]
        };
    }

    getBoxData(){
        var This = this;
        $.post(IP_ADDRESS+'/access/getBoxData',{},function (data) {
            if(data == "error"){
                alert("系统错误");
            }else{
                if(data.access == "forbid"){
                    location.href = "#/login";
                }else{
                    This.setState({
                        imgDataV:data
                    });
                }

            }
        });
    }

    render(){
        return (<div className="up-load-img-container-div">
                    <SampleHead />

                    <div className="up-img-content-div">
                        <div className="img-box-container-div">
                            <ImgBox  imgData={this.emptyData}/>

                            {
                                this.state.imgDataV.map((imgDataV,index)=>{
                                   return (<ImgBox imgData={imgDataV} key={index} />);
                                })
                            }
                        </div>

                    </div>

                    <input type="file" className="input-file-style" />

                    <Foot />
            </div>);
    }
}

export default UpLoadImg;