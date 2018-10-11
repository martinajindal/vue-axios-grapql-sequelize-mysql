<template>
  <div class="container-fluid">
    <ordercard v-for="currentOrder in Orders" v-bind:key="currentOrder.id" :item="currentOrder" :order=currentOrder></ordercard>
  </div>
</template>

<script>
import ordercardVue from "./ordercard.vue";
import ApiService from "../../common/api.service";
import { API_URL } from "../../common/config";
import queryBuilder from "gql-query-builder";

export default {
  name: "tas",
  prop: ["ordercard"],
  components: { ordercard: ordercardVue },
  mounted() {
    this.getOrders();
  },
  data() {
    return {
      Orders: []
    };
  },
  methods: {
    getOrders() {
      return new Promise(resolve => {
        ApiService.setHeader()
        ApiService.get(
          API_URL,
          queryBuilder({
            type: "query",
            operation: "getAllOrders"
          })
        )
          .then(response => {
            let error = "";
            if (response.data.errors && response.data.errors.length > 0) {
              error = response.data.errors[0].message;
            } else {
              this.Orders = response.data.data.getAllOrders;
              resolve();
            }
          })
          .catch(error => {

          });
      }).then(response => {
        this.Orders = response.data;
      });
    }
  }
};
</script>
