
<template>
  <div>
    <input type="text" @keyup.enter="createTodo()" v-model="desc">
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
  margin-left: 10px;
}
input {
  width: 100%;  
  margin-bottom: 20px;
  font-size: 16px;
  padding: 5px 10px;
}
</style>

