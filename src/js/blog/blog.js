import React ,{Component} from 'react';
import $ from "jquery";
import 'common/js/blog/blog.css';

import "common/css/common.css";

import SampleHead from 'common/js/sampleHead/sampleHead';
import BlogContent from 'common/js/blog/blogContent';
import Foot from 'common/js/foot/foot.js';


class Blog extends Component{
    constructor(){
        super();
    }

    componentDidMount(){
        $('.bo-wen').addClass('current-menu');
    }

    render(){
        return (
            <div>
                <SampleHead />

                <BlogContent />

                <Foot />
            </div>
        );
    }
}

export default Blog;