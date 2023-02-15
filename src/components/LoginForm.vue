<template>
<div class="container">
    <form action="" v-show="login">
        <h1>Log in</h1>
        <label for="txtUser"> Username</label>
        <input type="text" name="" id="txtUser" placeholder="username or e-mail">
        <label for="txtPassword">Password</label>
        <input type="password" name="" id="txtPassword">  
    </form>
    <form action="" v-show="createAcc">
        <h1>Create Account</h1>
        <label for="txtUser">We'll need your e-mail</label>
        <input type="text" name="" id="txtMail" placeholder="e-mail">
        <label for="txtUser">Choose your Username</label>
        <input type="text" name="" id="txtUser" placeholder="username">
        <label for="txtPassword">Choose a Password</label>
        <input type="password" name="" id="txtPassword">
        <label for="txtConfirmPw">Please Confirm your Password</label>
        <input type="password" name="txtConfirmPw" id="txtConfirmPw" placeholder="confirm your password"> 
        <label for="chooseAvatar">load an image as avatar (max. 250kb)</label>
        <input type="file" name="chooseAvatar" id="chooseAvatar" accept="image/*"> 
    </form>
    <form action="" v-show="lostPw">
        <h1>Recover Password</h1>
        <label for="ForgotPw"> Forgot your Password? Tell us your e-mail</label>
        <input type="text" name="" id="txtUser" placeholder="username or e-mail">
    </form>
        <div class="buttons">
            <button id="login" @click="showLoginForm($event)">Log into Account</button>
            <button id="forgotPw" @click="recoverPW($event)">Forgot Password</button>
            <button id="createAcc" @click="showCreateAccForm($event)">Create account</button>
        </div>
</div>
</template>
<script>
export default {
    name: "LoginForm",
    data(){
        return{
            createAcc: true,
            login: false,
            lostPw: false,
            
        }
       
    },
    methods:{
        showCreateAccForm(e){
            e.preventDefault();
            this.createAcc = true;
            this.login = false;
            this.lostPw = false;

        },
        showLoginForm(e){
            e.preventDefault();
            this.createAcc = false;
            this.login = true;
            this.lostPw = false;

        },
        recoverPW(e){
            e.preventDefault();
            this.createAcc = false;
            this.login = false;
            this.lostPw = true;
            console.log("sucessIsh")
        }

    }    

}
</script>
<style lang="scss" scoped>

@mixin toButtons{
    border:#707070;
    font-size: 1rem;
    padding: 1vw;
    border-radius: 28px;
    margin: 1rem 1rem auto auto ;
    cursor:pointer;
    transition:0.4s;

}
.container{
    display: grid;
    grid-auto-flow: row;
    justify-content: space-evenly;
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


   
}
.buttons{ 
        display: grid;
        grid-auto-flow: column;
        justify-content: space-evenly;

        button{
            @include toButtons;
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


        #login:hover{
            background-color: darkgreen;
            color:#FFFFFF;
        }

        #forgotPw:hover{
            background-color: darkred;
            color:#FFFFFF;
        }
        #createAcc:hover{
            background-color: goldenrod;
            color:#FFFFFF;
        }
    }

</style>