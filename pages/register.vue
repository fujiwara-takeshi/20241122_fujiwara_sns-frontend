<template>
    <div class="register">
        <div class="register-form">
            <h1>新規登録</h1>
            <validation-observer ref="obs" v-slot="ObserverProps">
                <validation-provider v-slot="{ errors }" rules="required|max:20">
                    <input v-model="name" type="text" name="ユーザーネーム" placeholder="ユーザーネーム" required />
                    <div class="error">{{ errors[0] }}</div>
                </validation-provider>
                <input v-model="email" type="email" placeholder="メールアドレス" required />
                <div class="error">{{ errorOfEmail }}</div>
                <input v-model="password" type="password" placeholder="パスワード" required />
                <div class="error">{{ errorOfPasswordOrGeneral }}</div>
                <MyButton @click="register" :disabled="ObserverProps.invalid || !ObserverProps.validated">新規登録</MyButton>
            </validation-observer>
        </div>
    </div>
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
    layout: 'header',
    data() {
        return {
            name: null,
            email: null,
            password: null,
            errorOfEmail: null,
            errorOfPasswordOrGeneral: null,
        }
    },
    methods: {
        async register() {
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
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.$router.push("/login")
                })
                .catch((error) => {
                    switch (error.code) {
                        case "auth/invalid-email":
                            this.errorOfEmail = 'メールアドレスの形式が違います';
                            break;
                        case "auth/email-already-in-use":
                            this.errorOfEmail = 'このメールアドレスはすでに使われています';
                            break;
                        case "auth/weak-password":
                            this.errorOfPasswordOrGeneral = 'パスワードは6文字以上で入力してください';
                            break;
                        default:
                            this.errorOfPasswordOrGeneral = 'エラーが発生しました。しばらくしてから再度お試しください。';
                            break;
                    }
                });
        },
    },
};
</script>

<style scoped>
.register-form {
    width: 300px;
    padding: 20px 40px;
    margin: 0 auto;
    text-align: center;
    background-color: #fff;
    border-radius: 6px;
}

.register-form h1 {
    margin: 0 auto;
    font-size: 16px;
}

.register-form input {
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