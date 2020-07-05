<template>
  <div class="blog_visual">
  <v-list three-line>
    <template v-for="(blog, index) in blogs">
      <v-list-item
          :key="index"
      >
        <div class="row">
        <v-list-item-title>
          <v-list-item-subtitle>
            {{blog.createdAt.toDate().toLocaleString()}}
          </v-list-item-subtitle>
          <div class="d-flex align-items-start">
            <div class="col-sm-8">
              <span class="h2">{{blog.title}}</span>
            </div>

            <div class="col-sm-4">
              <div v-if="authenticatedUser">              
                <button class="btn btn-sm btn-success mr-3"><v-icon color="white" @click.stop="showBlog(blog)" small>Show</v-icon></button>
                <button class="btn btn-sm btn-info  mr-3"><v-icon color="white" @click.stop="showCreateForm(blog)" small>Edit</v-icon></button>
                <button class="btn btn-sm btn-danger"><v-icon color="white" @click="deleteBlog(blog.id)" small>Delete</v-icon></button>
              </div>
            
            
              <div v-else class="ml-5">
                <button class="btn btn-sm btn-success pull-right ml-5"><v-icon color="white" @click.stop="showBlog(blog)" small>Show</v-icon></button>
              </div>           
            </div>
          </div>
          <v-dialog v-model="displayForm" v-if="currentBlog" max-width="500px">
            <v-card>
                <v-container>
                <h2>Edit Blog</h2>
                <v-form ref="form" v-model="valid" lazy-validation>
                
                <v-text-field
                        v-model="currentBlog.title"
                        label="title"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="currentBlog.body"
                        label="body"
                        required
                    ></v-text-field>
                    <v-btn
                        @click="updateBlog(currentBlog.id, currrentBlog.title, currentBlog.body)"
                    >
                    Update!
                    </v-btn>
                </v-form>
                </v-container>
            </v-card>
          </v-dialog>

          <v-dialog v-model="displayShow" v-if="currentBlog" max-width="500px" >
            <v-card>
                <v-container>
                
                
                <v-text-field
                        v-model="currentBlog.title"
                        label="title"
                      
                        readonly
                    ></v-text-field>
                    <v-text-field
                        v-model="currentBlog.body"
                        label="body"
                        readonly
                    ></v-text-field>
                    
                
                </v-container>
            </v-card>
          </v-dialog>
          
          </v-list-item-title>

        </div>
      </v-list-item>
      <v-divider :key="blog.id"></v-divider>
    </template>
    
  </v-list>
  <div v-if="authenticatedUser">
    <Form/>
  </div>
  <div v-else>
  </div>
  </div>
</template>

<script>
  import {db} from '../plugins/firebase';
  import firebase from "../plugins/firebase.js";
  import Form from './Form'

  export default {
    name: "Blog",
    components: {
      Form
    },
    data: () => ({
      blogs: [],
      displayForm: false,
      displayShow: false,
      currentBlog: null,
      authenticatedUser: false,
    }),
    firestore() {
      return {
        blogs: db.collection('blogs').orderBy('createdAt')

      }
    },
    methods: {
      deleteBlog(id) {
        if (!confirm('ブログを削除してよろしいですか？')) {
          return
        }
        db.collection('blogs').doc(id).delete()

      },

      updateBlog(id,item1, item2) {  
        const now = new Date()
        db.collection('blogs').doc(id).update({
            title: item1, 
            body: item2, 
            createdAt: now 
            })
        this.displayForm = false
        this.hideCreateForm()
      },
      clear() {
        this.$refs.form.reset()
      },
      showCreateForm(blog) {
        this.displayForm = true
        this.currentBlog=blog
      },
      showBlog(blog) {
        this.displayShow = true
        this.currentBlog=blog
      },
      hideCreateForm() {
        this.displayShow = false
        this.displayForm = false
        this.clear()
      },
    },
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

<style>
.blog_visual{
    margin-top: 80px;
}
.show{
  margin-top: 5px;
}
.row{

}
</style>