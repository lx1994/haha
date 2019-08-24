export default{
    path:'/movie',
    component: () => import('@/views/Movie') //箭头函数  按需导入
}