<template>
  <div class="main-header">
    <ul class="button-group">
      <li class="logo h4 ml-5"><router-link to="/">MyBlog</router-link></li>
      <div v-if="authenticatedUser">
        <li class="link"><router-link to="/signout">Sign out</router-link> </li>
      </div>
      <div v-else>
        <li class="link">
          <div class="item mr-5"><router-link to="/signup" class="ml-3 mr-3">Sign up</router-link></div>
          <div class="item"><router-link to="/signin" class="ml-3 mr-3">Sign in</router-link></div>
        </li>
      </div>
    </ul>
  </div>
</template>


<style scoped>

.main-header {
  position: fixed;
  width: 100%;
  height: 50px;
  background: rgba(255,255,255,0.75);
  box-shadow: 0 2px 5px rgba(0,0,0,0.26);
  z-index: 999;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0 10px 0 0;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}

li {
  width: 80px;
  cursor: pointer;
  transition: all .3s;
}

li:first-child {
  margin-left: 10px;
  margin-right: auto;
}

.item {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item:hover {
  background: #ECF4FF;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.link {
  height: 100%;
  width: 180px;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>

<script>
  import firebase from "../plugins/firebase.js";

  export default {
    name: "Header",
    
    data: () => ({
      authenticatedUser: false,
    }),
    
    
    mounted(){
    firebase.auth().onAuthStateChanged((user) =>{
      if (user) {
        console.log('log in');
        this.authenticatedUser = true
        console.log(this.authenticatedUser);
      } else {
        console.log('log out');
        this.authenticatedUser = false
      }
     }); 
  }    
}
</script>