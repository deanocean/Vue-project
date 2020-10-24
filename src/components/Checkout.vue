<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container main-contant py-5">
      <h1 class="h2 text-center mb-3 text-white">購物車頁面</h1>

      <UserCartFlow :currentPage="currentPage" />

      <div class="row mt-5">
        <div class="col-lg-4 col-md-5 order-md-1 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="check-title text-white">購物清單</span>
            <span class="badge badge-pill text-accent" style="font-size: 0.95rem;" v-if="cart.carts">共 {{cart.carts.length}} 項</span>
          </h4>
          <ul class="list-group mb-3 checkout-cart">
            <li class="glass align-items-center list-group-item d-flex pl-2 mb-3" v-for="item in cart.carts">
              <div class="text-center">
                <button
                  class="btn-del btn text-white"
                  href="#removeModal"
                  data-toggle="modal"
                  :data-title="`刪除 ${item.product.title} ${item.qty} 件`"
                  @click="emitRemoveCart(item.id, item.product.title)"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
              <div>
                <div
                  class="cart-img mt-2 mx-1"
                  :style="'background-image: url('+item.product.imageUrl+');'"
                ></div>
              </div>
              <div class="ml-2 mr-4 d-flex justify-content-between align-items-center flex-grow-1">
                <div class="cart-title">
                  {{item.product.title}}
                  <small v-if="item.coupon" class="text-warning d-block">已套用優惠券</small>
                </div>
                <div class="cart-unit">x {{item.qty}}</div>
              </div>
              <div class="text-right text-white ml-auto pl-1">${{item.final_total}}</div>
            </li>

            <li class="glass glass-white list-group-item list-item-total d-flex justify-content-between text-info mb-3">
              <span>總額</span>
              <strong class="h5 mb-0">$ {{cart.total}}</strong>
            </li>
            <li v-if="cart.final_total !== cart.total" class="list-group-item list-item-total d-flex justify-content-between text-accent">
              <span>折扣價</span>
              <strong class="h5 mb-0">$ {{cart.final_total}}</strong>
            </li>
            <!---->
          </ul>
          <form class="glass glass-white card p-2">
            <div class="input-group">
              <input type="text" placeholder="請輸入優惠碼" v-model="coupon_code" class="form-control" />
              <div class="input-group-append">
                <button
                  type="submit"
                  class="btn btn-sub text-white"
                  @click="addCouponCode"
                >套 用</button>
              </div>
            </div>
          </form>
          <div class="text-subLight mt-1 mb-0" v-if="coupon_message !== ''">※ {{coupon_message}}</div>
          <div class="coupon-code"><i>Code: </i>aqua123</div>
        </div>
        <div class="col-lg-8 col-md-7 order-md-2 orderInfo">
          <h4 class="mb-3 check-title text-white">訂單資訊</h4>
          <ValidationObserver v-slot="{ handleSubmit }">
          <form class="checkout-form text-white" @submit.prevent="handleSubmit(createOrder)">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="name">姓名</label>
                <validation-provider rules="required" v-slot="{ errors }">
                  <input
                    v-model="form.user.user"
                    :class="{ 'is-invalid': errors[0] }"
                    type="text"
                    name="name" 
                    id="name"
                    placeholder
                    value
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                  <small class="text-subLight" v-if="errors[0]">{{ errors[0] }}</small>
                </validation-provider>
              </div>
              <div class="col-md-6 mb-3">
                <label for="phone">電話</label>
                <validation-provider rules="required" v-slot="{ errors }">
                  <input
                    v-model="form.user.tel"
                    :class="{ 'is-invalid': errors[0] }"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder
                    value
                    class="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                  <small class="text-subLight" v-if="errors[0]">{{ errors[0] }}</small>
                </validation-provider>
              </div>
            </div>
            <div class="mb-3">
              <label for="email">郵箱</label>
              <ValidationProvider rules="required|email" v-slot="{ errors }">
                <input
                  v-model="form.user.email"
                  :class="{ 'is-invalid': errors[0] }"
                  type="email"
                  name="email" 
                  id="email"
                  placeholder
                  class="form-control"
                  aria-required="true"
                  aria-invalid="false"
                />
                <small class="text-subLight" v-if="errors[0]">{{ errors[0] }}</small>
              </ValidationProvider>
            </div>
            <div class="mb-3">
              <label for="address">收件地址</label>
              <validation-provider rules="required" v-slot="{ errors }">
                <input
                  v-model="form.user.address"
                  :class="{ 'is-invalid': errors[0] }"
                  type="text"
                  name="address"
                  id="address"
                  placeholder
                  class="form-control"
                  aria-required="true"
                  aria-invalid="false"
                />
                <small class="text-subLight" v-if="errors[0]">{{ errors[0] }}</small>
              </validation-provider>
            </div>
            <div>
              <label for="memo">
                備註
                <small class="text-subLight">（選填）</small>
              </label>
              <textarea v-model="form.message" rows="5" name="memo" id="memo" placeholder class="form-control"></textarea>
            </div>
            <button type="submit" class="mt-5 btn btn-long btn-block btn-accent">
              下一步
              <i class="fas fa-caret-right"></i>
            </button>
          </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserCartFlow from "./UserCartFlow";

export default {
  data() {
    return {
      cart: {},
      isLoading: false,
      coupon_code: "",
      coupon_message: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      currentPage: 1,
    };
  },
  components: {
    UserCartFlow,
  },
  methods: {
    emitRemoveCart(id, title) {
      const vm = this;
      vm.$bus.$emit("removeCart", id, title);
    },
    getCart() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        // console.log(response.data)
        vm.cart = response.data.data;
        vm.isLoading = false;
      });
    },
    addCouponCode() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      const vm = this;
      const coupon = {
        code: vm.coupon_code,
      };
      vm.isLoading = true;
      this.$http.post(api, { data: coupon }).then((response) => {
        console.log(response.data);
        if(response.data.success){
          vm.getCart();
          vm.coupon_message = '';
        } else {
          vm.coupon_message = response.data.message;
        }
        vm.isLoading = false;
      });
    },
    createOrder () {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
      const vm = this;
      vm.isLoading = true;
      const order = vm.form;
      
      this.$http.post(api, { data: order }).then((response) => {
        console.log(response.data);
        vm.isLoading = false;
        vm.$router.push(`/purchase/${response.data.orderId}`)
      });
         
    }
  },
  created() {
    const vm = this;
    vm.getCart();
    vm.$bus.$on('getCartInfo', (data) => {
      vm.cart = data;
    });
  },
};
</script>

<style lang="scss" scoped>
.list-group-item {
  border-radius: 4px;
  // margin-bottom: 10px;
}
.checkout-cart .cart-img {
  height: 42px;
  width: 42px;
}
.cart-img {
  background-position: 50%;
  background-size: cover;
  display: inline-block;
  height: 35px;
  width: 35px;
}
.orderInfo {
  input, textarea {
    background-color: rgba(255, 255, 255, 0.85);
  }
}
.coupon-code {
  margin-left: auto;
  width: 120px;
  text-align: center;
  font-size: 16px;
  letter-spacing: .2em;
  font-weight: bold;
  color: #85d2ff;
  text-shadow: 0 0 6px rgba(200, 200, 255,.8);
  border-radius: 8px;
  margin-top: 16px;
  padding: 8px 15px;
  background-color: rgba(0, 0, 0, 0.15);
  box-shadow: 0 12px 10px -10px inset rgba(0, 0, 0, 0.2);
  i {
    font-size: 14px;
    font-weight: normal;
  }
}
</style>