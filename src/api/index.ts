import * as loginApi from './modules/login';  // 这里是把所有的导出一次性引入成为一个对象
 
export default Object.assign({}, loginApi); // 这里是把对象浅拷贝成一个新的对象然后导出
 
 