<template>
    <div id="app">
        <div class="header">
            <div class="header__left-container">
                <img :src="require('@/assets/images/logo.png')" alt="Logo">
            </div>
            <div class="header__right-container">
                <nav>
                    <ul>
                        <li>
                            <NuxtLink to="/register">新規登録</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/login">ログイン</NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <Nuxt />
    </div>
</template>

<style scoped>
#app {
    height: 100vh;
    background-color: #15202B;
}
.header {
    height: 140px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
}

.header__left-container img {
    width: 160px;
}

.header__right-container li {
    margin-right: 20px;
    display: inline;
}

.header__right-container a {
    text-decoration: none;
    color: #fff;
}
</style>