<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th width="150">購買時間</th>
                    <th>Email</th>
                    <th>購買款項</th>
                    <th width="150">應付金額</th>
                    <th width="150">是否付款</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item) in orders" :key="item.id">
                    <td>{{ item.paid_date }}</td>
                    <td>{{ item.user.email }}</td>
                    <td>
                        <template v-for="product in item.products">
                            {{ product }}<br>
                        </template>
                    </td>
                    <td class="text-right">{{ item.total | currency }}</td>
                    <td class="text-right">{{ item.price | currency }}</td>
                    <td>
                        <span v-if="item.is_paid" class="text-success">已付款</span>
                        <span v-else>尚未付款</span>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" :class="{ 'disabled' : !pagination.has_pre }">
                    <a class="page-link" href="#" aria-label="Previous" 
                        @click.prevent="getProducts(pagination.current_page - 1)">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>
                <li class="page-item" v-for="page in pagination.total_pages" :key="page"
                    :class="{ 'active' : pagination.current_page === page }">
                    <a class="page-link" href="#" @click.prevent="getProducts(page)">{{ page }}</a>
                </li>
                <li class="page-item" :class="{ 'disabled' : !pagination.has_next }">
                    <a class="page-link" href="#" aria-label="Next"
                        @click.prevent="getProducts(pagination.current_page + 1)">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav> -->

    </div>
</template>

<script>

export default {
    data () {
        return {
            orders: [],
            pagination: {},
            tempProduct: {},
            isNew: false,
            isLoading: false,
            status: {
                fileUploading: false
            }
        }
    },
    methods: {
        getOrders (page = 1) {
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/orders?page=${page}`;
            const vm = this;
            vm.isLoading = true;
            this.$http.get(api).then((response) => {
                console.log(response.data)
                vm.isLoading = false;
                vm.orders = response.data.orders;
                vm.pagination = response.data.pagination;
            })
        },
    },
    created () {
        this.getOrders()
    }
}
</script>