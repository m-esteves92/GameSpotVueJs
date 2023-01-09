import { createStore } from 'vuex';     // primeira coisa a fazer
import AuthModule from './auth';
import NotificationsModule from './notifications';
import ArticlesModule from './articles';

const store = createStore({
    modules:{
        auth: AuthModule,
        notify: NotificationsModule,
        articles: ArticlesModule
    }
});

export default store;