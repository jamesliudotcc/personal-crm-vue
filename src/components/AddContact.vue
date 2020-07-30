<template>
  <div>
    Name
    <input type="text" v-model="name" />
    Email
    <input type="text" v-model="email" />
    <button v-on:click="add">Add</button>
  </div>
</template>
<script>
export default {
  name: "AddContact",
  data: function() {
    return {
      name: "",
      email: ""
    };
  },
  methods: {
    add() {
      this.$store.commit("addContact", { name: this.name, email: this.email });
    }
  }
};
</script>
