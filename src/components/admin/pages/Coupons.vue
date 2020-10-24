<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="text-right mt-4">
            <button class="btn btn-primary" @click="openModal(true)">建立新的優惠券</button>
        </div>
        <table class="table table-striped table-hover table-light mt-4">
            <thead class="table-primary">
                <tr>
                    <th>名稱</th>
                    <th>代碼</th>
                    <th width="200">折扣百分比</th>
                    <th width="200">到期日</th>
                    <th width="200">是否啟用</th>
                    <th width="200" >編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, key) in coupons" :key="item.id">
                    <td>{{ item.title }}</td>
                    <td>{{ item.code }}</td>
                    <td>{{ item.percent }}</td>
                    <td>{{ item.due_date | date }}</td>
                    <td>
                        <span v-if="item.is_enabled" class="text-success">啟用</span>
                        <span v-else>未啟用</span>
                    </td>
                    <td>
                        <button class="btn btn-primary btn-sm" @click="openModal(false, item)">編輯</button>
                        <button class="btn btn-outline-danger btn-sm" @click="openModal(false, item, true)">刪除</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" :class="{ 'disabled' : !pagination.has_pre }">
                    <a class="page-link" href="#" aria-label="Previous" 
                        @click.prevent="getCoupons(pagination.current_page - 1)">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>
                <li class="page-item" v-for="page in pagination.total_pages" :key="page"
                    :class="{ 'active' : pagination.current_page === page }">
                    <a class="page-link" href="#" @click.prevent="getCoupons(page)">{{ page }}</a>
                </li>
                <li class="page-item" :class="{ 'disabled' : !pagination.has_next }">
                    <a class="page-link" href="#" aria-label="Next"
                        @click.prevent="getCoupons(pagination.current_page + 1)">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav> -->

        <!-- Modal -->
        <div class="modal fade" id="couponModal" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                        <span>新增優惠券</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group">
                                <label for="title">標題</label>
                                <input type="text" class="form-control" id="title"
                                    v-model="tempCoupon.title"
                                    placeholder="請輸入標題">
                                </div>

                                <div class="form-group">
                                <label for="coupon_code">優惠碼</label>
                                <input type="text" class="form-control" id="coupon_code"
                                    v-model="tempCoupon.code"
                                    placeholder="請輸入優惠碼">
                                </div>

                                <div class="form-group">
                                    <label for="due_date">到期日</label>
                                    <input type="date" class="form-control" id="due_date"
                                        v-model="due_date">
                                </div>

                                <div class="form-group">
                                    <label for="percent">折扣百分比</label>
                                    <input type="number" class="form-control" id="percent"
                                        v-model.number="tempCoupon.percent">
                                </div>

                                <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox"
                                        v-model="tempCoupon.is_enabled"
                                        :true-value="1"
                                        :false-value="0"
                                        id="is_enabled">
                                        <label class="form-check-label" for="is_enabled">
                                        是否啟用
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" @click="updateCoupon">確認</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="delCouponModal" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                        <span>刪除優惠券</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        是否刪除 <strong class="text-danger">{{ tempCoupon.title }}</strong> 優惠券(刪除後將無法恢復)。
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-danger" @click="deleteCoupon()"
                        >確認刪除</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    data () {
        return {
            coupons: [],
            pagination: {},
            tempCoupon: {},
            due_date: new Date(),
            isNew: false,
            isLoading: false
        }
    },
    watch: {
        due_date(){
            const vm = this;
            // 將date換算成unix timestamp
            // 2種寫法都可以，結果一樣
            const timestamp = Math.floor(new Date(vm.due_date) / 1000);
            const timestamp2 = (new Date(vm.due_date).getTime() / 1000);
            vm.tempCoupon.due_date = timestamp;
        }
    },
    methods: {
        getCoupons (page = 1) {
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupons?page=${page}`;
            const vm = this;
            vm.isLoading = true;
            this.$http.get(api).then((response) => {
                console.log(response.data)
                vm.isLoading = false;
                vm.coupons = response.data.coupons;
                vm.pagination = response.data.pagination;
            })
        },
        openModal (isNew, item, deleteItem = false) {
            const vm = this;
            if(isNew){
                this.tempCoupon = {};
                this.isNew = true;
            } else {
                this.tempCoupon = Object.assign({}, item);
                // 在編輯的視窗中顯示出上次存取的日期
                // expected output: 2011-10-05T14:48:00.000Z
                const dateAndTime = new Date(vm.tempCoupon.due_date * 1000).toISOString().split('T');
                vm.due_date = dateAndTime[0];
                this.isNew = false;
            }

            if(deleteItem){
                $('#delCouponModal').modal('show');
            } else {
                $('#couponModal').modal('show');
            }
        },
        updateCoupon () {
            let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon`;
            let httpMethod = 'post';
            const vm = this;
            if(!vm.isNew){
                api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
                httpMethod = 'put';
            } 
            vm.due_date = new Date(vm.tempCoupon.due_date * 1000);
            this.$http[httpMethod](api, {data: vm.tempCoupon}).then((response) => {
                console.log(response.data)
                if(response.data.success){
                    $('#couponModal').modal('hide');
                    vm.getCoupons();
                } else {
                    $('#couponModal').modal('hide');
                    vm.getCoupons();
                    console.log('新增失敗')
                }
            })
        },
        deleteCoupon () {
            const vm = this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
            this.$http.delete(api).then((response) => {
                console.log(response.data)
                if(response.data.success){
                    $('#delCouponModal').modal('hide');
                    vm.getCoupons();
                } else {
                    $('#delCouponModal').modal('hide');
                    vm.getCoupons();
                    console.log('刪除失敗')
                }
            })
        }
    },
    created () {
        this.getCoupons()
    }
}
</script>