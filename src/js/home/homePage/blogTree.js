import React, { Component } from 'react';
import "common/icon/iconfont.css";
import "common/js/home/homePage/blogTree.css";

class BlogTree extends Component{
    constructor(){
        super();

    }
    render(){
        return(
            <div className="blogTreeDiv">
                {
                    this.props.index % 2 === 0?(
                        <div className="blogInnerDiv" onClick={this.props.callBack} data-index={this.props.index}>
                           <div className="blogTextContent" data-index={this.props.index}>
                               <div className="blogOneTitle" data-index={this.props.index}>{this.props.data.title}</div>
                               <div className="blogOneDesc" data-index={this.props.index}>{this.props.data.desc}</div>
                           </div>
                            <div className="blankContainer left-icon" data-index={this.props.index}>
                                <div className="icon iconfont icon-createtask_fill" data-index={this.props.index}></div>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className="blogInnerDiv" onClick={this.props.callBack} data-index={this.props.index}>
                            <div className="blankContainer right-icon" data-index={this.props.index}>
                                <div className="icon iconfont icon-createtask_fill" data-index={this.props.index}></div>
                            </div>
                            <div className="blogTextContent" data-index={this.props.index}>
                                <div className="blogOneTitle" data-index={this.props.index}>{this.props.data.title}</div>
                                <div className="blogOneDesc" data-index={this.props.index}>{this.props.data.desc}</div>
                            </div>
                        </div>
                    )

                }
            </div>
        );
    }
}

export default BlogTree;