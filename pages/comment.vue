<template>
    <div class="content">
        <h1>コメント</h1>
        <Post></Post>
        <div class="comment-container">
            <h2>コメント</h2>
            <div class="comments">
                <Comment></Comment>
            </div>
        </div>
        <div class="comment-form">
            <input v-model="comment" type="text" required>
            <MyButton class="comment-form__btn">コメント</MyButton>
        </div>
    </div>
</template>

<script>
import Post from '~/components/Post.vue';

export default {
    layout: 'side-nav',
    data() {
        return {
            comment: null,
        }
    }
}
</script>

<style scoped>
.content {
    width: 100%;
}

.content h1 {
    padding: 14px;
    color: #fff;
    border: 1px solid #fff;
}

.comment-container h2 {
    padding: 10px 0;
    font-size: 14px;
    font-weight: normal;
    text-align: center;
    color: #fff;
    border: 1px solid #fff;
}

.comment-form {
    margin-top: 20px;
}

.comment-form input {
    width: 94%;
    padding: 10px;
    margin: 0 auto 20px;
    display: block;
    color: #fff;
    background-color: #15202B;
    border: 1px solid #fff;
    border-radius: 8px;

}

.comment-form__btn {
    margin: 0 0 0 auto;
    display: block;
}

</style>