<script>
  let { data } = $props();
</script>

<svelte:head><title>{data.post.title}</title></svelte:head>

<article class="content-container blog-container post">
  <data.post.component />
</article>
