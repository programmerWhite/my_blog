import React ,{Component} from 'react';
import "common/js/myLive/myLiveContent.css";
import "common/icon/iconfont.css";
import FullScroll from "common/js/myLive/fullScroll";

class MyLiveContent extends Component{
    render(){
        return (<div>
            <div>
                <FullScroll/>
            </div>
        </div>);
    }
}

export default MyLiveContent;