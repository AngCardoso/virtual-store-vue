<template>
<div class="container">
    <form action="">
        <h1>Log in</h1>
        <label for="txtUser"> Username</label>
        <input type="text" name="" id="txtUser" placeholder="username or e-mail">
        <label for="txtPassword">Password</label>
        <input type="password" name="" id="txtPassword">
        <div class="buttons">
            <button id="login">Log into Account</button>
            <button id="forgotPw">Forgot Password</button>
            <button id="createAcc">Create account</button>
        </div>
    </form>
</div>
</template>
<script>
export default {
    name: "LoginForm"
}
</script>
<style lang="scss" scoped>

@mixin toButtons{
    border:#707070;
    font-size: 1rem;
    padding: 1vw;
    border-radius: 28px;
    margin: 1rem 1rem auto auto ;
    transition:0.5s;

}
.container{
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    grid-template-rows: 0.5fr; 
    grid-template-columns: 0.5fr; 
     
    
}
form{
    margin: 2rem;
    display: grid;
    grid-auto-flow: row;

    label,input{
        height: 6vh;
        line-height: 8vh;
    }


   .buttons{ 
        display: grid;
        grid-auto-flow: column;
        padding-top: 2rem;

        button{
            @include toButtons;
            transition: 0.5s;
        }

        #login{
            color: darkgreen;
            border: 1px solid darkgreen;
        }
        #forgotPw{
            color: darkred;
            border: 1px solid darkred;
        }
        #createAcc{
            color: goldenrod;
            border: 1px solid goldenrod;
        }
    }

}

</style>