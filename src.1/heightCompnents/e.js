import React,{Component,createRef} from  'react'



export default  title=>Inconponent=> class E extends Component{
    state={
        value:''
    }
    myref=createRef();
    handleInputChange=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
    
    render(){
        const {wap,...otherprops} = this.props;
        const newProps = {
            value:this.state.value,
            onChange:this.handleInputChange
        }
        return (
            <div>
                我是组件E，是典型的继承形式的高阶组件，我除了做自己的事，还可以对 我的参数组件：1增加/删减props2抽离状态3访问ref4包装组件
                <div>我的title：{title}</div>
                <Inconponent  {...otherprops} ref={this.myref} inputProps={newProps}/>
            </div>
        )
    }
}
