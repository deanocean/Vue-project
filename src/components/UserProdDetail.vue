<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="container main-contant mb-1">
            <nav aria-label="breadcrumb" role="navigation">
            <ol class="breadcrumb bg-transparent pl-0">
                <li class="breadcrumb-item">
                <a href="#">首頁</a>
                </li>
                <li class="breadcrumb-item">
                <a href="#">{{product.category}}</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">{{product.title}}</li>
            </ol>
            </nav>
            <div class="row">
                <div class="col-md-8">
                    <img :src="product.imageUrl" class="w-100" alt="">
                    <p class="card-text text-white mt-4">{{product.content}}</p>
                </div>
                <div class="col-md-4 mb-5">
                    <div class="sticky-top" style="top: 10px;">
                        <h1 class="h2">{{product.title}}</h1>
                        <div class="d-flex my-3 align-items-end justify-content-end">
                            <del class="text-muted">{{product.origin_price}}</del>
                            <div class="h3 mb-0 ml-auto text-danger">
                            <small>優惠價 $</small>
                            <strong>{{product.price}}</strong>
                            </div>
                        </div>
                        <hr>
                        <div class="input-group mt-3">
                            <select name="" class="form-control mr-1" id="" v-model="product.num">
                                <option v-for="num in 10" :value="num" :key="num">選購 {{num}} 隻</option>
                            </select>
                            <button href="shoppingCart-checkout.html" class="btn btn-primary"
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
import UserNavbar from './UserNavbar';
import UserFooter from './UserFooter';

export default {
    data() {
        return {
            product: {},
            pagination: {},
            isLoading: false,
            cart: {},
            prodId: '',
        }
    },
    components: {
        UserNavbar,
        UserFooter,
    },
    methods: {
        getProduct(){
            const vm = this;
            console.log(vm.prodId)
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${vm.prodId}`;
            console.log(url)
            vm.isLoading = true;
            this.$http.get(url).then((response) => {
                vm.product = response.data.product;
                vm.$set(vm.product, 'num', 1)
                console.log(response);
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
                // $('#productModal').modal('hide');
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