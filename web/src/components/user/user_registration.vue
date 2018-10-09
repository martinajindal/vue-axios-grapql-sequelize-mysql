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
      <input type="email" v-model="user.email" class="form-control" placeholder="Email address" required autofocus>
      <br>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="user.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>

      <button class="material-button-raised" @click="register">Register</button>
      <!-- <button class="material-button-raised"  @click="register">Register</button> -->
      Have an account? <router-link to="/login" activeClass="active"><a>Sign In</a></router-link>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      },
      users: [],
      errors: {
        email: false,
        password: false
      }
    };
  }
  // methods: {
  //   register() {
  //     alert("1");
  //     let uri = "http://127.0.0.1:9000/register";
  //     this.axios.post(uri, this.user).then(response => {
  //       alert("2");
  //       console.log(response.data);
  //       alert("Succefully registered!!");
  //     });
  //   }

    // register() {
    //   alert("response");
    //   this.$http
    //     .post("https://myvuejshttp.firebaseio.com/data.json", this.user)
    //     .then(
    //       response => {
    //         alert("Succefully registered!!");
    //         console.log(response);
    //          this.$router.replace({ name: "home" });
    //       },
    //       error => {
    //         console.log(error);
    //       }
    //     );
    // },
  // }
};
</script>

