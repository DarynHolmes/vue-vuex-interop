
<template>
  <div>
    <input type="text" @keyup.enter="createTodo()" v-model="desc">
    <!-- <button>Add</button> -->
  </div> 
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      desc: '',
    };
  },
  methods: Object.assign({},
    mapActions(['addTodo']),
    {
      createTodo() {
        this.addTodo({ description: this.desc, done: false });
        this.desc = '';
      },
    }),
};
</script>

<style scoped>
input[type=text],
input[type=password] {
    box-sizing : border-box;
}

div {
   /* background-color: gray;  */
  /* width: 100%; */
  
  /* height: 60px; */

}
input {
  width: 100%; 

  margin-bottom: 20px;
  font-size: 16px;
  padding: 5px 10px;
}
</style>

