<template>
  <div>
    <div class="bg">
      <form class="form-signin" @submit.prevent="signin">
        <div class="frame px-5 py-4 pb-5">
          <h1 class="h3 mt-2 mb-3 font-weight-normal text-white">Please sign in</h1>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="user.username" required autofocus>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" class="form-control" v-model="user.password" placeholder="Password" required>
          <div class="checkbox mb-3">
              <label class="text-white">
              <input type="checkbox" value="remember-me"> Remember me
              </label>
          </div>
          <button class="btn btn-lg btn-block submit text-white" type="submit">Sign in</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        user: {
            username: '',
            password: '',
        }
    }
  },
  methods: {
      signin(){
        const api = `${process.env.APIPATH}/admin/signin`;
        const vm = this;
        this.$http.post(api, vm.user).then((response) => {
        console.log(response.data)
        if(response.data.success){
            const token = response.data.token;
            const expired = response.data.expired;
            // console.log(token, expired)
            // document.cookie = `hexToken=${token}; expires=${ new Date(expired) };`;
            vm.$router.push('/admin/products');
        }
        })
      }
  }
}
</script>

<style lang="scss" scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  background: inherit; 
  width: 100%;
  max-width: 360px;
  margin: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
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
.bg {
  height: 100vh;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-attachment: fixed;
  background-image: url('https://images.unsplash.com/photo-1549074862-6173e20d02a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
}
.form-signin {
  background: inherit; 
  overflow: hidden;
  border-radius: 8px;
  .frame {
    position: relative;
    z-index: 1;
  }
  &::before {
    content: "";
    background: inherit; 
    position: absolute;
    left: -10%;
    right: -10%;
    top: -10%; 
    bottom: -10%;
    box-shadow: inset 0 0 0 3000px rgba(255,255,255,0.3);
    filter: blur(10px);
  }
}
.submit {
  background-image: linear-gradient(120deg, #4961e7 50%, #11238d);
  border: none;
  &:focus {
    box-shadow: none;
  }
}
</style>