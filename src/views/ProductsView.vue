<template>
    <div id="prods1">
        <div class="main">
            <h1>Products</h1>
        <button id="changeDisplay">ver todos os produtos</button>
        </div>
        
        <SpecialItems/>
    </div>
</template>
<script>

import SpecialItems from '@/components/SpecialItems.vue';
export default{
    components: {SpecialItems},
    

}

</script>


<style lang="scss" scoped>
  #prods1{
    width: 80%;
    margin: 1vh auto;
    justify-content: center;
    text-align: center;
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 16vh auto;
    .main{
        padding-bottom: 4vh ;
        h1{
            padding-bottom: 2vh;
        }       
        button{
            padding: 1vh;
            border: 2px solid transparent;
            color: #FFFFFF;
            background: #707070;
            border-radius: 18px;
            cursor: pointer;
            transition: 0.25s;
            
        }
        button:hover{
            background-color: goldenrod;
            border: 2px solid white;
        }

    }  

}


</style>