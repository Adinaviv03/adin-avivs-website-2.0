<script>
  import { _ } from "svelte-i18n";
  import { langStore } from "../stores.js";
  import SkillModal from "../components/SkillModal.svelte";

  import { skills } from "../../content/skills";
  let active = null;
  // let y = screen.width;

  const deactivate = () => (active = null);
</script>

{#if active != null}
  <SkillModal
    data_en={skills["en"][active]}
    on:deactivate={deactivate}
  />
{/if}

<h1>{$_("skills.title")}</h1>
<h2 class="action">{$_("skills.subtitle")}</h2>
<div>
  {#each skills[$langStore] as skill, i}
    <section on:click={() => (active = i)} class="clickable">
      <img src={skill.icon} alt={skill.title} class="clickable" />
      <h2 class="clickable">{skill.title}</h2>
    </section>
  {/each}
</div>

<style>
  h2 {
    color: var(--accent);
    margin-top: 10px;
  }

  h2.action {
    margin-top: -20px;
    color: var(--accent);
    font-size: 120%;
    margin-bottom: 26px;
  }

  section {
    position: relative;
    border-radius: 14px;
    background-color: var(--bg-dark);
    max-width: 95%;
    padding: 15px;
    text-align: center;
    transition: background-color ease-in-out 200ms;
  }
  div {
    display: grid;
    gap: 1em 1.1em;
    grid-template-columns: repeat(auto-fit, minmax(164px, 0.5fr));
    min-width: 100%;
  }
  img {
    height: 70px;
  }
  section:not(.active):hover {
    background-color: var(--bg-light-hover);
  }
</style>
