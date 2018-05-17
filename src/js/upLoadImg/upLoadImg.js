import React,{Component} from 'react';
import "common/js/upLoadImg/upLoadImg.css";

import SampleHead from 'common/js/sampleHead/sampleHead';

import ImgBox from 'common/js/upLoadImg/imgBox';

import Foot from 'common/js/foot/foot';

class UpLoadImg extends Component{
    constructor(){
        super();

        this.data = {
            imgArray:[
                {
                    id:1,
                    date:"2018-05-24",
                    title:"巴黎是艺术家的圣地",
                    desc:"巴黎一直以来都是一个时尚胜地，无数的时尚达人在这里汇聚，讨论着下一季整个世界的流行趋势。那是什么让巴黎有那么多的时尚达人呢，就是因为巴黎的文化底蕴给了人们很多的灵感。谁说一定要去看埃菲尔铁塔和凯旋门，在巴黎来次博物馆之旅也不错啊～",
                    imgData:[
                        'http://dingyue.nosdn.127.net/0N1bQ8k3LIM41XnDXzPIpsNOfGExYKOSTp7Zse6YyUywO1496481577019compressflag.jpg',
                        'http://dingyue.nosdn.127.net/Fru5YnVK=CzN4Qb3Bw6AHZ3755OF8n5WPJFiYrM8cn7D=1496481577020compressflag.jpg',
                        'http://dingyue.nosdn.127.net/FQlQXpjVePhAF3r14mTILENNJcinrX8fZY5HYJZyJrcdb1496481577020.jpg',
                        'http://dingyue.nosdn.127.net/8sAT=UBn2Id5YA=EpN1lDr4oySsKKOGhcjQA20mF8Pm2V1496481577021compressflag.jpg',
                        'http://dingyue.nosdn.127.net/76QsIsLP3m5mam1qKbfkSKUfeM2MXTOwXdQRahKkQfc1W1496481577021compressflag.jpg',
                        'http://dingyue.nosdn.127.net/IxjWbBiuq4PuwCcRP85HYBUHGQcWgW8vFy8J81reDOlzj1496481577022compressflag.png',
                        'http://dingyue.nosdn.127.net/EoCMZ59uStWgnxURUEM6rKYPmwog62qMz5bJL7G5FmLnJ1496481577022compressflag.jpg'
                    ]
                },
                {
                    id:2,
                    date:"2018-05-22",
                    title:"走进活色生香的中央巴刹",
                    desc:"  每到一个城市，除了这个城市的风景，最能体现当地老百姓生活的，当属当地的菜市场，一方水土，一方菜式，一方人情，在这个五味杂陈的地方，新鲜的蔬果、生鲜，熟悉或陌生的农夫口音，总觉得在他们嘴里说出来的生活更生动更直接，也更能打动我。所以要想了解当地人的生活，菜市场是一定要来逛一逛走一走的。",
                    imgData:[
                        'http://img2.ph.126.net/c8rjvOXl6yCxMbjpaK2P1A==/6632601584420614763.jpg',
                        'http://img0.ph.126.net/iPxiBLT2ctppmPjl_y3wVg==/6632332204071813717.jpg',
                        'http://img0.ph.126.net/FNuB3vR4m28ZPplNTWde1Q==/6632084813958232902.jpg',
                        'http://img0.ph.126.net/sG4qcRyc-QJb1eoIMtr6iQ==/6632497130815972269.jpg',
                        'http://img0.ph.126.net/ak3SKi7S4p6eSIxP7KY2dg==/6632188168051240644.jpg',
                        'http://img2.ph.126.net/jwteUaRKbrNXyTEG3kPHiA==/6632455349374119269.jpg',
                        'http://img1.ph.126.net/A6TFUEwIFOkvtxXwvB_Cug==/6632045231539636627.jpg'
                    ]
                }
            ]
        };

        this.state = {
            imgDataV:this.data.imgArray
        };

        this.emptyData = {
            id:0,
            date:"",
            title:"",
            desc:" ",
            imgData:[

            ]
        }

    }

    render(){
        return (<div className="up-load-img-container-div">
                    <SampleHead />

                    <div className="up-img-content-div">

                        <div className="img-box-container-div">
                            {
                                this.state.imgDataV.map((imgDataV,index)=>{
                                   return (<ImgBox imgData={imgDataV} key={index} />);
                                })
                            }
                            <ImgBox  imgData={this.emptyData}/>
                        </div>

                    </div>

                    <input type="file" className="input-file-style" />

                    <Foot />
            </div>);
    }
}

export default UpLoadImg;