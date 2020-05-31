
<template>
  <div>
    <h1>Criar Tarefa </h1>
    <div>
      <label for="name">Name:</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label for="description">Description:</label>
      <input type="text" v-model="description" />
    </div>
    <div>
      <label for="frequence_type">Frequence_type:</label>
      <input type="text" v-model="frequence_type" />
    </div>
        <button @click="criar(name,description,frequence_type)">Criar</button>
  </div>

</template>

<script>
import { criarTaskgroupApi } from "./../../../services/api";
export default {
  data() {
    return {
    name: "",
    descripton: "",
    frequence_type: ''
    };
  },
  methods: {
    criar(name,description,frequence_type) {
      criarTaskgroupApi(name,description,frequence_type).then(
        result => {
          this.$router.push({ name: "listTaskgroup" });
        },
        error => {
          console.error(error.response.data.error_message);
        }
      );
    }
  }
};
</script>
