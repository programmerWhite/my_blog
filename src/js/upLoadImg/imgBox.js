import React,{Component} from 'react';
import "common/js/upLoadImg/imgBox.css";

class ImgObj extends Component{
    render() {
        return (<div className="box-img-one-div">
            <img src={this.props.imgUrl} />
        </div>);
    }
}

class ImgBox extends Component{

    constructor(props){
        super(props);
        this.state = {
            boxDataOne:this.props.imgData
        }

    }

    render(){
        return (<div className="box-one-obj-div">
            <div className="title-line-div">
                <span>标题：</span><input type="text" className="img-box-title-input" defaultValue={this.state.boxDataOne.title?this.state.boxDataOne.title:""}></input>
            </div>
            <div className="img-box-content-div">
                {
                    this.state.boxDataOne.imgData.map((imgUrl,index)=>{
                       return (<ImgObj imgUrl={imgUrl} key={index}/>)
                    })
                }
            </div>
            <div className="title-line-div">
                <span>描述：</span>
                <textarea className="img-box-desc-text-area" defaultValue={this.state.boxDataOne.title?this.state.boxDataOne.title:""}></textarea>
            </div>
            <div className="title-line-div">
                <span className="edit-this-box"></span>
            </div>
        </div>);
    }
}


export default ImgBox;