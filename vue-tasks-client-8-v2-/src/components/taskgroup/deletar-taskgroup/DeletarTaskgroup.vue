<template>
  
</template>
 
<script>
import {  deletarTaskgroupApi } from "./../../../services/api";
export default {
  props: ["id"],
  mounted: function() {
     deletarTaskgroupApi(this.id).then(response => {
      this.$router.push({name: "listTaskgroup"});
    });
  }
};
</script>