<template>
  <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="">
      <h4 class="form-signin-heading">Register to SAI Global Property</h4>
      <br>
      <input v-model="user.firstname" type="text" class="form-control" placeholder="First name">
      <br>
      <input v-model="user.lastname" type="text" class="form-control" placeholder="Last name">
      <br>
      <label for="email" class="sr-only">Email address</label>
      <input v-validate="'required|email'" 
             type="email" 
             name="email" 
             v-model="user.email" 
             class="form-control" 
             placeholder="Email address" 
             autofocus>
      <br>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="user.password" 
             type="password" 
             id="inputPassword" 
             name="password" 
             class="form-control" 
             placeholder="Password" 
             required>
      <input v-validate="'required|confirmed:password'" 
             name="password_confirmation" 
             type="password" 
             class="form-control" 
             placeholder="Confirm Password">
            <div class="textError text-nowrap"><p v-if="userAlreadyRegistered">Email "{{user.email}}" is already registered.</p></div>

      <button class="material-button-raised" @click="userRegistration">Register</button>
      <!-- <button class="material-button-raised"  @click="register">Register</button> -->
      Have an account? <router-link to="/login" activeClass="active"><a>Sign In</a></router-link>
    </form>
  </div>
</template>

<script>
import { REGISTER } from "../../store/actions.type";
import { EventBus } from '../event-bus';
export default {
  data() {
    return {
      userAlreadyRegistered: false,
      user: {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      },
      // users: [],
      errors: {
        email: false,
        password: false
      }
    };
  },
    mounted() {
 EventBus.$on(
      "already_registered",
      function() {
        this.userAlreadyRegistered = true;
        this.$router.push({ name: "registration" });
      }.bind(this)
    );
  },
  methods: {
    userRegistration: function() {
      if (this.user.email != "" && this.user.password != "") {
        this.$store
          .dispatch(REGISTER, this.user)
          .then(() => this.$router.push({ name: "login" }));
      }
    }
  }
};
</script>

