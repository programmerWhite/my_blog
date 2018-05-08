import React ,{Component} from 'react';
import $ from "jquery";
import 'common/js/contractMe/contractMe.css';

import "common/css/common.css";

import SampleHead from 'common/js/sampleHead/sampleHead';
import ContractMe from 'common/js/contractMe/contractContent';
import Foot from 'common/js/foot/foot.js';


class Blog extends Component{
    constructor(){
        super();
    }

    componentDidMount(){
        $('.contract-me').addClass('current-menu');
    }

    render(){
        return (
            <div>
                <SampleHead />

                <ContractMe/>

                <Foot />
            </div>
        );
    }
}

export default Blog;