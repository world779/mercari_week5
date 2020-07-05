<template>
  <div>
    <h1 style="margin-top:100px;">SIGN IN</h1><br>
    <div>
      <h3>E-mail</h3>
      <input type="text" placeholder="E-mail" v-model="email" class="form-control" style="width: 400px;"/>
    </div><br>
    <div>
      <h3>Password</h3>
      <input type="text" placeholder="Password" v-model="password" class="form-control" style="width: 400px;"/>
    </div><br>
    <button @click="userSingIn" class="btn btn-info">Sign In</button>
  </div>
</template>

<script>
import firebase from "../plugins/firebase.js";
export default {
  name: "singin",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    userSingIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Signed in successfully");
          this.$router.push("/");
        })
        .catch(error => {
          alert("The password is incorrect or the E-mail cannot be recognized.", error.message);
          console.error("Account Regeister Error", error.message);
        });
    }
  }
};

</script>