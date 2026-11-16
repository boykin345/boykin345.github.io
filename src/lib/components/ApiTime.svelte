<script>
  import { onMount } from 'svelte';

  const format = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Yekaterinburg',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  let time = $state(null);

  onMount(() => {
    time = new Date();
    const timer = setInterval(() => (time = new Date()), 1000);
    return () => clearInterval(timer);
  });
</script>

{#if time}
  <div><p>{format.format(time)}</p></div>
{:else}
  <div>Loading time...</div>
{/if}
