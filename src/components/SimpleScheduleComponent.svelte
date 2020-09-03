<script>
  import type { ScheduleItem } from "../types/schedule/Schedule";
  import ScheduleItemComponent from "./ScheduleItemComponent.svelte";
  import TimeAxisComponent from "./TimeAxisComponent.svelte";
  import {
    min,
    max,
    extent,
    scaleLinear,
    scaleBand,
    scaleOrdinal,
    schemeDark2,
  } from "d3";
  export let scheduleItems: ScheduleItem[];
  let height: number = 1800;
  let width: number;
  let val = 10;
  const subjects = ["ELAR", "Math", "Science", "Soc St", "EMPTY", "Fluency"];
  let timeScale = scaleLinear();
  let roomScale = scaleBand().paddingInner(0.05);
  const colorScale = scaleOrdinal<string, string>()
    .domain(subjects)
    .range(schemeDark2);
  $: {
    const minV = min(scheduleItems, (s) => s.startTime);
    const maxV = max(scheduleItems, (s) => s.endTime);
    if (minV !== undefined && maxV !== undefined) {
      timeScale = timeScale.domain([minV, maxV])//.nice();
    }
  }
  $: {
    let domain = scheduleItems.map((s) => s.roomNumber);
    console.log(domain);
    if (domain[0] !== undefined) {
      roomScale.domain(domain);
    }
  }
  $: timeScale.range([0, width]);
  $: {
    roomScale.range([0, height]);
  }
</script>

<!-- <svelte:body on:scroll|preventDefault on:mousewheel="{handleScroll}" /> -->
<TimeAxisComponent xScale={timeScale} />
<div
  class="relative"
  style="height: {height}px"
  bind:clientWidth={width}
  bind:clientHeight={height}>
  {#each scheduleItems as s}
    <ScheduleItemComponent
      {colorScale}
      xScale={timeScale}
      yScale={roomScale}
      scheduleItem={s} />
  {/each}
</div>
