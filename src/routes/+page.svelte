<script>
  import Tooltip from '#lib/components/Tooltip.svelte';

  const icons = [
    {
      href: 'https://soundcloud.com/user-735227306',
      name: 'SoundCloud',
      src: '/SoundCloud.png',
    },
    {
      href: 'https://open.spotify.com/user/31lpevsqaz6ftqu23sk2vddr3pdq?si=e4b3c22b1a0147e7',
      name: 'Spotify',
      src: '/Spotify.png',
    },
    {
      href: 'https://steamcommunity.com/id/juzzyboykin',
      name: 'Steam',
      src: '/Steam.png',
    },
    {
      href: 'https://www.linkedin.com/in/mikhail-kolyakin-946734259/',
      name: 'LinkedIn',
      src: '/LinkedIn.png',
    },
    {
      href: 'https://github.com/boykin345',
      name: 'GitHub',
      src: '/github.png',
      large: true,
    },
    { href: 'https://x.com/BoyKin345', name: 'Twitter', src: '/Twitter.png' },
    {
      href: 'https://www.reddit.com/user/Substantial-Purple60/',
      name: 'Reddit',
      src: '/Reddit.png',
    },
  ];
</script>

<svelte:head><title>About</title></svelte:head>

<div class="content-container about">
  <div>
    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img
      src="/favicon.ico"
      alt="main-photo-page"
      class="main-photo"
      width="200"
      height="200"
    />
  </div>
  <h1 class="about-text">Mikhail Y. Kolyakin</h1>
  <div>
    <p class="about-text">
      Junior
      <img
        src="/logo.svg"
        alt="react-logo"
        width="32"
        height="32"
        style="vertical-align: text-bottom; display: inline-block"
      />
      React web developer working in fintech. Interested in game development, especially
      of grand strategy games, as well as urbanistics and architecture. Also, a <Tooltip
      /> lives with me.
    </p>
  </div>
</div>
<div class="content-container icons-container">
  {#each icons as icon, i (icon.name)}
    <a
      href={icon.href}
      target="_blank"
      rel="noopener noreferrer"
      title={icon.name}
    >
      <img
        width="128"
        height="128"
        src={icon.src}
        alt={icon.name}
        class={[
          'icon',
          i % 2 ? 'spin-cw' : 'spin-ccw',
          icon.large && 'icon-large',
        ]}
      />
    </a>
  {/each}
</div>
