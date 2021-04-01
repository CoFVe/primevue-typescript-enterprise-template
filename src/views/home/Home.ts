import { defineAsyncComponent } from 'vue';
import { Options, Vue } from 'vue-class-component';

@Options({
    name: "Home",
    component: "Home",
    components: {
        HelloWorld: defineAsyncComponent(() => import(/* webpackChunkName: "hello-world" */ '@/components/hello-world/HelloWorld.vue'))
    }
})
export default class Home extends Vue {
    public text = "";
}
