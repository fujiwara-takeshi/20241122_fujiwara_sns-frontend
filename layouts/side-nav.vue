<template>
    <div id="app">
        <div class="side-nav">
            <img class="side-nav__logo" :src="require('@/assets/images/logo.png')" alt="Logo">
            <div class="side-nav__item" v-if="isAuth">
                <img :src="require('@/assets/images/profile.png')" alt="Profile">
                <span>ユーザー名</span>
            </div>
            <NuxtLink to="/" class="side-nav__item link">
                <img :src="require('@/assets/images/home.png')" alt="Home">
                <span>ホーム</span>
            </NuxtLink>
            <div @click="logout" class="side-nav__item link">
                <img :src="require('@/assets/images/logout.png')" alt="Logout">
                <span>ログアウト</span>
            </div>
            <div class="side-nav__post-form">
                <label for="message">シェア</label>
                <textarea id="message"></textarea>
                <MyButton class="post-form__btn">シェアする</MyButton>
            </div>
        </div>
        <Nuxt />
    </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
    data() {
        return {
            isAuth: false,
        }
    },
    methods: {
        logout() {
            firebase.auth().signOut().then(() => {
                this.$router.replace('/login')
            })
        },
    },
    created() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.isAuth = true
            }
        })
    },
}
</script>

<style scoped>
#app {
    height: 100vh;
    background-color: #15202B;
    display: flex;
}

.side-nav {
    width: 200px;
    padding: 20px 20px 0 10px;
}

.side-nav__logo {
    width: 100px;
    margin: 0 0 10px 10px;
}

.side-nav__item {
    margin: 0 0 10px 10px;
    margin-left: 10px;
    display: flex;
    align-items: center;
}

.side-nav__item.link {
    cursor: pointer;
    text-decoration: none;
}

.side-nav__item img {
    width: 22px;
    margin-right: 20px;
}

.side-nav__item span {
    font-size: 14px;
    color: #fff;
}

.side-nav__post-form {
    margin-top: 20px;
}

.side-nav__post-form label {
    margin-bottom: 10px;
    display: block;
    color: #fff;
}

.side-nav__post-form textarea {
    width: 180px;
    height: 100px;
    padding: 10px;
    margin-bottom: 14px;
    display: block;
    color: #fff;
    background-color: #15202B;
    border: 1px solid #fff;
    border-radius: 6px;
    resize: none;
}

.post-form__btn {
    margin: 0 0 0 auto;
    display: block;
}
</style>