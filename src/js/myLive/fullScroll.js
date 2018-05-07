import React ,{Component} from 'react';
import "common/js/myLive/fullScroll.css";

class FullScroll extends Component{
    constructor(){
        super();
        this.state = {
            scrollData:[
                {
                    title:"xxxxxxxx",
                    desc:"asjdkoasjdklajdasjdklajdklajdkaljdajdaklj dasldjaskldja asdalk",
                    imgArray:[
                        "common/js/home/img/liveImg/1.jpg",
                        "common/js/home/img/liveImg/2.jpg",
                        "common/js/home/img/liveImg/3.jpg",
                        "common/js/home/img/liveImg/4.jpg",
                        "common/js/home/img/liveImg/5.jpg",
                        "common/js/home/img/liveImg/6.jpg",
                    ]
                },
                {
                    title:"xxxxxxxx",
                    desc:"asjdkoasjdklajdasjdklajdklajdkaljdajdaklj dasldjaskldja asdalk",
                    imgArray:[
                        "common/js/home/img/liveImg/7.jpg",
                        "common/js/home/img/liveImg/8.jpg",
                        "common/js/home/img/liveImg/9.jpg",
                        "common/js/home/img/liveImg/10.jpg",
                        "common/js/home/img/liveImg/11.jpg",
                        "common/js/home/img/liveImg/12.jpg",
                    ]
                }
            ]
        }
    }

    render(){
        return (
            <div className="full-scroll-container-div">

            </div>
        );
    }
}

export default FullScroll;