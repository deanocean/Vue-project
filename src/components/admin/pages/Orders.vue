<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <table class="table table-striped table-hover table-light mt-4">
            <thead class="table-primary">
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
                    <td>{{ item.create_at | date }}</td>
                    <td>{{ item.user.email }}</td>
                    <td>
                        <template v-for="product in item.products">
                            {{ product.product.title }}<br>
                        </template>
                    </td>
                    <td class="text-right">{{ item.total | currency }}</td>
                    <td>
                        <span v-if="item.is_paid" class="text-success">已付款</span>
                        <span v-else>尚未付款</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    data () {
        return {
            orders: [],
            pagination: {},
            isNew: false,
            isLoading: false
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