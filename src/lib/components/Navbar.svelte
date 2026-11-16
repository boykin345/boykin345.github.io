<script>
  import { page } from '$app/state';

  const links = [
    { href: '/', label: 'About' },
    { href: '/blog/', label: 'Blog' },
    { href: '/contact/', label: 'Contact Me' },
  ];
</script>

<div class="nav content-container">
  {#each links as link (link.href)}
    <a
      href={link.href}
      class={['logo', page.url.pathname === link.href && 'active']}
    >
      {link.label}
    </a>
  {/each}
</div>
