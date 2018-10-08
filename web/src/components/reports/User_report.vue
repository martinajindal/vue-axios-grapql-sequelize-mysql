<template>
  <div class="container">
    <!-- our signup form ===================== -->
    <div class="col-md-4 col-md-offset-1">
      <table class="table table-border">
        <thead>
          <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email Id</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(u, index) in users" :key="u.index">
            <td>{{ index + 1 }}</td>
            <td>{{ u.firstname }}</td>
            <td>{{ u.lastname }}</td>
            <td>{{ u.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
        firstname: ""
      },
      users: []
    };
  },
  methods: {
    fetchUserReport() {
      this.$http
        .get("https://myvuejshttp.firebaseio.com/data.json")
        .then(response => {
          return response.json();
        })
        .then(
          data => {
            const resultArray = [];
            for (let key in data) {
              resultArray.push(data[key]);
            }
            this.users = resultArray;
            console.log(this.users);
          },
          error => {
            console.log(error);
          }
        );
    },

    fetchData() {
      this.$http
        .get("https://myvuejshttp.firebaseio.com/data.json/{{this.user.email}}")
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;
        });
    }
  },
  mounted() {
    this.fetchUserReport();
  }
};
</script>
