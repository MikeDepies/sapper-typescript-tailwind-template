<script>
  import type { ScaleBand, ScaleLinear, ScaleOrdinal } from "d3";
  import type { ScheduleItem } from "../types/schedule/Schedule";

  export let scheduleItem: ScheduleItem;
  export let xScale: ScaleLinear<number, number>;
  export let yScale: ScaleBand<string>;
  export let colorScale: ScaleOrdinal<string, string>;
  $: width = xScale(scheduleItem.endTime) - xScale(scheduleItem.startTime)
  $: y = yScale(scheduleItem.roomNumber)
  $: x = xScale(scheduleItem.startTime)
  $:height = yScale.bandwidth()
  $:color = colorScale(scheduleItem.subject)
</script>

<div
  class="absolute"
  style="background-color: {color}; left: {x}px;
  top: {y}px; width: {width}px;
  height: {height}px;">
  {scheduleItem.subject}
</div>
