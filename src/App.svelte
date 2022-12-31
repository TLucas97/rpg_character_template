<script>
  import { Router, Route } from "svelte-navigator";
  import Main from "./pages/Main.svelte";
  import Register from "./pages/Register.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<Router>
  <Header />
  <div class="text-white">
    <Route path="/" component={Main} />
    <Route path="/register" component={Register} />
  </div>
  <Footer />
</Router>

<style lang="scss">
  div {
    height: 85.2vh;
    background-image: url('../public/images/bg.gif');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
</style>
