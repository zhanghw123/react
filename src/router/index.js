import asyncComponent from './asyncComponent';
const Index = asyncComponent(()=>import('../page/index'));  //首页导航
const Panel = asyncComponent(()=>import('../page/panel'));//canvas页面
const Redux = asyncComponent(()=>import('../page/redux'));//redux页面
const Hooks = asyncComponent(()=>import('../page/hooks'));//hooks
const Lifecycle = asyncComponent(()=>import('../page/lifecycle'));//声明周期
const Context = asyncComponent(()=>import('../page/context'));//context
export default [
    {
        path: "/",
        exact: true,
        component: Index
    },
    {
        path: "/panel",
        component: Panel
    },
    {
        path: "/redux",
        component: Redux
    },
    {
        path: "/hooks",
        component: Hooks
    },
    {
        path: "/lifecycle",
        component: Lifecycle
    },
    {
        path: "/context",
        component: Context
    }

]