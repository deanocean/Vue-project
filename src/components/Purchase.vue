<template>
  <div>
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
          <table class="table table table-light table-striped shadow-sm">
            <thead class="bg-primary text-white">
              <tr>
                <th colspan="2" class="px-2">商品資訊</th>
                <th>數量</th>
                <th class="px-2 text-right">金額</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td width="80" class="align-middle px-2">
                  <div class="cart-img mt-1" :style="'background-image: url('+item.product.imageUrl+');'"></div>
                </td>
                <td class="align-middle px-2">
                  <div class="cart-title">
                    <div class="h6">{{item.product.title}}</div>
                    <small v-if="item.coupon" class="text-warning d-block">已套用優惠券</small>
                  </div>
                  <!---->
                </td>
                <td class="align-middle px-2">
                  <div class="cart-unit text-dark">x {{item.qty}}</div>
                </td>
                <td class="align-middle text-right text-dark px-2">
                  <div class>{{item.final_total | currency}}</div>
                  <!---->
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-end align-items-baseline px-2 pt-2">
            <span class="pr-3">總計</span>
            <span class="h4 text-white">{{order.total | currency }}</span>
          </div>
        </div>

        <div class="col-md-8">
          <hr class="my-5" style="border-color: #fff;" />
          <h2 class="h4 payment-title mb-3 text-white">
            <span class="icon">
              <!-- <i class="far fa-paper-plane"></i> -->
            </span> 個人資訊
          </h2>
          <table class="table table-striped shadow-sm">
            <thead>
              <tr class="bg-primary text-white">
                <th colspan="2" class="py-1">訂單資料</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-dark">姓名</td>
                <td>{{order.user.user}}</td>
              </tr>
              <tr>
                <td class="text-dark">電話</td>
                <td>{{order.user.tel}}</td>
              </tr>
              <tr>
                <td class="text-dark">Email</td>
                <td>{{order.user.email}}</td>
              </tr>
              <tr>
                <td class="text-dark">地址</td>
                <td>{{order.user.address}}</td>
              </tr>
              <tr>
                <td class="text-dark">付款狀態</td>
                <td>
                  <span v-if="!order.is_paid" class="text-danger font-weight-bold">尚未付款</span>
                  <span v-else class="text-success font-weight-bold">已付款</span>
                </td>
              </tr>
            </tbody>
          </table>
          <button class="float-right mb-4 btn btn-danger text-white" @click.prevent="payOrder">確認付款</button>
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
          if(response.data.success){
            vm.$router.push(`/purchaseCompleted`)
          }
          vm.isLoading = false;
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