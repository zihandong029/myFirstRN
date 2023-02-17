/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

//引入组件
import Add from './todoList'
import Main from './ToDoListMain'
 
export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        current:'main', //current表示当前显示的页面
    }
    this.onAddItem = this.onAddItem.bind(this);
    this.onBack = this.onBack.bind(this);
  }
 
  //当点击‘添加’时跳转到添加页面
  onAddItem(){
    this.setState((prevState)=>{
        return{
            current:'add'
        }
    });
  }
 
  //在添加页面点击‘返回’回到主页面
  onBack(){
     this.setState({
        current:'main'
     });
  }
 
  render() {
     if (this.state.current === 'main') {
       return (<Main onAddItem={this.onAddItem} />);
     } else {
             return (<Add onBack={this.onBack} />);
     }
  }
}

