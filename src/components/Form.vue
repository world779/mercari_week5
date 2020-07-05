<template>
  <div>
    <!--フォームの表示ボタン-->
    <v-btn
        color="blue"
        dark
        center
        fab
        fixed
        
        @click="showCreateForm"
    >
      <v-icon>New</v-icon>
    </v-btn>
    <v-dialog v-model="displayForm" max-width="500px">
      <v-card>
        <v-container>
          <h2>Add Blog</h2>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
                v-model="inputBlog"
                :rules="blogRules"
                label="title"
                required
            ></v-text-field>
            <v-text-field
                v-model="inputBody"
                :rules="blogRules"
                label="body"
                required
            ></v-text-field>
            <v-btn
                :disabled="!valid"
                @click="addBlog"
            >
              Post!
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import {db} from '../plugins/firebase';

  export default {
    name: 'CreateForm',
    data: () => ({
      // form入力データ
      inputBlog: "",
      inputBody: "",
      // バリデーション
      valid: true,
      blogRules: [
        v => !!v || 'タイトルは必須項目です',
      ],
      // Formダイアログの表示可否
      displayForm: false,
    }),
    methods: {
      addBlog() {
        const now = new Date()
        db.collection('blogs').add({
          title: this.inputBlog,
          body: this.inputBody,
          createdAt: now
        })
        this.hideCreateForm()
      },
      clear() {
        this.$refs.form.reset()
      },
      showCreateForm() {
        this.displayForm = true
      },
      hideCreateForm() {
        this.clear()
        this.displayForm = false
      },
    },
  }
</script>
