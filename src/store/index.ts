import Vuex, { Store } from 'vuex';
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios';
import axios from 'axios';


export function initializeStore() {
    
    VuexORM.use(VuexORMAxios, { axios });
  
    // Create a new instance of Database.
    const database = new VuexORM.Database();
  
    // Register Models to Database.
    // database.register(BattleshipEntity);
    
    setStore(new Vuex.Store({
      plugins: [VuexORM.install(database)]
    }));

  }

  export let store!: Store<{}>;
  function setStore(currentStore: Store<{}>) {
    store = currentStore;
  }