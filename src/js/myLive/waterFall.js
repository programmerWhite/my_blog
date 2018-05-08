import React,{Component} from "react";
import "common/js/myLive/waterFall.css";

class WaterFallImgDiv extends Component{
    constructor(props){
        super(props);

        var randomH  = parseInt(Math.random() * 100) + 150;
        this.bg = {
            height:randomH + "px",
            background:'url(' + this.props.imgUrl + ')',
        }
    }
    render() {
        return (
            <div style={this.bg} className="water-fall-img-div"></div>
        );
    }
}

class WaterFallLine extends Component{
    render(){
        return (
            <div className="water-fall-line-div">
                {
                    this.props.imgData.map((imgUrl,index)=>{
                        return (<WaterFallImgDiv imgUrl={imgUrl} key={index} />);
                    })
                }
            </div>
        );
    }
}

class WaterFall extends Component{
    constructor(){
        super();
        this.state = {
            imgArray:null
        }
    }
    componentWillMount(){
        var imgArray = [
            'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0F/0D/ChMkJlon59WIJfjRAPpdrljI-TwAAi6DAF6ohsA-l3G603.jpg',
            'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/06/ChMkJ1on59aABa4nATfERjoD4Lc051.jpg',
            'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0F/0D/ChMkJlon5-CIckwBAKW6JlFU3AMAAi6DANC8r8Apbo-698.jpg',
            'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0F/0D/ChMkJlon5-OIfTFRAPpdrljI-TwAAi6DQAAAAAA-l3G420.jpg',
            'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1525751321&di=b4ac5a7eb39386376b6702fc2d878c76&src=http://pic32.photophoto.cn/20140718/0033034334383169_b.jpg',
            'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0E/00/ChMkJlnJ3MaILQyfAIIdsiHosYsAAgy-ABpPzUAgh3K554.jpg',
            'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0E/00/ChMkJlnJ3IOIKYY7AMxzeDBZucwAAgy9gBHPVMAzHOQ961.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526356366&di=0d6043a604238fdbcdc09b6e5e26e533&imgtype=jpg&er=1&src=http%3A%2F%2Fimg15.3lian.com%2F2015%2Fa1%2F03%2Fd%2F163.jpg',
            'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0E/00/ChMkJlnJ3ISIR8BQANcmq544uRgAAgy9gEaCP4A1ybD679.jpg',
            'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0E/00/ChMkJ1nJ3IWIehscALReaep7Kw4AAgy9gH0OM4AtF6B101.jpg',
            'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0E/00/ChMkJ1nJ3KWIddOhAKu1JhxEX6YAAgy9wCF8LIAq7U-640.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525761657443&di=998254ca8d31bc14f3aa49e288710695&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Db7b8893a68d0f703f2bf9d9f60933b48%2F908fa0ec08fa513d1b3cb3f3376d55fbb2fbd90d.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525761657443&di=b8d3b742c00eb807adecc1a6de41dd15&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F121103%2F235077-12110306322128.jpg',
            'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/02/ChMkJlnHOj2ICeciACiHxj33cI4AAgvowKUnYMAKIfe688.jpg',
            'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/02/ChMkJlnHOiyIbYEFABphAE5Pa0AAAgvowHl01cAGmEY433.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525761657443&di=998254ca8d31bc14f3aa49e288710695&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Db7b8893a68d0f703f2bf9d9f60933b48%2F908fa0ec08fa513d1b3cb3f3376d55fbb2fbd90d.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525761657441&di=7af1caf3c35f70b4ca848531e782fdc5&imgtype=0&src=http%3A%2F%2Fwww.taopic.com%2Fuploads%2Fallimg%2F140816%2F235034-140Q60K05695.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525761657441&di=bb4702923f7b215fe9d653f038de8764&imgtype=0&src=http%3A%2F%2Fpic38.nipic.com%2F20140213%2F8825582_201924409134_2.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525761657440&di=fe5916a04dc2ea5c094eaa2517390fcd&imgtype=0&src=http%3A%2F%2Fpic5.photophoto.cn%2F20071228%2F0034034901778224_b.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525761657438&di=82f18ac943988dd33ecafede1e4bea41&imgtype=0&src=http%3A%2F%2Fpic34.photophoto.cn%2F20150127%2F0006019093196381_b.jpg'
        ];

        var imgArray2 = [[],[],[],[],[]];

        var index = 0;
        for(var i=0;i<imgArray.length;i++){
            if(index == 5){
                index = 0;
            }
            imgArray2[index].push(imgArray[i]);
            index++;
        }

        this.setState({
            imgArray:imgArray2
        });
    }

    render(){
        return (
            <div className="water-fall-div">
                <div className="water-fall-head-div">一图一故事,一转一乾坤</div>
                <div className="water-fall-inner-div">
                    {
                        this.state.imgArray.map((imgData,index)=>{
                            return (<WaterFallLine key={index} imgData={imgData}/>);
                        })
                    }
                </div>
            </div>
        );
    }
}

export default WaterFall;