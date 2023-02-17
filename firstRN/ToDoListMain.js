export default class Main extends Component{
  constructor(props){
    super(props);
    this.state={
        //设置一个状态
        isEditing:false
    };
 
    //bind的作用是将处理函数和指定的操作绑定在一起，操作触发时函数执行，有多种写法
    this.onEdit = this.onEdit.bind(this);
  }
 
    //通过setState
    //如果直接用setState修改状态可能会由于异步更新问题导致修改失败
    //所以要传入上一次状态prevState
    onEdit(){
        this.setState((prevState) => {
             return {
                isEditing: !prevState.isEditing
             }
        });
    }
 
  render() {
    return (
        //用flexBox布局
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.add}>添加</Text>
                <Text style={styles.title}>待办事项</Text>
                //点击该文字会触发onEdit函数修改isEditing的值
                <Text style={styles.multi} onPress={this.onEdit}>
                    {this.state.isEditing ? '取消' : '多选'}
                </Text>
            </View>
        </View>
    )
  }
}