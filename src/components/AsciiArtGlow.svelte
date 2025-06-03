<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  let mouseX: number = 0;
  let mouseY: number = 0;
  let isActiveGlow: boolean = false;
  let glowSize: number = 0;
  let glowOpacity: number = 0;

  let asciiArtPre: HTMLPreElement;
  let mouseTrackerDiv: HTMLDivElement;

  function handleMouseMove(event: MouseEvent) {
    if (!asciiArtPre) {
      return;
    }

    const rect = asciiArtPre.getBoundingClientRect();
    const newMouseX = event.clientX - rect.left;
    const newMouseY = event.clientY - rect.top;

    if (Math.abs(newMouseX - mouseX) > 1 || Math.abs(newMouseY - mouseY) > 1) {
      mouseX = newMouseX;
      mouseY = newMouseY;
    }

    const isOverAsciiArt =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;

    if (isOverAsciiArt && !isActiveGlow) {
      handleMouseEnter();
    } else if (!isOverAsciiArt && isActiveGlow) {
      handleMouseLeave();
    }
  }

  function handleMouseEnter() {
    isActiveGlow = true;
    glowSize = 250;
    glowOpacity = 1;
  }

  function handleMouseLeave() {
    isActiveGlow = false;
    glowSize = 0;
    glowOpacity = 0;
  }

  onMount(() => {
    if (mouseTrackerDiv) {
      mouseTrackerDiv.addEventListener("mousemove", handleMouseMove);
    }
  });

  onDestroy(() => {
    if (mouseTrackerDiv) {
      mouseTrackerDiv.removeEventListener("mousemove", handleMouseMove);
    }
  });
</script>

<!-- The invisible div that tracks mouse movements across the whole container -->
<div
  bind:this={mouseTrackerDiv}
  class="absolute inset-0 z-30 pointer-events-auto"
></div>

<div
  class="flex justify-center font-mono text-zinc-800 leading-none tracking-tighter select-none overflow-hidden"
>
  <pre
    bind:this={asciiArtPre}
    class="text-xl sm:text-4xl md:text-5xl whitespace-pre ascii-art {isActiveGlow
      ? 'active-glow'
      : ''} z-10"
    style="--mouse-x: {mouseX}px; --mouse-y: {mouseY}px; --glow-size: {glowSize}px; --glow-opacity: {glowOpacity};">
         __________  __  ________       
        /_  __/ __ \/ / / / ____/       
         / / / /_/ / / / / __/          
        / / / _, _/ /_/ / /___          
       /_/ /_/ |_|\____/_____/          
                                        
    ________________  ____  ____________
   / ____/ ____/ __ \/ __ \/ ____/_  __/
  / /_  / __/ / /_/ / /_/ / __/   / /   
 / __/ / /___/ _, _/ _, _/ /___  / /    
/_/   /_____/_/ |_/_/ |_/_____/ /_/     
                                        
</pre>
</div>

<style>
  .ascii-art {
    background-clip: text;
    -webkit-background-clip: text; /* For Safari */

    /* Make the text color transparent so the background can show through */
    color: transparent;
    -webkit-text-fill-color: transparent; /* For Safari */

    /* Fallback/initial background when glow is inactive */
    background-image: linear-gradient(
      to right,
      rgb(39 39 42),
      rgb(39 39 42)
    );
  }

  .ascii-art.active-glow {
    background-image: radial-gradient(
      circle var(--glow-size) at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.5) 20%,
      rgba(39, 39, 42, 1) 70%
    );
  }
</style>
