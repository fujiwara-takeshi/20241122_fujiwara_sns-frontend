<template>
    <div class="login">
        <div class="login-form">
            <h1>ログイン</h1>
            <input v-model="email" type="email" placeholder="メールアドレス" required />
            <div class="error">{{ errorOfEmail }}</div>
            <input v-model="password" type="password" placeholder="パスワード" required />
            <div class="error">{{ errorOfPasswordOrGeneral }}</div>
            <MyButton class="login-form__btn" @click="login">ログイン</MyButton>
        </div>
    </div>
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
    layout: 'header',
    data() {
        return {
            email: null,
            password: null,
            errorOfEmail: null,
            errorOfPasswordOrGeneral: null,
        }
    },
    methods: {
        login() {
            this.errorOfEmail = null;
            this.errorOfPasswordOrGeneral = null;

            if (!this.email) {
                this.errorOfEmail = 'メールアドレスが入力されていません';
            }
            if (!this.password) {
                this.errorOfPasswordOrGeneral = 'パスワードが入力されていません';
            }
            if (!this.email || !this.password) {
                return;
            }

            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.$router.push('/');
                })
                .catch((error) => {
                    switch (error.code) {
                        case 'auth/invalid-email':
                            this.errorOfEmail = 'メールアドレスの形式が違います';
                            break;
                        case 'auth/user-disabled':
                            this.errorOfEmail = 'ユーザーが無効になっています';
                            break;
                        case 'auth/user-not-found':
                            this.errorOfEmail = 'ユーザーが存在しません';
                            break;
                        case 'auth/wrong-password':
                            this.errorOfPasswordOrGeneral = 'パスワードが間違っております';
                            break;
                        default:
                            this.errorOfPasswordOrGeneral = 'エラーが発生しました。しばらくしてから再度お試しください。';
                            break;
                    }
                })
        }
    }
}
</script>

<style scoped>
.login-form {
    width: 300px;
    padding: 20px 40px;
    margin: 0 auto;
    text-align: center;
    background-color: #fff;
    border-radius: 6px;
}

.login-form h1 {
    margin: 0 auto;
    font-size: 16px;
}

.login-form input {
    width: 276px;
    padding: 10px;
    margin: 14px auto 0;
    display: block;
    border-radius: 8px;
}

.error {
    text-align: left;
    color: red;
}
</style>