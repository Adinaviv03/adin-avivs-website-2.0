<script>
  import {_} from "svelte-i18n";
  import { projectStore } from "../stores";
  export let projects;
  let w = screen.width;
  let activeProjects = projects.map(p => p.liveUrl.desktop && p.liveUrl.mobile ? "" : "disabled");
</script>

<style>

  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
  }

  @media only screen and (max-width: 683px) {
    div {
      overflow-x: scroll;
      white-space: nowrap;
      display: block;
    }
  }

  h3 {
    position: absolute;
    max-width: 90%;
    font-size: 2em;
    top: 10%;
    left: 10%;
    color: white;
    margin-right: 2%;
  }
  section {
    position: relative;
    height: 50vh;
    min-width: 60%;
    margin: 10px;
    background-position: 0 50%;
    border-radius: 14px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: inline-block;
    white-space: normal;
  }

  a {
    background-color: var(--accent);
    color: white;
    padding: 10px 0;
    border-radius: 100px;
    text-align: center;
    width: 45%;
    transition: background-color 200ms;
  }

  a:hover {
    background-color: var(--accent-hover);
  }

  button {
    width: 45%;
    color: white;
    border-color: white;
  }
  nav {
    width: 100%;
    position: absolute;
    bottom: 5%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
  }

</style>

<div>
  {#each projects as project, i}
    <section
      style="background-image: linear-gradient(rgba(0,0,0, 0.6),rgba(0,0,0,
      0.6)), url('{project.src}')">
      <h3>{project.title}</h3>
      <nav>
          <a href={w > 683 ? project.liveUrl.desktop : project.liveUrl.mobile} class={activeProjects[i]}>
            {@html !activeProjects[i] ? `${$_("home.call-to-action")} <img src="./svg/new_tab.svg" alt="Open in new tab" />` : $_("home.disabled")}
          </a>

        <button class="transparente" on:click={() => ($projectStore = i)}>
          {$_("home.call-to-action-secondary")}
        </button>
      </nav>
    </section>
  {/each}
</div>
