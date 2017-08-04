
<template>
  <div>
    <input type="text" @keyup.enter="createTodo()" v-model="desc">
    <button @click="redo">Redo</button> 
    <button @click="undo">Undo</button> 
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
    mapActions(['addTodo', 'undo', 'redo']),
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
button {
  position: relative;
  height: 33px;
  top: -1px;
  float: right;
  /* margin-bottom: 10px; */
}

div {
  margin-left: 10px;
}
input {
   width: 70%;  
  
  margin-bottom: 20px;
  font-size: 16px;
  padding: 5px 10px;
}
</style>

