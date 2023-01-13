import { createStore } from 'vuex';
import AuthModule from './auth';
import NotificationsModule from './notifications';
import ArticlesModule from './articles'

const store = createStore({
    strict:true,
    modules:{
        auth:AuthModule,
        notify: NotificationsModule,
        articles:ArticlesModule
    }
});

export default store;