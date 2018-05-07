import React ,{Component} from 'react';
import $ from "jquery";
import 'common/js/myLive/myLive.css';

import "common/css/common.css";

import HomeHead from 'common/js/home/homePage/homeHead';

import MyLiveContent from 'common/js/myLive/myLiveContent';

import Foot from 'common/js/foot/foot';


class MyLive extends Component{
    constructor(){
        super();
    }

    componentDidMount(){
        $('.my-live').addClass('current-menu');
    }

    render(){
        return (
            <div>
                <HomeHead />

                <MyLiveContent />

                <Foot />
            </div>
        );
    }
}

export default MyLive;