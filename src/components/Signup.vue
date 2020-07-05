<template>
  <div>
    <h1 style="margin-top:100px;">SIGN UP</h1><br>
    <div>
      <h3>E-mail</h3>
      <input type="text" placeholder="E-mail" v-model="email" class="form-control" style="width: 400px;"/>
    </div><br>
    <div>
      <h3>Password</h3>
      <input type="text" placeholder="Password" v-model="password" class="form-control" style="width: 400px;"/>
    </div><br>
    <button @click="createUserAccount" class="btn btn-info">Sign Up</button>
  </div>
</template>

<script>
import firebase from "../plugins/firebase.js";
export default {
  name: "singup",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    createUserAccount() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Create Account");
          this.$router.push("/");
        })
        .catch(error => {
          alert("An error occurred. Please try again from the start", error.message);
          console.error("Account Regeister Error", error.message);
        });
    }
  }
};
</script>