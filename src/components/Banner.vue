<template>
<div class="main-container">
    <div class="container">
        <div class="banner">
             <h1 id="title">The online store of the future</h1>
        </div>
    </div>
    <div class="buttons">
    <button id="createAccoAunt">
        Create Account
    </button>
    <button id="login">
        log into my account
    </button>
    </div>
   <div class="callToAction">
        <h3>Join now and Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Reiciendis enim aperiam dolores quae 
        velit cumque!</h3>
   </div>
</div>
</template>
<script>
export default{
    name: 'Banner',

}

</script>
<style lang="scss" scoped>
@mixin toButtons{
    border:#707070;
    font-size: 1rem;
    padding: 1vw;
    border-radius: 28px;
    margin-top: 1rem;
    transition:0.5s;
    cursor: pointer;
}

.main-container{
    display: grid;
    grid-auto-flow: row;
    justify-content: center;
    grid-auto-columns: 95%;

    #createAccoAunt{
        @include toButtons;
        color: #707070
    }

    #login{
        @include toButtons;
        color: white;
        background: #707070;
    }
    #login:hover,#createAccoAunt:hover{
        background: goldenrod;
    }

    .buttons{
        width: 100%;
        display: grid;
        grid-auto-flow: row;
        justify-content: center;
        align-items: center;
    }

    .callToAction{
        height: 12vh;
        line-height: 12vh;
        background: white;
        margin: 1vw;
        border-radius: 5px;
        text-align: center;
        h3{
            color: goldenrod;
        }
    }

}
.container{
    width: 100%;
    background-image: url('/Projs/virtual-store/src/assets/deck\ stars.png');
    background-position: 0 -200px; 
    background-size: cover;
    height: 60vh;
    display: grid;
    background-repeat: no-repeat;
    grid-auto-flow: column;
    justify-content: space-around;
    align-content: space-around;

    h1{
        font-size: 6vh;
    }
   

}
</style>