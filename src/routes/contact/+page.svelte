<script>
  import ApiTime from '#lib/components/ApiTime.svelte';
</script>

<svelte:head><title>Contact</title></svelte:head>

<section class="content-container about">
  <h1 class="about-text">Contact Me</h1>
  <div class="about-text">
    <h2>Email</h2>
    <p>
      <a href="mailto:M.Koliakin@me.com" class="email-link">
        M.Koliakin@me.com
      </a>
    </p>
  </div>
  <div class="about-text">
    <h2>My Local Time</h2>
    <p class="timezone-info">YEKT (UTC+5)</p>
    <div class="time-display">
      <ApiTime />
    </div>
  </div>
</section>
