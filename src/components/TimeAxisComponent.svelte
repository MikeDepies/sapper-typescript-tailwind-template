<script>
  import type { ScaleLinear } from "d3";

  import type { ScheduleItem } from "../types/schedule/Schedule";

  export let xScale: ScaleLinear<number, number>;
  // export let scheduleItems: ScheduleItem[];
  $: ticks = xScale.ticks();
  function minutesToTimeString(minutes : number) {
    const minuteOfHour = minutes % 60
    const hour = (minutes - minuteOfHour) / 60
    return `${hour}:${minuteOfHour}`
  }
</script>
<div class="relative h-4" >
  {#each ticks as tick}
    <div class="absolute text-center" style="left: {xScale(tick)}px">
      {minutesToTimeString(tick)}
    </div>
  {/each}
</div>
