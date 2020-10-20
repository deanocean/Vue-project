<template>
  <div>
    <UserNavbar />
    <div
      class="jumbotron jumbotron-fluid jumbotron-bg d-flex align-items-center justify-content-center"
      :style="{ 'background-image' : style.topBg }"
    >
      <h1 class="display-3 font-weight-bold">hidden</h1>
      <img class="bannerImg" src="@/assets/images/banner.png" alt="" />
    </div>
    <div class="container main-contant mb-1">
      <div class="row">
        <div class="col-md-3">
          <!-- 左側選單 (List group) -->
          <div class="sticky-top leftMenu">
            <a
              class="btn btn-lg text-white btn-block mb-3 rounded-pill active"
              data-toggle="list"
              href="#list-gold"
              >熱帶魚</a
            >
            <a
              class="btn btn-lg text-white btn-block mb-3 rounded-pill"
              data-toggle="list"
              href="#list-gift"
              >水母</a
            >
            <a
              href="#"
              class="btn btn-lg text-white btn-block mb-3 rounded-pill"
              >金魚</a
            >
          </div>
        </div>
        <div class="col-md-9">
          <!-- 主要商品列表 (Card) -->
          <div class="tab-content">
            <div class="tab-pane active" id="list-gold">
              <div class="row">
                <div class="col-md-4 mb-4">
                  <div
                    class="card border-0 box-shadow text-center h-100 position-relative"
                  >
                    <img
                      class="card-img-top"
                      src="https://images.unsplash.com/photo-1481399124169-87493351c8a1?w=1349"
                      alt="Card image cap"
                    />
                    <span class="tag position-absolute">tropical fish</span>
                    <div class="card-body">
                      <h5 class="card-title text-left">Tropical fish 01</h5>
                      <p class="card-text text-left">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div
                        class="d-flex justify-content-between align-items-baseline"
                      >
                        <div class="h5"></div>
                        <!-- <div class="h5" v-if="!item.price">{{item.origin_price}} </div>
                      <del class="h6" v-if="item.price">$ {{item.origin_price}} </del>
                      <div class="h5" v-if="item.price">$ {{item.price}} </div> -->
                      </div>
                    </div>
                    <div
                      class="card-footer border-top-0 d-flex justify-content-between"
                    >
                      <a href="#" class="btn btn-outline-primary btn-sm">
                        <i class="fa fa-file"></i> Detail
                      </a>
                      <a href="#" class="btn btn-primary btn-sm">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-4">
                  <div class="card border-0 box-shadow text-center h-100">
                    <img
                      class="card-img-top"
                      src="https://images.unsplash.com/photo-1486250944723-86bca2b15b06?w=1351"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">特工眼鏡</h4>
                      <p class="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                    <div class="card-footer border-top-0 bg-white">
                      <a
                        href="#"
                        class="btn btn-outline-secondary btn-block btn-sm"
                      >
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        搶購去
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-4">
                  <div class="card border-0 box-shadow text-center h-100">
                    <img
                      class="card-img-top"
                      src="https://images.unsplash.com/photo-1497339100210-9e87df79c218?w=1350"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">特工西裝</h4>
                      <p class="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                    <div class="card-footer border-top-0 bg-white">
                      <a
                        href="#"
                        class="btn btn-outline-secondary btn-block btn-sm"
                      >
                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                        搶購去
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-4">
                  <div class="card border-0 box-shadow text-center h-100">
                    <img
                      class="card-img-top"
                      src="https://images.unsplash.com/photo-1497339100210-9e87df79c218?w=1350"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">變聲領帶</h4>
                      <p class="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                    <div class="card-footer border-top-0 bg-white">
                      <a
                        href="#"
                        class="btn btn-outline-secondary btn-block btn-sm disabled"
                      >
                        缺貨中
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- pagination -->
              <nav aria-label="Page navigation" class="my-5">
                <ul class="pagination justify-content-center">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">3</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="tab-pane" id="list-gift">
              <div class="row align-items-stretch">
                <!-- 禮品 -->
                <div class="col-md-4 mb-4">
                  <div class="card border-0 box-shadow text-center h-100">
                    <img
                      class="card-img-top"
                      src="https://images.unsplash.com/photo-1482173074468-5b323335debe?w=1350"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">超精緻禮物</h4>
                      <p class="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                    <div class="card-footer border-top-0 bg-white">
                      <a
                        href="#"
                        class="btn btn-outline-secondary btn-block btn-sm"
                      >
                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                        搶購去
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- tab-content end -->
        </div>
      </div>
    </div>

    <UserFooter />

    <div
      class="modal fade"
      id="removeModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title">刪除商品</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>是否確認刪除商品</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              否
            </button>
            <button type="button" class="btn btn-outline-danger px-5">
              是
            </button>
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
  name: 'UserHome',
  data () {
    return {
      style: {
          topBg: `url(/assets/images/topbg.png)`,
      }
    }
  },
  components: {
    UserNavbar,
    UserFooter,
  },
  created(){
      const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.common.Authorization = myCookie;
  },
  methods: {
    signout(){
      const api = `${process.env.APIPATH}/logout`;
        const vm = this;
        this.$http.post(api).then((response) => {
        console.log(response.data)
        if(response.data.success){
            vm.$router.push('/login');
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  background-color: #000;
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
.tag {
  top: 1rem;
  left: 1rem;
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
