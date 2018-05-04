import React, { Component } from 'react';
import "./myBlog.css";

import BlogTree from './blogTree';

class MyBlog extends Component{
    constructor(props){
        super(props);
        this.data = [{
            title:"Beautiful road like waterfall in the california of south most beautiful view.",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem type specimen book. It not only five"
        },{
            title:"Beautiful road like waterfall in the california of south most beautiful view.",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem type specimen book. It not only five"
        },{
            title:"Beautiful road like waterfall in the california of south most beautiful view.",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem type specimen book. It not only five"
        },{
            title:"Beautiful road like waterfall in the california of south most beautiful view.",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem type specimen book. It not only five"
        }];
    }

    render(){
        return(
            <div className="myBlogContainer">
                <div className="myBlogTitle">
                    <h2>我的BLOG<sub>Read My Blog</sub></h2>
                    <p>wuyun 的blog 别有心得，风雨同舟，时间同行。</p>
                </div>
                <div className="myBlogContentDiv">
                    {
                        this.data.map((data,index)=>{
                            return (<BlogTree key={index} data={data} index={index}/>);
                        })
                    }
                </div>
            </div>
        );
    }
}

export default MyBlog;