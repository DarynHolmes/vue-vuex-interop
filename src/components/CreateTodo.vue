
<template>
  <div>
    <input type="text" @keyup.enter="print()" v-model="desc">
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
      print() {
        this.addTodo({ description: this.desc });
        this.desc = '';
      },
    }),
};
</script>
