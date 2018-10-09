<template>
    <div>
        <form @submit.prevent="">
            <div class="container">
                <div class="col-md-8 col-md-offset-1">
                    <h4>Order WAS Title Search</h4>
                    <hr><br>
                    <div class="row">   `
                        <div class="col-md-4 form-group">
                            <input
                                type="text" placeholder="Matter Reference"
                                name="matterRef" v-model="order.matterRef"
                                class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-10 form-group">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 form-group">
                            <input class="form-control" 
                            name="titleRef" v-model="order.titleRef" 
                            value="" placeholder="Title Reference">     
                        </div>
                        <div class="col-md-2 form-group">
                            <br>
                            <a class="linkanc vmid" v-on:click.prevent="verifyTitleRef" href="">
                                Verify Title Reference</a>
                        </div>
                        <div class="col-md-6 col-md-offset-0">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h5>Data provided by NSW LRS for  {{ order.titleRef }}</h5>
                                </div>
                                <div class="panel-body">
                                    <p>Title Reference: {{ order.titleRef }}</p>
                                    <br>
                                    <p style="white-space: pre">Property Address: {{ order.address }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
  
                    <div class="row">
                        <div class="col-md-4 form-group">
                            <input class="form-control form-group" 
                            name="address" v-model="order.address" 
                            value="" placeholder="Address Search">     
                        </div>
                        <div class="col-md-2 form-group">
                            <br>
                            <a class="linkanc vmid" v-on:click.prevent="verifyAddress" href="">Verify Address</a>
                        </div>
                        <div class="col-md-6 col-md-offset-0">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h5>Data provided by NSW LRS for  {{ order.address }}</h5>
                                </div>
                                <div class="panel-body">
                                    <p>Title Reference: {{ order.titleRef }}</p>
                                    <br>
                                    <p style="white-space: pre">Property Address: {{ order.address }}</p>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div class="row">
                        <div class="col-md-10 form-group">
                            <hr>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 form-group">
                        </div>                        
                        <div class="col-md-4 form-group">
                            <button class="material-button-raised"  @click="createOrder">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
  </form>
            <!-- <div class="container">     
                <div class="col-md-6 col-md-offset-1">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4>Your Information</h4>
                        </div>
                        <div class="panel-body">
                            <p>Matter Reference: {{ order.matterRef }} </p>
                            <p>Title Reference: {{ order.titleRef }}</p>
                            <p style="white-space: pre">Property Address: {{ order.address }}</p>
                        </div>
                    </div>
                </div>
                <div class="column col-md-1 col-sm-2">
                </div>
            </div>         -->
    </div>
</template>
<script>
import axios from 'axios';
import queryBuilder from 'gql-query-builder';
import { VERIFY_TITLE_REF } from '../../store/actions.type';

export default {
  data() {
    return {
      order: {
        matterRef: "",
        titleRef: "",
        address: ""
      }
    };
  },
  methods: {    
    verifyTitleRef: function() {
      if (this.order.titleRef != "") {
          alert("verifytitleref");
        this.$store
          .dispatch(VERIFY_TITLE_REF, this.order.titleRef)
          .then(() => this.$router.push({ name: 'nsw' }))
      }
    },

    verifyAddress: function() {
      if (this.order.address != "") {
          alert("verifyAddress");
        this.$store
          .dispatch(LOGIN, this.order)
          .then(() => this.$router.push({ name: 'nsw' }))
      }
    },

    createOrder: function() {
      if (this.order.titleRef != "") {
          alert("createOrder");
        this.$store
          .dispatch(LOGIN, this.order)
          .then(() => this.$router.push({ name: 'nsw' }))
      }
    }
  }
};
</script>

