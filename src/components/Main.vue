<template>
  <div class="hello">
    <h1>Personal CRM</h1>
    <h3>Hi</h3>
    <AddContact />
  </div>
</template>

<script>
import AddContact from "./AddContact";
export default {
  name: "Main",
  props: {
    msg: String
  },
  components: {
    AddContact
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
