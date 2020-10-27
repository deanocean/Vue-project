<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container main-contant py-5">
      <h1 class="h2 text-center mb-3 text-white">購物車頁面</h1>

      <UserCartFlow :currentPage="currentPage" />

      <div class="mt-5 row justify-content-center">
        <div class="col-md-8">
          <h2 class="h4 payment-title mb-3 text-white">
            <span class="icon">
              <!-- <i class="far fa-file-alt"></i> -->
            </span> 購買資訊
          </h2>
          <table class="table table-light table-striped shadow-lg">
            <thead class="bg-info text-white">
              <tr>
                <th colspan="2" class="pl-4 pr-2 border-0">商品資訊</th>
                <th width="150" class="text-center border-0">數量</th>
                <th width="100" class="border-0">金額</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td width="80" class="align-middle pl-4 pr-2">
                  <div class="cart-img mt-1" :style="'background-image: url('+item.product.imageUrl+');'"></div>
                </td>
                <td class="align-middle px-2">
                  <div class="cart-title d-flex justify-content-between align-items-center">
                    <div class="h6 mb-0">{{item.product.title}}</div>
                    <small v-if="item.coupon" class="text-warning d-block">已套用優惠券</small>
                  </div>
                </td>
                <td class="align-middle px-2 text-center">
                  <div class="cart-unit text-dark">x {{item.qty}}</div>
                </td>
                <td class="align-middle text-right text-dark pr-4">
                  <div class>{{item.final_total | currency}}</div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-end align-items-baseline px-2 pt-2 text-white">
            <span class="pr-3">總計</span>
            <span class="h4">{{order.total | currency }}</span>
          </div>
        </div>

        <div class="col-md-8">
          <hr class="my-5" style="border-color: #fff;" />
          <h2 class="h4 payment-title mb-3 text-white">
            <span class="icon">
              <!-- <i class="far fa-paper-plane"></i> -->
            </span> 個人資訊
          </h2>
          <table class="table table-light table-striped shadow">
            <thead>
              <tr class="bg-info text-white">
                <th colspan="2" class="pl-4 pr-2 border-0">訂單資料</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-dark pl-4">姓名</td>
                <td>{{order.user.user}}</td>
              </tr>
              <tr>
                <td class="text-dark pl-4">電話</td>
                <td>{{order.user.tel}}</td>
              </tr>
              <tr>
                <td class="text-dark pl-4">Email</td>
                <td>{{order.user.email}}</td>
              </tr>
              <tr>
                <td class="text-dark pl-4">地址</td>
                <td>{{order.user.address}}</td>
              </tr>
              <tr>
                <td class="text-dark pl-4">付款狀態</td>
                <td>
                  <span v-if="!order.is_paid" class="text-danger font-weight-bold">尚未付款</span>
                  <span v-else class="text-success font-weight-bold">已付款</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-center">
            <button class="mt-5 btn btn-block btn-accent text-white" @click.prevent="payOrder">確認付款</button>
          </div>
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
      currentPage: 2,
      orderId: '',
      order: {
        user: {},
      },
    };
  },
  components: {
    UserCartFlow,
  },
  methods: {
    getOrder () {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
          // console.log(response.data)
          vm.order = response.data.order;
          vm.isLoading = false;
      })
    },
    payOrder () {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.post(api).then((response) => {
          // console.log(response.data)
          vm.isLoading = false;
          if(response.data.success){
            vm.$bus.$emit('cartRefresh'); // 使navbar的購物車更新
            vm.$router.push(`/purchaseCompleted`);
          }
      })
    }
  },
  created(){
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  }
};
</script>

<style lang="scss" scoped>
.cart-img {
  height: 50px;
  width: 50px;
  background-position: 50%;
  background-size: cover;
  display: inline-block;
}
</style>