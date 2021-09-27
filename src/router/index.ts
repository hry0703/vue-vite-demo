
import { createRouter,createWebHistory} from "vue-router";
const routerHistorys = createWebHistory()
const router = createRouter({
    history: routerHistorys,
    routes: [
        {
            path: '/', 
            component: ()=>import ('../view/Home.vue')
        }
    ]
})
export default router