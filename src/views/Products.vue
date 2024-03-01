<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <input type="text" placeholder="Search product by name" class="form-control">
            </div>
            <div class="col">
                <button class="btn btn-success">Sorting by price</button>
            </div>
        </div>
        
        <div class="row" v-if="products">
            <Card v-for="product in products" :key="product.prodID">
                <template #cardImg>
                    <!-- prodUrl: {{ product.prodUrl }} -->
                    <img :src="product.prodUrl" class="card-img"/>
                </template>
                <template #cardHeader>
                    <h4 class="card-title">{{ product.prodName }}</h4>
                </template>
                <template #cardBody>
                    <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                        Quantity: {{ product.quantity }}
                    </p>
                    <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                        Amount: R{{ product.amount }}
                    </p>
                    <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                        Category: {{ product.Category }}
                    </p>
                    <!-- <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                        prodUrl: {{ product.prodUrl }}
                    </p> -->
                    <router-link :to="{name: 'product', params: {prodID: product.prodID}}">View</router-link>
                </template>
            </Card>
        </div>
        <div class="row" v-else>
            <SpinnerView/>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
    name: 'ProductView',
    components: {
        Card
    },
    computed:{
        products(){
            return this.$store.state.products
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts')
    }
}
</script>

<style scoped>
.card-img{
    object-fit: "cover"; 
}

</style>