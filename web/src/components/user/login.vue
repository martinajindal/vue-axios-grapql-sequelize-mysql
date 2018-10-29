<template>
  <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="">
      <h4 class="form-signin-heading">Welcome to SAI Global Property</h4>
      <br>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" v-model="user.email" @blur="validateEmail" class="form-control" placeholder="Email address" required autofocus>
      <br>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="user.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <div class="textError"><p v-if="inValidCredential">Please provide a valid credential.</p></div>

      <button class="material-button-raised" @click="processForm">Sign in</button>
      Not a customer? <router-link to="/registration" activeClass="active"><a>Register</a></router-link>
    </form>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import queryBuilder from 'gql-query-builder';
import { LOGIN } from '../../store/actions.type';
import { EventBus } from '../event-bus';

export default {
  name: 'Login',
  data () {
    return {
      inValidCredential: false,
      user: {
        email: "",
        password: ""
      },
      users: [],
      errors: {
        email: false,
        password: false
      }
    }
  },
  mounted() {
 EventBus.$on(
      "login-error",
      function() {
        this.inValidCredential = true;
        this.$router.push({ name: "login" });
      }.bind(this)
    );
  },
  methods: {
    processForm: function() {
      if (this.user.email != "" && this.user.password != "") {
        this.$store
          .dispatch(LOGIN, this.user)
          .then(() => {
            this.inInValidCredential = false;
            EventBus.$emit('prompt-login')
            this.$router.push({ name: "home" }); 
            })
          .catch(error => {
            this.inInValidCredential = true;
          });
      }
    },
    
    validateEmail: function() {
      const isValid = this.isValidEmail(this.user.email);
      this.errors.email = !isValid;
    },
    isValidEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>

<style lang="css">
body {
  background: #ffffff;
}
.textError {
    color: #b60023;
}

.login-wrapper {
  background: #e2e2e2;
  width: 30%;
  margin: 0% auto;
}

.form-signin {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.material-button-raised {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  margin: 0 8px;
  border: none;
  border-radius: 2px;
  padding: 0 16px;
  min-width: 64px;
  height: 36px;
  vertical-align: middle;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  color: #fff;
  background-color: #cc0000;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  font-family: "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui,
    -apple-system;
  font-size: 14px;
  font-weight: 500;
  line-height: 36px;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.2s;
}

.material-button-raised:hover,
.material-button-raised:focus {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

.material-button-raised:active {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}

.material-button-raised:disabled {
  color: rgba(0, 0, 0, 0.38);
  background-color: rgba(0, 0, 0, 0.12);
  box-shadow: none;
  cursor: initial;
}

.material-button-raised::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: currentColor;
  opacity: 0;
  transition: opacity 0.2s;
}

.material-button-raised:hover::before {
  opacity: 0.12;
}

.material-button-raised:focus::before {
  opacity: 0.2;
}

.material-button-raised:active::before {
  opacity: 0.32;
}

.material-button-raised:disabled::before {
  opacity: 0;
}

.material-button-raised::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 18px;
  border-radius: 50%;
  padding: 50%;
  width: 32px;
  height: 32px;
  background-color: #cc0000;
  opacity: 0;
  transform: translate(-50%, -50%) scale(1);
  transition: opacity 1s, transform 0.5s;
}

.material-button-raised:active::after {
  opacity: 0.4;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0s;
}

.material-button-raised:disabled::after {
  opacity: 0;
}
</style>