export default class Add extends Component{
 
  //调用父类的构造函数，让子类继承父类的this对象，获取父类的属性
  constructor(props){ 
    super(props); 
  }
 
  //点击保存按钮时触发的方法，暂时不作处理  
  onPress(){  }
 
  render() {
    return (
        //用flexbox对页面进行布局
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.back}>返回</Text>
            </View>
            <View style={styles.body}>
                <TextInput style={styles.input} placeholder="请输入待办内容"></TextInput>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.btn} onPress={this.onPress}>
                    <Text style={styles.txt}>点击保存</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
  }
}