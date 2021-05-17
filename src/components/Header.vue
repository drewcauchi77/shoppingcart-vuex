<template>
    <header>
        <div class="header-nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    header{
        background: #ff6d54;
        padding: 20px 0px;
    }
    .header-nav{
        display: grid;
        grid-template-columns: repeat(2, 100px);
        grid-column-gap: 15px;
        justify-content: center;
    }
    a{
        color: black;
        font-size: 20px;
        text-decoration: none;
        text-transform: uppercase;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        width: fit-content;
        justify-self: center;
    }
    a:hover{
        text-decoration: underline;
    }
</style>