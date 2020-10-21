<template>
  <div>
    <nav class="navbar navbar-dark bg-black">
      <div class="text-white"></div>
      <div class="container align-items-center">
        <router-link to="/" class="navbar-brand mr-4 d-inline-block">
          <img src="@/assets/images/logo.png" alt="" />
        </router-link>
        <router-link to="/" class="text-white h6 mb-0">首頁</router-link>
        <!-- 購物車內的數量 (Button 內包含 icon, 數量 badge) -->
        <div class="dropdown ml-auto">
          <button
            class="btn btn-sm btn-cart position-relative"
            data-toggle="dropdown"
            data-flip="false"
          >
            <i
              class="fa fa-shopping-cart text-white fa-lg"
              aria-hidden="true"
            ></i>
            <span class="badge badge-pill badge-danger position-absolute" v-if="cart.carts">{{cart.carts.length}}</span>
            <span class="sr-only">unread messages</span>
          </button>
          <div
            class="dropdown-menu dropdown-menu-right p-3"
            style="min-width: 300px; z-index: 1050;"
            data-offset="400"
          >
            <h6 class="font-weight-bold">已選擇商品</h6>
            <table class="table table-sm">
              <tbody>
                <tr class="py-5" v-for="item in cart.carts" :key="item.id">
                  <td class="align-middle text-center">
                    <button
                      href="#removeModal"
                      class="btn btn-outline-danger btn-sm"
                      data-toggle="modal"
                      :data-title="`刪除 ${item.product.title} ${item.qty} 件`"
                      @click="emitRemoveCart(item.id)"
                    >
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </td>
                  <td class="align-middle">{{item.product.title}}</td>
                  <td class="align-middle">{{item.qty}} 件</td>
                  <td class="align-middle text-right">${{item.final_total}}</td>
                </tr>
              </tbody>
            </table>
            <router-link
              to="/checkout"
              class="btn btn-primary btn-block"
            >
              <i class="fa fa-cart-plus" aria-hidden="true"></i> 結帳去
            </router-link>
          </div>
        </div>
        <router-link to="/admin/products" class="btn btn-sm btn-admin ml-2">
          <i class="fas fa-user text-white fa-lg" aria-hidden="true"></i>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: {},
    }
  },
  methods: {
    getCart () {
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
        const vm = this;
        vm.isLoading = true;
        this.$http.get(api).then((response) => {
            // console.log(response.data)
            vm.cart = response.data.data;
            vm.isLoading = false;
        })
    },
    emitRemoveCart (id) {
        const vm = this;
        vm.$bus.$emit('removeCart', id);
    }
  },
  created() {
    const vm = this;
    vm.getCart();
    vm.$bus.$on('cartRefresh', () => {
      vm.getCart();
    });
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 0.1rem 1rem;
}
.btn {
  .badge {
    right: -2px;
    top: -2px;
  }
}
.table-sm th, .table-sm td {
    padding: 0.5rem;
}
</style>