<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        
        <div class="jumbotron jumbotron-fluid jumbotron-bg d-flex align-items-center justify-content-center">
            <h1 class="display-3 font-weight-bold">hidden</h1>
            <img class="bannerImg" src="@/assets/images/banner.png" alt="" />
        </div>

        <div class="container main-contant mb-1">
            <div class="row">
                <div class="col-md-3">
                <!-- 左側選單 (List group) -->
                <div class="sticky-top leftMenu list-group" id="list-tab" role="tablist" style="top: 20px;">
                    <a @click.prevent="currentPos = 'all'" class="btn btn-lg text-white btn-block mb-3 rounded-pill active" data-toggle="list"
                    role="tab">全部商品</a>
                    <a @click.prevent="currentPos = 'tropical fish'" class="btn btn-lg text-white btn-block mb-3 rounded-pill" data-toggle="list"
                    role="tab">熱帶魚</a>
                    <a @click.prevent="currentPos = 'jellyfish'" class="btn btn-lg text-white btn-block mb-3 rounded-pill" data-toggle="list"
                    role="tab">水母</a>
                    <a @click.prevent="currentPos = 'goldfish'" class="btn btn-lg text-white btn-block mb-3 rounded-pill" data-toggle="list"
                    role="tab">金魚</a>
                </div>
                </div>
                <div class="col-md-9">
                <!-- 主要商品列表 (Card) -->
                <div class="tab-content">
                    <div class="tab-pane active" :id="currentPos">
                        <div class="row">
                            <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
                                <div class="card border-0 box-shadow text-center h-100 position-relative">
                                    <div
                                    style="
                                        height: 150px;
                                        background-size: cover;
                                        background-position: center;
                                    "
                                    :style="{backgroundImage: `url(${item.imageUrl})`}"
                                    ></div>
                                    <div class="card-body text-left pt-3 pb-0">
                                        <span class="tag bg-sub mb-2">{{item.category}}</span>
                                        <h5 class="card-title mb-2">{{item.title}}</h5>
                                        <p class="card-text text-truncate">{{item.content}}</p>
                                        <div class="d-flex justify-content-between align-items-baseline">
                                            <div class="h5" v-if="!item.price">{{item.origin_price}} </div>
                                            <del class="h6" v-if="item.price">$ {{item.origin_price}} </del>
                                            <div class="h5" v-if="item.price">$ {{item.price}} </div>
                                        </div>
                                    </div>
                                    <div class="card-footer border-top-0 d-flex justify-content-between pb-3">
                                        <a @click.prevent="productLink(item.id)" class="btn btn-outline-primary btn-sm flex-grow-1 mr-2">
                                            <i class="fa fa-file"></i> 查看更多
                                        </a>
                                        <button class="btn btn-accent btn-sm flex-grow-0" @click="addtoCart(item.id)">
                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i> 加到購物車
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>      
                    </div>  
                    <Pagination v-if="pagination !== {}" :pagination="pagination" v-on:pageChange="getProducts"></Pagination>
                </div>
                <!-- tab-content end -->
                </div>
            </div>
        </div>   
        
    </div>
</template>

<script>
import Pagination from '@/components/CompPagination';

export default {
    data() {
        return {
            currentPos: 'all',
            products: [],
            product: {},
            pagination: {},
            isLoading: false,
            cart: {},
        }
    },
    components: {
        Pagination,
    },
    watch: {
        currentPos(){
            this.getProducts();
        }
    },
    methods: {
        getProducts (page = 1) {
            const vm = this;
            vm.isLoading = true;
            let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;

            if(vm.currentPos !== 'all'){
                api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
            }
            this.$http.get(api).then((response) => {
                console.log(response.data.products)
                vm.isLoading = false;
                vm.products = response.data.products;
                vm.pagination = response.data.pagination;
                
                if(vm.currentPos !== 'all'){
                    vm.products = vm.products.filter( (item)=> {
                        return vm.currentPos === item.category;
                    })
                    vm.pagination = {};
                }
            })
        },
        productLink(id){
            this.$router.push(`/productdetail/${id}`);
        },
        addtoCart (id, qty = 1) {
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            const vm = this;
            const cart = {
                product_id: id,
                qty
            }
            vm.isLoading = true;
            this.$http.post(api, { data: cart }).then((response) => {
                // console.log(response.data)
                vm.$bus.$emit('cartRefresh');
                vm.$bus.$emit('message:push', response.data.message, 'success');
                vm.isLoading = false;
            })
        },
    },
    created(){
        this.getProducts()
    },
}
</script>

<style scoped>
nav {
  background-color: #000;
}
.jumbotron {
  background-image: url(../assets/images/topbg.png);
}
h1 {
  display: none;
}
.leftMenu .btn {
  border: 2px dashed #fff;
}
.leftMenu .btn.active {
  border: none;
  background: linear-gradient(135deg, #ecbf42, #d8a618) !important;
}
.card {
  background-color: rgba(255, 255, 255, 0.7) !important;
}
.card-footer {
  background: none !important;
}
.text-truncate {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    white-space: initial;
}
</style>