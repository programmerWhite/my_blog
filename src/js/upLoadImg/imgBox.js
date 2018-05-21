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

        var This = this;

        $('.input-file-style').off().on("change",function(e) {

            var files = e.target.files;

            // ------------------------------ 验证文件信息 ------------------------------
            var resultFiles = [];
            var errInfo = [];
            arrForEach(files, function (file) {
                var name = file.name;
                var size = file.size;

                // chrome 低版本 name === undefined
                if (!name || !size) {
                    return;
                }

                if (/\.(jpg|jpeg|png|bmp|gif)$/i.test(name) === false) {
                    // 后缀名不合法，不是图片
                    errInfo.push('\u3010' + name + '\u3011\u4E0D\u662F\u56FE\u7247');
                    return;
                }

                // 验证通过的加入结果列表
                resultFiles.push(file);
            });

            // 添加图片数据
            var formdata = new FormData();
            arrForEach(resultFiles, function (file) {
                formdata.append('file', file);
            });

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

        });

        if(boxId != "0"){
            $('.input-file-style').click();
        }else{
            alert("请先添加标题和描述");
        }
    }

    saveBoxTitleAndDesc(e){
        var _title = this.refs.titleText.value;
        var _desc = this.refs.boxDesc.value;
        var boxId = e.target.getAttribute('data-id');
        console.log(_title+"--"+_desc+"--"+boxId);

        if(_title == "" || _title == " "){
            alert("标题不能为空");
            return false;
        }

        if(_desc == "" || _desc == " "){
            alert("描述不能为空");
            return false;
        }

        $.post(IP_ADDRESS+"/operatingBoxText",{
            title:_title,
            desc:_desc,
            boxId:boxId
        },function (data) {
            console.log(data);
        });

    }

    render(){
        return (<div className="box-one-obj-div">
            <div className="title-line-div">
                <p className="label-text-p">标题：</p>
                <input type="text" ref="titleText" className="img-box-title-input" defaultValue={this.state.boxDataOne?this.state.boxDataOne.title:""}></input>
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
                <textarea ref="boxDesc" className="img-box-desc-text-area" defaultValue={this.state.boxDataOne?this.state.boxDataOne.desc:""}></textarea>
            </div>
            <div className="title-line-div">
                <span className="label-text-p">时间：{this.state.boxDataOne?this.state.boxDataOne.date:""}</span>
            </div>
            <div className="title-line-div">
                <div className="modify-img-box-button" onClick={this.saveBoxTitleAndDesc.bind(this)} data-id={this.state.boxDataOne?this.state.boxDataOne.id:0}>
                    {
                        this.state.boxDataOne.id==0?"添加":"修改"
                    }
                </div>
            </div>
        </div>);
    }
}


// 遍历类数组
function arrForEach(fakeArr, fn) {
    var i = void 0,
        item = void 0,
        result = void 0;
    var length = fakeArr.length || 0;

    console.log(length)
    for (i = 0; i < length; i++) {
        item = fakeArr[i];
        result = fn.call(fakeArr, item, i);
        console.log(result)
        if (result === false) {
            break;
        }
    }
}


export default ImgBox;


