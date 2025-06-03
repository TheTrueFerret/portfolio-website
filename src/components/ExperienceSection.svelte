<script lang="ts">
  import { workExperience, educationExperience } from "../data/experienceData";
  let activeTab: "work" | "education" = "education";
</script>

<section class="w-full py-10">
  <div class="max-w-4xl mx-auto px-4">
    <div class="flex justify-center gap-4 mb-4">
      <button
        class={`w-full px-6 py-2 border-2 font-semibold ${
          activeTab === "work"
            ? "border-zinc-300 bg-zinc-300 text-zinc-950"
            : "border-zinc-700 bg-zinc-950 text-white hover:border-zinc-300 hover:text-zinc-300"
        }`}
        on:click={() => (activeTab = "work")}
      >
        Work Experience
      </button>
      <button
        class={`w-full px-6 py-2 border-2 font-semibold ${
          activeTab === "education"
            ? "border-zinc-300 bg-zinc-300 text-zinc-900"
            : "border-zinc-700 bg-zinc-950 text-white hover:border-zinc-300 hover:text-zinc-300"
        }`}
        on:click={() => (activeTab = "education")}
      >
        Education
      </button>
    </div>

    <div
      class="md:pl-38 p-4 border-2 border-zinc-700 hover:border-zinc-400"
    >
      {#if activeTab === "work"}
        <!-- Work Timeline -->
        {#each workExperience as item}
          <div class="border-l-2 border-zinc-600 pl-4 my-8">
            <div class="my-4">
              <h3 class="text-lg sm:text-2xl font-bold text-white">{item.title}</h3>
              <p class="text-sm sm:text-lg text-zinc-400">{item.description}</p>
              <p class="text-zinc-300">{item.date}</p>
            </div>
          </div>
        {/each}
      {:else}
        <!-- Education Timeline -->
        {#each educationExperience as item}
          <div class="border-l-2 border-zinc-600 pl-4 my-8">
            <div class="my-4">
              <h3 class="text-lg sm:text-2xl font-bold text-white">{item.title}</h3>
              <p class="text-sm sm:text-lg text-zinc-400">{item.description}</p>
              <p class="text-zinc-300">{item.date}</p>
            </div>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</section>
