import React from  'react'

function getDisplayName(Inconponent){
    return Inconponent.displayName||Inconponent.name||'component'
}

export default  color=>Inconponent=> class E extends Inconponent{
    static displayName = `E(${getDisplayName(Inconponent)})`
;    
    render(){
        const {wap,...otherprops} = this.props;
        const element = super.render();
        console.log(element);
        const newStyle = {
            color:element.type==='div'?color:null
        }
        const newProps = {
            ...otherprops,
            style:newStyle
        }
        return React.cloneElement(element,newProps,element.props.children)
    }
}
