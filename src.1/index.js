import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ActionSheet from './components/ActionSheet/index.jsx';
import Header from './components/Header/index.jsx';
import A from './components/A.jsx'
import c from './heightCompnents/c.js';
import B from './components/B.jsx';
import d from './heightCompnents/d.js';

const NewB = c(B);
const NewA = d('A的wap高阶组件D')(A)
class App extends Component{
    render(){
        return (
            <div >
                <NewA wap='D' name = 'dddd' text= '测试A'/>
                <NewB  text = '测试b'/>
            </div>
        )
    }
}
// export default App;
const root = document.getElementById('root');
ReactDOM.render(<App />,root);



