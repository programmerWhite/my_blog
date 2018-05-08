import React ,{Component} from 'react';
import "common/js/myLive/myLiveContent.css";
import "common/icon/iconfont.css";
import FullScroll from "common/js/myLive/fullScroll";
import WaterFall from "common/js/myLive/waterFall";

class MyLiveContent extends Component{
    render(){
        return (<div>
            <div>
                <FullScroll/>
                <WaterFall/>
            </div>
        </div>);
    }
}

export default MyLiveContent;