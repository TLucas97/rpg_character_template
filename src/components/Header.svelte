<script>
  import { useNavigate } from "svelte-navigator";

  const navigate = useNavigate();
  const headerItems = [
    {
      name: "Início",
      path: "/",
    },
    {
      name: "Personagens",
      path: "/characters",
    },
    {
      name: "Repositório",
      path: "/repository",
    },
    {
      name: "Registrar",
      path: "/register",
    },
  ];

  const handleRouteChange = (/** @type {string} */ path) => {
    if (path === "/repository") {
      window.open("https://www.google.com.br", "_blank");
      return;
    }
    navigate(path);
  };
</script>

<main class="bg-dark-1 flex justify-center items-center text-white h-14">
  <div class="flex justify-between space-x-5 font-semibold">
    {#each headerItems as item}
      <button
        class="hover:text-gray-400 cursor-pointer transition"
        on:click={() => handleRouteChange(item.path)}
      >
        {item.name}
      </button>
    {/each}
  </div>
</main>
