<script>
  import { onMount } from "svelte";

  import Navbar from "./components/Navbar.svelte";
  import Transition from "./components/Transition.svelte";
  import { activeStore } from "./stores.js";

  import Home from "./routes/Home.svelte";
  import Skills from "./routes/Skills.svelte";
  import Contact from "./routes/Contact.svelte";
  import Landing from "./routes/Landing.svelte";

  import { addMessages, init, getLocaleFromNavigator } from "svelte-i18n";
  import en from "../messages/en.json"
  addMessages("en", en);
  init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator()
  });
</script>

<Navbar />

<main>
  {#if $activeStore === 'Landing'}
    <Landing />
  {:else if $activeStore === 'Home'}
    <Transition>
      <Home />
    </Transition>
  {:else if $activeStore === 'My Skills'}
    <Transition>
      <Skills />
    </Transition>
  {:else if $activeStore === 'Contact Me'}
    <Transition>
      <!--  -->
      <Contact />
    </Transition>
  {/if}

</main>
