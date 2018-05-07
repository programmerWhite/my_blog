import React ,{Component} from 'react';
import "common/js/myLive/fullScroll.css";

class BoxOneImg extends Component{
    render(){
        return (
            <div className="box-one-img-container" style={{backgroundColor:(!!this.props.imgUrl?"":"rgba(0,0,0,0)")}}>
                {
                    !!this.props.imgUrl?<img src={require("common/js"+this.props.imgUrl)} />:""
                }

            </div>
        );
    }
}

class NineBox extends Component{
    constructor(props){
        super(props);

        this.imgSiteArray = [
            [0,3,4,5,7,8],
            [2,5,4,5,6,7],
            [1,2,3,4,5,7],
            [1,2,3,4,5,6],
            [1,4,5,6,7,8],
            [1,2,3,4,7,8],
        ];

        this.imgData = new Array();
        this.imgData.length = 9;

        this.ramdonNum = parseInt(Math.random()*this.imgSiteArray.length);

        for(var i=0;i<9;i++){
            this.imgData[i] = null;
        }

        for(var i=0;i<this.imgSiteArray[this.ramdonNum].length;i++){
            var num = this.imgSiteArray[this.ramdonNum][i];
            this.imgData[num] = this.props.imgData[i];
        }
    }
    render(){
        return (
            <div className="nine-box-container">
                {
                    this.imgData.map((imgData,index)=>{
                        return (<BoxOneImg imgUrl={imgData} key={index}/>);
                    })

                }
            </div>
        );
    }
}

class ScrollPage extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <div className="scroll-page-one">
                <div className="scroll-img-div">
                    <img src={require("common/js"+this.props.scrollData.imgArray[0])} />
                </div>
                <div className="scroll-flex-div">
                    <div className="scroll-inner-div">
                        <div className="left-part-scroll-div">
                            <span>{this.props.scrollData.title}</span>
                            <p>{this.props.scrollData.desc}</p>
                        </div>
                        <div className="right-part-scroll-div">
                            <NineBox imgData={this.props.scrollData.imgArray} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class FullScroll extends Component{
    constructor(){
        super();
        this.state = {
            scrollData:[
                {
                    title:"xxxxxxxx",
                    desc:"asjdkoasjdklajdasjdklajdklajdkaljdajdaklj dasldjaskldja asdalk",
                    imgArray:[
                        "/home/img/liveImg/1.jpg",
                        "/home/img/liveImg/2.jpg",
                        "/home/img/liveImg/3.jpg",
                        "/home/img/liveImg/4.jpg",
                        "/home/img/liveImg/5.jpg",
                        "/home/img/liveImg/6.jpg",
                    ]
                },
                {
                    title:"xxxxxxxx",
                    desc:"asjdkoasjdklajdasjdklajdklajdkaljdajdaklj dasldjaskldja asdalk",
                    imgArray:[
                        "/home/img/liveImg/7.jpg",
                        "/home/img/liveImg/8.jpg",
                        "/home/img/liveImg/9.jpg",
                        "/home/img/liveImg/10.jpg",
                        "/home/img/liveImg/11.jpg",
                        "/home/img/liveImg/12.jpg",
                    ]
                }
            ]
        }
    }

    render(){
        return (
            <div className="full-scroll-container-div">
                {
                    this.state.scrollData.map((scrollData,index)=>{
                        return (<ScrollPage  key={index} scrollData={scrollData}/>);
                    })
                }

            </div>
        );
    }
}

export default FullScroll;