import React ,{Component} from 'react';
import "common/js/blog/blogContent.css";

import BlogTree from 'common/js/home/homePage/blogTree';


class BlogContent extends Component{
    constructor(){
        super();
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

        this.state = {
            "articleTitle":"",
            "articleDesc":"",
            "articleContent":"",
            "popStatus":false
        }
    }

    callBackF(e){
        var index = e.target.getAttribute("data-index");
        var data = this.data[index];
        this.setState({
            "articleTitle":data.title,
            "articleDesc":"",
            "articleContent":data.desc,
            "popStatus":true
        });
    }

    hideShadeContent(){
        this.setState({
            popStatus:false
        });
    }

    defaultF(e){
        e.stopPropagation();
    }

    render(){
        return (
            <div>
                <div className="myBlogContentDiv">
                    {
                        this.data.map((data,index)=>{
                            return (<BlogTree key={index} data={data} index={index} callBack={this.callBackF.bind(this)}/>);
                        })
                    }
                </div>
                <div className="blog-shade-div" onClick={this.hideShadeContent.bind(this)} style={{display:this.state.popStatus?"block":"none"}}>
                    <div className="blog-text-content" onClick={this.defaultF.bind(this)}>
                        <h2 className="blog-article-title">{this.state.articleTitle}</h2>
                        <div className="blog-article-desc">{this.state.articleDesc}</div>
                        <div className="blog-article-content">
                            {this.state.articleContent}
                        </div>
                    </div>
                    <div className="close-shade-label icon iconfont icon-close" onClick={this.hideShadeContent.bind(this)}></div>

                </div>
            </div>
        );
    }
}

export default BlogContent;