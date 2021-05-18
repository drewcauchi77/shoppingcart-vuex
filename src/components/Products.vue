<template>
    <div class="container">
        <h1>Products</h1>

        <div class="products">
            <div v-for="product in allProducts" :key="product.id" class="product">
                <div class="product-content">
                    <img class="product-image" :src="product.image" :alt="product.title">
                    <h2 class="product-name">{{ product.title }}</h2>
                    <span class="product-price">&euro;{{ product.price }}</span>
                    <div class="add-to-cart" @click="addProductToCart(product.id)">
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Products',
    created() {
        this.fetchProducts()
    },
    methods: {
        ...mapActions([
            'fetchProducts',
            'addProductToCart',
        ]),
    },
    computed: mapGetters([
        'allProducts',
    ])
}
</script>

<style scoped>
    h1{
        text-align: center;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    .products{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 30px;
        grid-row-gap: 30px;
    }
    .product{
        border: 1px solid black;
        border-radius: 5px;
        padding: 20px;
    }
    .product-content{
        display: grid;
        grid-template-rows: 120px 100px 25px;
        grid-row-gap: 10px;
        position: relative;
    }
    .product-image{
        width: 100%;
        max-height: 120px;
        object-fit: contain;
        display: block;
        margin: 0 auto;
    }
    .product-name{
        align-self: center;
    }
    .product-name, span{
        font-size: 16px;
        text-align: center;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        display: block;
    }
    .add-to-cart{
        position: absolute;
        bottom: 5px;
        right: 5px;
        margin: auto;
        cursor: pointer;
    }
</style>