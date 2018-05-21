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
    }

    addNewImg(e){
        var boxId = e.target.getAttribute("data-id");

        $('.input-file-style').off().on("change",function(e) {
            // var fr = new FileReader();
            // fr.onload = function(){
                // console.log()
                // console.log(fr.result);
                //
                var formdata = new FormData();
                //
                // var fileData = {
                //     fieldName: 'file',
                //     originalFilename: e.target.files[0].name,
                //     path: e.target.value,
                //     headers: fr.result,
                //     size: e.target.files[0].size
                // };
                // console.log(fileData)
                // formdata.append('file',fileData);
                // formdata.append('boxId',boxId);

                // return false;
            console.log(e.target.files)
                objForEach(e.target.files,function (file) {
                    console.log(131223)
                    console.log(file)
                    formdata.append('file',file);
                    formdata.append('boxId',boxId);

                    return false;
                    $.ajax({
                        url: IP_ADDRESS+"/upLoadImg",
                        type: "post",
                        data: formdata,
                        contentType: false,
                        processData: false,
                        mimeType: "multipart/form-data",
                        success: function (data) {
                            // console.log(data);
                        },
                        error: function (err) {
                            // console.log(err);
                        }
                    });
                })
                

            // }
            // fr.readAsArrayBuffer(e.target.files[0]);
        });

        $('.input-file-style').click();

    }

    render(){
        return (<div className="box-one-obj-div">
            <div className="title-line-div">
                <p className="label-text-p">标题：</p>
                <input type="text" className="img-box-title-input" defaultValue={this.state.boxDataOne.title?this.state.boxDataOne.title:""}></input>
            </div>
            <div className="img-box-content-div">
                {
                    this.state.boxDataOne.imgData.map((imgUrl,index)=>{
                       return (<ImgObj imgUrl={imgUrl} key={index}/>)
                    })
                }
                <BlankImgObj callBack={this.addNewImg.bind(this)} data-id={this.state.boxDataOne.id}/>
            </div>
            <div className="title-line-div">
                <p className="label-text-p">描述：</p>
                <textarea className="img-box-desc-text-area" defaultValue={this.state.boxDataOne.desc?this.state.boxDataOne.desc:""}></textarea>
            </div>
            <div className="title-line-div">
                <span className="label-text-p">时间：{this.state.boxDataOne.date}</span>
            </div>
            <div className="title-line-div">
                <div className="modify-img-box-button">修改</div>
            </div>
        </div>);
    }
}


export default ImgBox;


// 遍历对象
function objForEach(obj, fn) {
    var key = void 0,
        result = void 0;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            result = fn.call(obj, key, obj[key]);
            if (result === false) {
                break;
            }
        }
    }
}