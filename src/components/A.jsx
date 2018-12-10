import React,{Component} from 'react';

class A extends Component{

    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return (
            <div >
                我是组件A,注意看我的props打印哦
                <input type='text' {...this.props.inputProps}/>
            </div>
        )
    }
}



export default A;