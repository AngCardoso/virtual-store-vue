<template>
<div id="specials">
    <h2>Hottest Cellphones</h2>
    <div class="displayer">
        <div class="displayed-item" v-for="phone in phones" :key="phone.id">
            <figure>
                <img :src=phone.thumbnail :alt=phone.description>
                <figcaption>
                        {{ phone.description }}
                </figcaption>
            </figure>
        </div>   
    </div>
    <hr>

    <h2>Best laptops</h2>
    <div class="displayer">
        <div class="displayed-item" v-for="lp in laptops" :key="lp.id">
            <figure>
                <img :src=lp.thumbnail :alt=lp.description>
                <figcaption>
                        {{ lp.description }}
                </figcaption>
            </figure>
        </div>       
    </div>
    <hr>

    <h2>Amazing Fragrances</h2>
    <div class="displayer">
        <div class="displayed-item" v-for="fr in fragrances" :key="fr.id">
            <figure>
                <img :src=fr.thumbnail :alt=fr.description>
                <figcaption>
                        {{ fr.description }}
                </figcaption>
            </figure>
        </div>       
    </div>
    <hr>

    <h2>Because we all need it</h2>
    <div class="displayer">
        <div class="displayed-item" v-for="sk in skincare" :key="sk.id">
            <figure>
                <img :src=sk.thumbnail :alt=sk.description>
                <figcaption>
                        {{ sk.description }}
                </figcaption>
            </figure>
        </div>       
    </div>
    <hr>
</div>




</template>
<script>
export default{
    name:"SpecialItems",
    data(){
        return{
            phones: null,
            laptops: null,
            fragrances: null,
            skincare: null
        }
    },
    methods:{
        async receiveData(){
           let rawLptop = await fetch('https://dummyjson.com/products/category/laptops');
           let allLaptops = await rawLptop.json();
           this.laptops = allLaptops.products;

           let rawPhones = await fetch('https://dummyjson.com/products/category/smartphones')
           let allPhones = await rawPhones.json();
           this.phones = allPhones.products;

           let rawFrags = await fetch('https://dummyjson.com/products/category/fragrances')
           let allFrags = await rawFrags.json();
           this.fragrances = allFrags.products;

           let rawSkcare = await fetch('https://dummyjson.com/products/category/skincare')
           let allSkcare = await rawSkcare.json();
           this.skincare = allSkcare.products;
        },

    },
    mounted(){
        this.receiveData();
    }
}
</script>
<style lang="scss" scoped>
    $Pdist: 4vh 0;
    h2{
        padding:$Pdist;
    }
    
    .displayer{
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 28vh;
        grid-auto-rows: 38vh;
        gap: 2vw;
        overflow-x: auto;
        padding:$Pdist;
        

        .displayed-item{
            background-color: #FFFFFF;
            border-radius: 15px;
    
            
            figure{
                height: 100%;
                display: grid;
                gap: 2vw;
            }
            img{
                width: 100%;
                aspect-ratio: 16/9;
                object-fit: contain;
                border-radius: 15px;
                max-width: 96%;
                padding: 4%;
            }

            figcaption{
                overflow: hidden;
                color: #000000;
            }

            
        }
 
}
hr{
    border: 4px solid #707070;
    height: fit-content;
    border-radius: 25px;
} 

</style>