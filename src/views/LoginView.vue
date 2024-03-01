<template>
    <div class="container-fluid1">
        <div class="main">
            <input type="checkbox" id="chk" aria-hidden="true">

            <div class="signup">
                <form>
                    <label for="chk" aria-hidden="true">Sign up</label>
                    <input type="text" name="txt" placeholder="User name" required="">
                    <input type="email" name="email" placeholder="Email" required="">
                    <input type="password" name="pswd" placeholder="Password" required="">
                    <button>Sign up</button>
                </form>
            </div>

            <div class="login">
                <form>
                    <label for="chk" aria-hidden="true">Login</label>
                    <input type="email" name="email" placeholder="Email" required="">
                    <input type="password" name="pswd" placeholder="Password" required="">
                    <button>Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        users() {
            return this.$store.state.users
        }
    },
    mounted() {
        this.$store.dispatch('fetchUsers')
    },
}
</script>

<style>
.container-fluid1 {
    border-radius: 100px;
    margin-left: 500px;

}

.main {
    width: 500px;
    height: 500px;
    overflow: hidden;
    border-radius: 70px;
    background-color: #444;
    box-shadow: 5px 20px 50px #000;
}

#chk {
    display: none;
}

.signup {
    position: relative;
    width: 500px;
    height: 100%;
}

label {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #ddd;
    font-size: 2.3em;
    justify-content: center;
    display: flex;
    margin: 60px;
    font-weight: bold;
    cursor: pointer;
    transition: .5s ease-in-out;
}

input {
    width: 70%;
    height: 40px;
    background: #ddd;
    color: #000;
    justify-content: center;
    display: flex;
    margin: 20px auto;
    padding: 10px;
    border: none;
    border-radius: 50px;
}

button {
    width: 60%;
    height: 40px;
    margin: 10px auto;
    justify-content: center;
    display: block;
    color: #000;
    background: #999;
    font-size: 1em;
    font-weight: bold;
    margin-top: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: .5s ease-in;
    cursor: pointer;
}

button:hover {
    background: tomato;
}

.login {
    height: 460px;
    background: #111;
    border-radius: 60% / 10%;
    transform: translateY(-180px);
    transition: 1s ease-in-out;
}

.login label {
    color: #ddd;
    transform: scale(.6);
}

#chk:checked~.login {
    transform: translateY(-500px);
}

#chk:checked~.login label {
    transform: scale(1);
}

#chk:checked~.signup label {
    transform: scale(.6);
}
</style>