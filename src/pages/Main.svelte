<script>
  import { useNavigate } from "svelte-navigator";

  const navigate = useNavigate();
</script>

<main class="w-full h-full flex justify-center items-center">
  <div class="flex flex-col justify-center items-center mb-8">
    <span class="font-semibold">Start creating your custom RPG character!</span>
    <button
      class="bg-light-1 hover:bg-dark-1 hover:text-white text-dark-1 font-bold py-2 px-4 rounded transition ease-in duration-300 w-40 mt-3"
      on:click={() => navigate("/register")}
    >
      Register
    </button>
  </div>
</main>
