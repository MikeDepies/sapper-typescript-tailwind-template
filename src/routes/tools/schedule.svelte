<script context="module">
  async function getScheduleItems() {
    const res = await fetch("http://localhost:8081/data/schedule");

    if (res.ok) {
      const data = (await res.json()) as ScheduleItem[];
      return data;
    } else {
      return [];
    }
  }
</script>

<script>
  import { onMount } from "svelte";
  import type { ScheduleItem } from "../../types/schedule/Schedule";
  import SimpleSchedule from "../../components/SimpleScheduleComponent.svelte";
  let scheduleItems: ScheduleItem[] = [];
  onMount(async () => {
    scheduleItems = await getScheduleItems();
  });
</script>

<div class="md:flex md:items-center md:justify-between">
  <div class="flex-1 min-w-0">
    <h2
      class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9
      sm:truncate">
      Scheduler
    </h2>
  </div>
  <div class="mt-4 flex md:mt-0 md:ml-4">
    <span class="shadow-sm rounded-md">
      <button
        type="button"
        class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm
        leading-5 font-medium rounded-md text-gray-700 bg-white
        hover:text-gray-500 focus:outline-none focus:shadow-outline-blue
        focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition
        duration-150 ease-in-out">
        Edit
      </button>
    </span>
    <span class="ml-3 shadow-sm rounded-md">
      <button
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent
        text-sm leading-5 font-medium rounded-md text-white bg-indigo-600
        hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo
        focus:border-indigo-700 active:bg-indigo-700 transition duration-150
        ease-in-out">
        Publish
      </button>
    </span>
  </div>
</div>

<div>
  <SimpleSchedule {scheduleItems} />
</div>

