<template>
    <div class="post">
        <div class="post__header">
            <span class="post__user-name">test</span>
            <img :src="require('@/assets/images/heart.png')" alt="Like">
            <span class="post__like-counter">0</span>
            <img :src="require('@/assets/images/cross.png')" alt="Delete">
            <img :src="require('@/assets/images/detail.png')" alt="Comment">
        </div>
        <p class="post__message">test message</p>
    </div>
</template>

<style scoped>
.post {
    padding: 10px;
    border: 1px solid #fff;
    color: #fff;
}

.post__header {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}

.post__user-name {
    font-weight: bold;
}

.post__header img {
    width: 22px;
    margin: 0 6px;
}

.post__header img:last-child {
    margin-left: 40px;
}

</style>