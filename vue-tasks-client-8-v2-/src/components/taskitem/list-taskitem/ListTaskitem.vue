<template>
  <div>
    <label>{{ taskitemsOverview }}</label>
    <br />

    <ul>
      <li v-for="taskitem in formattedTaskitems" :key="taskitem.id">
        <div>
          <label>checked:</label>
          <input
            type="checkbox"
            v-model="taskitem.checked"
            @click="updateTaskitem(taskitem)"
          />
        </div>

        <label>name:{{ taskitem.name }}</label>
        <br />

        <label>description:{{ taskitem.description }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
import { updateTaskitemApi } from "./../../../services/api";
import { mapState, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["setTaskitem"]),
    formatTaskitem(taskitem) {
      return {
        id: taskitem.id,
        checked: taskitem.checked,
        name: taskitem.task.name,
        description: taskitem.task.description
      };
    },
    isTaskitemChecked({ checked }) {
      return checked;
    },
    updateTaskitem(taskitem) {
      const mutableTaskitem = {
        id: taskitem.id,
        checked: !taskitem.checked
      };
      updateTaskitemApi(mutableTaskitem).then(result =>
        this.setTaskitem(mutableTaskitem)
      );
    }
  },
  computed: {
    ...mapState(["taskitems"]),
    formattedTaskitems: function() {
      const { taskitems, formatTaskitem } = this;

      if (!taskitems) {
        return [];
      }
      return taskitems.map(formatTaskitem);
    },
    taskitemsOverview: function() {
      const { formattedTaskitems, isTaskitemChecked } = this;

      const length = formattedTaskitems.length;
      const checkedLength = formattedTaskitems.filter(isTaskitemChecked).length;

      return `${checkedLength} of ${length} are checked`;
    }
  }
};
</script>
