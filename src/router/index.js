import asyncComponent from './asyncComponent';
const Home = asyncComponent(()=>import('../page/home'));
const Panel = asyncComponent(()=>import('../page/panel'));
export default [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/panel",
        component: Panel
    }

]