<script>
  import { _ } from "svelte-i18n";
  import Illustration from "../components/Illustration.svelte";
  import { activeStore } from "../stores.js";
  let activate = false;
  setTimeout(() => (activate = true), 0);
</script>

<style>
  p {
    color: white;
  }
  h1 {
    margin: 10px 0;
    font-size: 400%;
    color: white;
  }
  section {
    display: flex;
    justify-content: flex-start;
  }
  button {
    padding: 15px 0;
    width: 40%;
    margin-right: 5%;
  }

  article {
    margin-top: calc(5vw + 3rem);
    position: fixed;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }


  ul {
    display: flex;
    justify-content: space-around;
    width: auto;
    list-style: none;
    margin: auto;
  }

  a {
    text-decoration: underline;
    color: white;
    padding: 3px 8px;
    transition: border-bottom 200ms ease-in-out;
  }

  /* a:hover {
    text-decoration: none;
    padding-bottom: 0px;
    border-bottom: white 5px solid;
  } */

  .no-theme {
    color: white;
    background-color: #1e2029;
    border: transparent;
  }

  .no-theme:hover {
    background-color: #1F2833;
  }

</style>

<svelte:head>
  <style>
    body {
      overflow: hidden;
    }

    nav.navbar {
      position: fixed;
      top: 0;
    }
  </style>
</svelte:head>

<article id="landing">
  <h1>{$_('landing.title')}</h1>
  <p>{$_('landing.subtitle')}</p>

  <section>
    <button class="main-action" on:click={() => ($activeStore = 'Home')}>
      {$_('landing.call-to-action')}
    </button>
    <button
      class="transparente no-theme"
      on:click={() => ($activeStore = 'Contact me')}>
      {$_('landing.call-to-action-secondary')}
    </button>
  </section>
  <aside>
    <ul>
      <li>
        <a href="https://ca.linkedin.com/in/adin-aviv-59bb951a5">
          LinkedIn
        </a>
      </li>
      <li>
        <a href="https://github.com/AdinAviv03">Github</a>
      </li>
    </ul>
  </aside>
</article>
<Illustration />
