<template>
    <div>        
        <nav aria-label="Page navigation example" class="d-flex justify-content-center">
            <ul class="pagination">
                <li class="page-item" :class="{ 'disabled' : !pagination.has_pre }">
                    <a class="page-link" href="#" aria-label="Previous" 
                        @click.prevent="activeEmit(pagination.current_page - 1)">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>
                <li class="page-item" v-for="page in pagination.total_pages" :key="page"
                    :class="{ 'active' : pagination.current_page === page }">
                    <a class="page-link" href="#" @click.prevent="activeEmit(page)">{{ page }}</a>
                </li>
                <li class="page-item" :class="{ 'disabled' : !pagination.has_next }">
                    <a class="page-link" href="#" aria-label="Next"
                        @click.prevent="activeEmit(pagination.current_page + 1)">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>

export default {
    name: 'pagination',
    props: ['pagination'],
    methods: {
        activeEmit(param){
            this.$emit('pageChange', param);
        }
    }
}
</script>