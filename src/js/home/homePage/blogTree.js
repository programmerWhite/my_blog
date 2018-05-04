import React, { Component } from 'react';
import "common/icon/iconfont.css";
import "common/js/home/homePage/blogTree.css";

class BlogTree extends Component{

    render(){
        return(
            <div className="blogTreeDiv">
                {
                    this.props.index % 2 === 0?(
                        <div className="blogInnerDiv">
                           <div className="blogTextContent">
                               <div className="blogOneTitle">{this.props.data.title}</div>
                               <div className="blogOneDesc">{this.props.data.desc}</div>
                           </div>
                            <div className="blankContainer left-icon">
                                <div className="icon iconfont icon-createtask_fill"></div>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className="blogInnerDiv">
                            <div className="blankContainer right-icon">
                                <div className="icon iconfont icon-createtask_fill"></div>
                            </div>
                            <div className="blogTextContent">
                                <div className="blogOneTitle">{this.props.data.title}</div>
                                <div className="blogOneDesc">{this.props.data.desc}</div>
                            </div>
                        </div>
                    )

                }
            </div>
        );
    }
}

export default BlogTree;