<template>
  <div>
    <!-- <h1>後台</h1> -->
    <!-- <a href="#" @click.prevent="signout">登出</a> -->
    <nav class="navbar navbar-dark fixed-top bg-black flex-md-nowrap p-0 shadow">
      <router-link to="/" class="px-3 align-self-stretch bg-info d-flex align-items-center" href="#"><i class="fa fa-home text-white"></i></router-link>
      <router-link to="/admin/products" class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Admin Page</router-link>
      <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent="signout">Sign out</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navabr',
  methods: {
    signout() {
      const vm = this;
      const url = `${process.env.APIPATH}/logout`;
      this.$http.post(url).then((response) => {
        // console.log(response.data);
        if(response.data.success){
          vm.$router.push('/signin');
        }
      })
    }
  }
}
</script>