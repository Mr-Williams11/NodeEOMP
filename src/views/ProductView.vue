<template>
    <div class="container99">
        <div class="row">
            <Card v-for="product in $store.state.product" :key="product.prodID">
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
                </template>
            </Card>
        </div>
    </div>
    <SpinnerView/>
</template>

<script>
import Card from '@/components/Card.vue';
// import SpinnerView from '@/components/SpinnerView.vue';
    export default {
        components:{
            Card,
            // SpinnerView
        },
        computed: {
            product() {
                return this.$store.state.product
            },
            /* eslint-disable */
            fetchProducts(){
                this.$store.dispatch('fetchProducts')
            }
        },
        mounted() {
            let id = +this.$route.path.split('').at(-1)
            console.log( this.$store.dispatch('fetchProduct', id));
            this.fetchProducts
        }
    }
</script>

<style>

</style>