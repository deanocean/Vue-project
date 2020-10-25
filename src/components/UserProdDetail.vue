<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="container main-contant mb-1">
            <nav aria-label="breadcrumb" role="navigation">
            <ol class="breadcrumb bg-transparent pl-0 mt-2">
                <li class="breadcrumb-item">
                    <router-link to="/" class="text-white">首頁</router-link>
                </li>
                <!-- <li class="breadcrumb-item">
                    <router-link to="/" class="text-white">{{product.category}}</router-link>
                </li> -->
                <li class="breadcrumb-item active text-subLight" aria-current="page">{{product.title}}</li>
            </ol>
            </nav>
            <div class="row">
                <div class="col-md-8">
                    <img :src="product.imageUrl" class="w-100" alt="">
                </div>
                <div class="col-md-4 mb-5">
                    <div class="sticky-top" style="top: 10px;">
                        <h1 class="h2 text-white">{{product.title}}</h1>
                        <span class="tag bg-sub mt-4">{{product.category}}</span>
                        <p class="card-text text-white mt-3">
                            <span class="d-block h6">- 產品詳細 -</span>
                            {{product.content}}
                        </p>
                        <div class="d-flex my-3 align-items-end justify-content-start">
                            <div class="h4 mb-0 mr-3 text-accent">
                                {{product.price | currency }}
                            </div>
                            <del class="text-white">{{product.origin_price | currency}}</del>
                        </div>
                        <select name="" class="form-control mr-1" id="" v-model="product.num">
                            <option v-for="num in 10" :value="num" :key="num">選購 {{num}} 隻</option>
                        </select>
                        <div class="h4 mt-3 text-accent text-right">
                            <span class="h6">總計 </span><strong>{{(product.price * product.num) | currency}}</strong>
                        </div>
                        <hr class="border-white my-4">
                        <div class="d-flex justify-content-between">
                            <router-link to="/">
                                <button class="btn btn-outline-subLight">
                                <i class="fas fa-caret-left"></i> 回到商品區
                                </button>
                            </router-link>
                            <button href="shoppingCart-checkout.html" class="btn btn-accent"
                                @click="addtoCart(product.id, product.num)">
                            <i class="fa fa-cart-plus" aria-hidden="true"></i> 加入購物車
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            product: {},
            isLoading: false,
            cart: {},
            prodId: '',
        }
    },
    methods: {
        getProduct(){
            const vm = this;
            console.log(vm.prodId)
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${vm.prodId}`;
            console.log(url)
            vm.isLoading = true;
            this.$http.get(url).then((response) => {
                // console.log(response);
                vm.product = response.data.product;
                vm.$set(vm.product, 'num', 1)
                vm.isLoading = false;
            });
        }, 
        addtoCart (id, qty = 1) {
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            const vm = this;
            const cart = {
                product_id: id,
                qty
            }
            this.$http.post(api, { data: cart }).then((response) => {
                // console.log(response.data)
                vm.$bus.$emit('cartRefresh');
                vm.$bus.$emit('message:push', response.data.message, 'success');
            })
        },
    },
    created(){
        this.prodId = this.$route.params.prodId;
        this.getProduct();
    },
}
</script>

<style scoped>
.card {
  background-color: rgba(255, 255, 255, 0.7) !important;
}
.tag {
  background-color: #ecbf42;
  border-radius: 2px;
  color: #fff;
  padding: 2px 4px;
  font-size: 12px;
}
.card-footer {
  background: none !important;
}
</style>