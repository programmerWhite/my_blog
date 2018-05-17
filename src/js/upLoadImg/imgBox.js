import React,{Component} from 'react';
import $ from "jquery";
import "common/js/upLoadImg/imgBox.css";

class ImgObj extends Component{
    render() {
        return (<div className="box-img-one-div">
            <img src={this.props.imgUrl} />
        </div>);
    }
}
class BlankImgObj extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (<div className="box-img-one-div add-img-outer"  data-id={this.props["data-id"]} onClick={(e)=>{this.props.callBack(e)}}>
            <span className="add-img-span icon iconfont icon-picture_fill" data-id={this.props["data-id"]}></span>
            <span className="add-img-span icon iconfont icon-addition" data-id={this.props["data-id"]}></span>
        </div>);
    }
}

var IP_ADDRESS = "http://localhost:18080";

class ImgBox extends Component{

    constructor(props){
        super(props);
        this.state = {
            boxDataOne:this.props.imgData
        }
        console.log(this.state.boxDataOne)
    }

    addNewImg(e){
        var boxId = e.target.getAttribute("data-id");

        var This = this;

        $('.input-file-style').off().on("change",function(e) {

/*-----------------------------*/
            var formdata = new FormData();
            formdata.append('file',e.target.files[0]);
            formdata.append('boxId',boxId);

            $.ajax({
                url:IP_ADDRESS+"/upLoadImg",
                method:"Post",
                contentType: false, // 注意这里应设为false
                processData: false,
                data:formdata,
                success:function (data) {

                    var imgDataArray = This.state.boxDataOne;
                    imgDataArray.imgData.push(data.data[0]);

                    This.setState({
                        boxDataOne:imgDataArray
                    });
                },
                error:function (err) {
                    console.log(err)
                }
            })
/*-----------------------------*/

        });

        $('.input-file-style').click();

    }

    render(){
        return (<div className="box-one-obj-div">
            <div className="title-line-div">
                <p className="label-text-p">标题：</p>
                <input type="text" className="img-box-title-input" defaultValue={this.state.boxDataOne?this.state.boxDataOne.title:""}></input>
            </div>
            <div className="img-box-content-div">
                {
                    this.state.boxDataOne?
                    this.state.boxDataOne.imgData.map((imgUrl,index)=>{
                       return (<ImgObj imgUrl={imgUrl} key={index}/>)
                    }):""
                }
                {
                    this.state.boxDataOne?<BlankImgObj callBack={this.addNewImg.bind(this)} data-id={this.state.boxDataOne.id}/>:<BlankImgObj callBack={this.addNewImg.bind(this)} data-id="0"/>
                }

            </div>
            <div className="title-line-div">
                <p className="label-text-p">描述：</p>
                <textarea className="img-box-desc-text-area" defaultValue={this.state.boxDataOne?this.state.boxDataOne.desc:""}></textarea>
            </div>
            <div className="title-line-div">
                <span className="label-text-p">时间：{this.state.boxDataOne?this.state.boxDataOne.date:""}</span>
            </div>
            <div className="title-line-div">
                <div className="modify-img-box-button" data-id={this.state.boxDataOne?this.state.boxDataOne.id:0}>修改</div>
            </div>
        </div>);
    }
}


export default ImgBox;