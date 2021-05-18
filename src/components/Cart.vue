<template>
    <div class="container">
        <h1>Cart</h1>

        <div class="cart" v-if="allCartItems.length">
            <table>
                <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Qty</th>
                    <th>Price</th>
                </tr>
                <tr v-for="item in allCartItems" :key="item.id">
                    <td><img :src="item.image" :alt="item.title"></td>
                    <td><span>{{ item.title }}</span></td>
                    <td><span>{{ item.quantity }}</span></td>
                    <td><span>&euro;{{ item.price }}</span></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Cart',
    computed: mapGetters([
        'allCartItems'
    ])
}
</script>

<style scoped>
    h1, h2{
        text-align: center;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    table, th, td{
        border: 1px solid black;
        border-collapse: collapse;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    th, td{
        width: 25%;
        text-align: center;
        padding: 5px;
    }
    th{
        background-color: grey;
    }
    img{
        max-width: 50px;
    }
</style>