 import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// * 导入所有自定义router
const metaRouters = import.meta.globEager("./modules/*.ts");


const routerArray: RouteRecordRaw[] = [];
// 处理导入的router
Object.keys(metaRouters).forEach(item => {
  // @ts-ignore
	Object.keys(metaRouters[item]).forEach((key: any) => {
    // @ts-ignore
		routerArray.push(...metaRouters[item][key]);
	});
});



 const routes: Array<RouteRecordRaw> = [
  ...routerArray,
 ]

 const router = createRouter({
   history: createWebHistory(),
   routes
 });
 export default router;
