import { Options, Vue } from 'vue-class-component';

@Options({
    name: "Home",
    components: {
        HelloWorld: () => import(/* webpackChunkName: "hello-world" */ '@/components/hello-world/HelloWorld.vue')
    }
})
export default class Home extends Vue {

}
