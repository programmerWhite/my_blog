import React ,{Component} from 'react';
import "common/js/myLive/fullScroll.css";

class BoxOneImg extends Component{
    render(){
        return (
            <div className="box-one-img-container" style={{backgroundColor:(!!this.props.imgUrl?"":"rgba(0,0,0,0)")}}>
                {
                    !!this.props.imgUrl?<img src={""+this.props.imgUrl} />:""
                }

            </div>
        );
    }
}

class NineBox extends Component{
    constructor(props){
        super(props);

        this.imgData = this.dealData(this.props.imgData);

        this.state = {
            imgData:this.imgData
        }
    }

    componentWillReceiveProps(nextProps) {

        var imgData = this.dealData(nextProps.imgData);

        this.setState({
            imgData: imgData
        });

    }


    dealData(imgData){
        /*图片排布数据，每一个子项就是一个排布样式
        * 随机抽取，实现样式尽量不重复*/
        var imgSiteArray = [
            [0,3,4,5,7,8],
            [2,5,4,0,6,7],
            [1,2,3,4,5,7],
            [1,2,3,4,5,6],
            [1,4,5,6,7,8],
            [1,2,3,4,7,8],
        ];

        var imgDataT = new Array();
        imgDataT.length = 9;

        var randomNum = parseInt(Math.random() * imgSiteArray.length);

        for(var i=0;i<9;i++){
            imgDataT[i] = null;
        }

        for(var i=0;i<imgSiteArray[randomNum].length;i++){
            var num = imgSiteArray[randomNum][i];
            imgDataT[num] = imgData[i];
        }
        /*还回长度为 9 的填充数组*/
        return imgDataT;
    }

    render(){
        return (
            <div className="nine-box-container">
                {
                    this.state.imgData.map((imgData,index)=>{
                        return (<BoxOneImg imgUrl={imgData} key={index}/>);
                    })

                }
            </div>
        );
    }
}

class ScrollPage extends Component{
    constructor(props){
        super(props);

        this.randomKey = parseInt(Math.random() * props.scrollData.imgArray.length);
        this.state = {
            imgArray:props.scrollData.imgArray,
            bgRandomKey:this.randomKey,
            bg:{
                background: "url("+this.props.scrollData.imgArray[this.randomKey]+")",
            }
        }

    }

    componentWillReceiveProps(nextProps) {

        this.randomKey = parseInt(Math.random() * nextProps.scrollData.imgArray.length);

        this.setState ({
            imgArray:nextProps.scrollData.imgArray,
            bgRandomKey:this.randomKey,
            bg:{
                background: "url("+nextProps.scrollData.imgArray[this.randomKey]+")",
            }
        });

    }

    render(){
        return (
            <div className="scroll-page-one">
                <div className="scroll-img-div">
                    <div className="scroll-img-inner-blur" style={this.state.bg}></div>
                </div>
                <div className="scroll-flex-div">
                    <div className="scroll-inner-div">
                        <div className="left-part-scroll-div">
                            <span>{this.props.scrollData.title}</span>
                            <p>{this.props.scrollData.desc}</p>
                        </div>
                        <div className="right-part-scroll-div">
                            <NineBox imgData={this.state.imgArray} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class FullScroll extends Component{
    constructor(){
        super();
        this.scrollData = [
                {
                    title:"xxxxxxxx",
                    desc:"asjdkoasjdklajdasjdklajdklajdkaljdajdaklj dasldjaskldja asdalk",
                    imgArray:[
                        'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0F/0D/ChMkJlon59WIJfjRAPpdrljI-TwAAi6DAF6ohsA-l3G603.jpg',
                        'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/06/ChMkJ1on59aABa4nATfERjoD4Lc051.jpg',
                        'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0F/0D/ChMkJlon5-CIckwBAKW6JlFU3AMAAi6DANC8r8Apbo-698.jpg',
                        'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0F/0D/ChMkJlon5-OIfTFRAPpdrljI-TwAAi6DQAAAAAA-l3G420.jpg',
                        'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1525751321&di=b4ac5a7eb39386376b6702fc2d878c76&src=http://pic32.photophoto.cn/20140718/0033034334383169_b.jpg',
                        'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0E/00/ChMkJlnJ3MaILQyfAIIdsiHosYsAAgy-ABpPzUAgh3K554.jpg',
                    ]
                },
                {
                    title:"aaaaaaaaaaa",
                    desc:"asjdkoasjdklajdasjdkada sadad  asdadad asdadasda ldjaskldja asdalk",
                    imgArray:[
                        'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0E/00/ChMkJlnJ3IOIKYY7AMxzeDBZucwAAgy9gBHPVMAzHOQ961.jpg',
                        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526356366&di=0d6043a604238fdbcdc09b6e5e26e533&imgtype=jpg&er=1&src=http%3A%2F%2Fimg15.3lian.com%2F2015%2Fa1%2F03%2Fd%2F163.jpg',
                        'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0E/00/ChMkJlnJ3ISIR8BQANcmq544uRgAAgy9gEaCP4A1ybD679.jpg',
                        'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0E/00/ChMkJ1nJ3IWIehscALReaep7Kw4AAgy9gH0OM4AtF6B101.jpg',
                        'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0E/00/ChMkJ1nJ3KWIddOhAKu1JhxEX6YAAgy9wCF8LIAq7U-640.jpg',
                        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525761657443&di=998254ca8d31bc14f3aa49e288710695&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Db7b8893a68d0f703f2bf9d9f60933b48%2F908fa0ec08fa513d1b3cb3f3376d55fbb2fbd90d.jpg',
                    ]
                },
                {
                    title:"xxxxxxxx",
                    desc:"asjdkoasjdklajdasjdklajdklajdkaljdajdaklj dasldjaskldja asdalk",
                    imgArray:[
                        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525761657443&di=b8d3b742c00eb807adecc1a6de41dd15&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F121103%2F235077-12110306322128.jpg',
                        'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/02/ChMkJlnHOj2ICeciACiHxj33cI4AAgvowKUnYMAKIfe688.jpg',
                        'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/02/ChMkJlnHOiyIbYEFABphAE5Pa0AAAgvowHl01cAGmEY433.jpg',
                        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525761657443&di=998254ca8d31bc14f3aa49e288710695&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Db7b8893a68d0f703f2bf9d9f60933b48%2F908fa0ec08fa513d1b3cb3f3376d55fbb2fbd90d.jpg',
                        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525761657441&di=7af1caf3c35f70b4ca848531e782fdc5&imgtype=0&src=http%3A%2F%2Fwww.taopic.com%2Fuploads%2Fallimg%2F140816%2F235034-140Q60K05695.jpg',
                        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525761657441&di=bb4702923f7b215fe9d653f038de8764&imgtype=0&src=http%3A%2F%2Fpic38.nipic.com%2F20140213%2F8825582_201924409134_2.jpg',

                    ]
                },
            ];

        this.state = {
            arrayData: this.scrollData[0],
            currentIndex:0
        };
        /*定时器变量*/
        this.scrollTimer = null;
    }


    changeImgData(index){

        this.setState({
            arrayData:this.scrollData[index],
            currentIndex:index
        });
    }

    componentDidMount(){
        var This = this;
        this.scrollTimer = setInterval(function () {
            var index = This.state.currentIndex;

            if(index == This.scrollData.length - 1){
                index = 0;
            }else{
                index++;
            }
            This.setState({
                arrayData:This.scrollData[index],
                currentIndex:index
            });
        },5000);
    }

    componentWillUnmount(){
        clearInterval(this.scrollTimer);
    }

    render(){
        return (
            <div className="full-scroll-container-div">

                <ScrollPage scrollData={this.state.arrayData}/>

                <div className="scroll-index-container-div">
                    {
                        this.scrollData.map((scrollData,index)=>{
                            return (<div className={this.state.currentIndex==index?"scroll-index-one-div current-index-div":"scroll-index-one-div"} onClick={()=>{this.changeImgData(index)}} key={index}></div>);
                        })
                    }
                </div>
            </div>
        );
    }
}

export default FullScroll;