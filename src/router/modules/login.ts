import { RouteRecordRaw } from "vue-router";


// 首页模块
const loginRouter: Array<RouteRecordRaw> = [
	{
		path: "/login",
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login"
		}
	}
];

export default loginRouter;
