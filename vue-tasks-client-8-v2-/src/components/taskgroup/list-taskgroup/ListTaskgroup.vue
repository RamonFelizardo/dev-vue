// src/components/taskgroup/list-taskgroup/ListTaskgroup.vue
<template>
  <div>
    <h1>List taskgroup- teste-Ramon</h1>
    <ul>
      <li v-for="taskgroup in taskgroups" :key="taskgroup.id">
        <router-link
          :to="{ name: 'showTaskgroup', params: { id: taskgroup.id } }"
        >{{ taskgroup.name }}</router-link>
        <router-link
          :to="{ name: 'deletarTaskgroup', params: { id: taskgroup.id } }"
        >Deletar</router-link>
      </li>
  
      <button @click="logout()">logout</button>
      <button @click="criar_tarefa()">criar tarefa</button>
      
    </ul>
  </div>
  
</template>

<script>
import { getTaskgroupsApi } from "./../../../services/api";

export default {
  data() {
    return {
      taskgroups: []
    };
  },
  mounted: function() {
    getTaskgroupsApi().then(response => {
      this.taskgroups = response.data.data;
    });
  },
  methods:{
    logout(){
      localStorage.removeItem('token')
      this.$router.push({name: 'login'})
    },
    criar_tarefa(){
      this.$router.push({name: 'criar_tarefa'})
    }
  }
};
</script>
