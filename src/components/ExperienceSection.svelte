<script lang="ts">
  import { workExperience, educationExperience } from "../data/experienceData";
  let activeTab: "work" | "education" = "education";
</script>

<section class="w-full py-10">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex justify-center gap-4 mb-8">
      <button
        class={`w-full px-6 py-2 border-2 font-semibold transition-all ${
          activeTab === "work"
            ? "border-white bg-white text-zinc-900"
            : "border-zinc-700 bg-zinc-900 text-white hover:border-zinc-400 hover:text-zinc-300"
        }`}
        on:click={() => (activeTab = "work")}
      >
        Work Experience
      </button>
      <button
        class={`w-full px-6 py-2 border-2 font-semibold transition-all ${
          activeTab === "education"
            ? "border-white bg-white text-zinc-900"
            : "border-zinc-700 bg-zinc-900 text-white hover:border-zinc-400 hover:text-zinc-300"
        }`}
        on:click={() => (activeTab = "education")}
      >
        Education
      </button>
    </div>

    <div
      class="p-4 border-2 border-zinc-700 hover:border-zinc-400 transition-all"
    >
      {#if activeTab === "work"}
        <!-- Work Timeline -->
        {#each workExperience as item}
          <div class="border-l-2 border-zinc-600 pl-4">
            <div class="my-4">
              <h3 class="text-lg font-bold text-white">{item.title}</h3>
              <p class="text-sm text-zinc-400">{item.description}</p>
              <p class="text-zinc-300">{item.date}</p>
            </div>
          </div>
        {/each}
      {:else}
        <!-- Education Timeline -->
        {#each educationExperience as item}
          <div class="border-l-2 border-zinc-600 pl-4">
            <div class="my-4">
              <h3 class="text-lg font-bold text-white">{item.title}</h3>
              <p class="text-sm text-zinc-400">{item.description}</p>
              <p class="text-zinc-300">{item.date}</p>
            </div>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</section>
