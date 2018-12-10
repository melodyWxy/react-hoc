import React,{Component} from 'react';

import d from './../heightCompnents/d.js';



@d('B的wap高阶组件D')
class B extends Component{
    componentDidMount(){
        console.log(this.props)
    }
    render(){
       
        return (
            <div >
                我是组件B,注意看我的props打印哦
            </div>
        )
    }
}


export default B;