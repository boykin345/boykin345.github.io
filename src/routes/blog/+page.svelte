<script>
  import { posts, formatDate } from '#lib/posts.js';
</script>

<svelte:head><title>Blog</title></svelte:head>

<div class="content-container blog-container">
  {#each posts as post (post.slug)}
    <div class="blog-element">
      <span class="about-text">{formatDate(post.date)}</span>
      <div class="about-text">
        <a href="/blog/{post.slug}/" class="blog-link">{post.title}</a>
      </div>
    </div>
  {/each}
  <div class="blog-element">
    <span class="about-text">August 2, 2025</span>
    <div class="about-text">
      <a href="https://github.com/boykin345/website_on_next" class="blog-link">This_website</a>
    </div>
  </div>
</div>
