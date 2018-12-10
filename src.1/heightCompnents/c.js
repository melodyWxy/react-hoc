import React,{Component} from  'react'


function c (Inconponent){


    return  class C extends Component{

        render(){
            return (
                <div>
                    我是组件C，是最基本的代理形式的高阶组件，我除了做自己的事，还可以给我的参数组件添加props哦
                    <Inconponent  wap='c' {...this.props}/>
                </div>
            )
        }
    }
}

export default c;