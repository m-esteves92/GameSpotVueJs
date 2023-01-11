<template>
    <header>
        <div class="container header_container">
            <div class="logo">
                <router-link to="/">
                    GameSpot
                </router-link>
            </div>
            <div>
                <ul>
                    <li>
                        <router-link to="/signin" v-if="!isAuth">
                            Sign in
                        </router-link>
                    </li>
                    <span v-if="isAuth">
                        <li>
                            <span @click="logoutUser">
                                Logout
                            </span>
                        </li>
                        <li>
                            <router-link to="/user/dashboard">
                                Dashboard
                            </router-link>
                        </li>
                    </span>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters({
            isAuth:'auth/isAuth',
            isAdmin:'auth/isAdmin'
        })
    },
    methods:{
        logoutUser(){
            this.$store.dispatch('auth/signOut');
        }
    }
}
</script>
