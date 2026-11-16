<script>
  import {
    autoUpdate,
    computePosition,
    flip,
    offset,
    shift,
  } from '@floating-ui/dom';

  let open = $state(false);
  let visible = $state(false);
  let reference;
  let floating = $state();
  let timer;

  const setOpen = (value, delay) => {
    clearTimeout(timer);
    timer = setTimeout(() => (open = value), delay);
  };
  // Render in <body> (like FloatingPortal) so page containers can't clip or offset it.
  const portal = (node) => {
    document.body.append(node);
    return () => node.remove();
  };
  const onkeydown = (e) => e.key === 'Escape' && setOpen(false, 0);

  // Position while open; fade/scale in over 150ms like the old useTransitionStyles.
  $effect(() => {
    if (!open || !floating) return;
    const stop = autoUpdate(reference, floating, () =>
      computePosition(reference, floating, {
        placement: 'top',
        middleware: [offset(10), flip(), shift({ padding: 8 })],
      }).then(({ x, y, strategy }) =>
        Object.assign(floating.style, {
          position: strategy,
          left: `${x}px`,
          top: `${y}px`,
        }),
      ),
    );
    const frame = requestAnimationFrame(() => (visible = true));
    return () => {
      stop();
      cancelAnimationFrame(frame);
      visible = false;
    };
  });
</script>

<svelte:window {onkeydown} />

<a
  href="/coshka.jpeg"
  bind:this={reference}
  aria-describedby={open ? 'cat-tooltip' : undefined}
  onmouseenter={() => setOpen(true, 80)}
  onmouseleave={() => setOpen(false, 60)}
  onfocus={() => setOpen(true, 0)}
  onblur={() => setOpen(false, 0)}
>
  🐈
</a>
{#if open}
  <div
    id="cat-tooltip"
    role="tooltip"
    bind:this={floating}
    {@attach portal}
    class="cat-tooltip"
    style="position: absolute; top: 0; left: 0"
  >
    <div
      style:opacity={visible ? 1 : 0}
      style:transform={visible ? 'scale(1)' : 'scale(0.9)'}
      style:transition="opacity 150ms, transform 150ms"
    >
      <img
        src="/coshka.jpeg"
        alt="My cat"
        width="180"
        height="240"
        class="cat-tooltip-image"
      />
    </div>
  </div>
{/if}
