<template>
    <div>
        <app-header @message="setMessage"></app-header>
        <div class="row">
            <div class="col-sm-12">
                <router-view @authenticated="setAuthenticated"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  data() {
    return {
      authenticated: false,
      mockAccount: {
        email: "martinajindal@gmail.com",
        password: "password"
      }
    };
  },
  mounted() {
    if (!this.authenticated) {
      // this.$emit("message", "Hello World");
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      alert("App setAuthenticated called")
      this.$emit("message", "Hello World");

      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  },
  components: {
    appHeader: Header
  }
};
</script>

<style >
body {
  background-color: #f0f0f0;
}
h1 {
  padding: 0;
  margin-top: 0;
}
</style>

