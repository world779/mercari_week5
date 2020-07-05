<template>
  <div>
    <h1 style="margin-top:100px;">SIGN OUT</h1><br>
    <button @click="singout" class="btn btn-danger">Sing Out</button>
  </div>
</template>

<script>
import firebase from "../plugins/firebase.js";
export default {
  name: "singout",
  methods: {
    singout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Sign out!");
          this.$router.push("/");
        })
        .catch(error => {
          alert(error);
        });
    }
  }
};
</script>