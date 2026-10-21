import {
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
  useTransitionStyles,
} from '@floating-ui/react';
import { useState } from 'react';
import { withBase } from '@/lib/url';

const Tooltip = () => {
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: 'top',
    whileElementsMounted: autoUpdate,
    middleware: [offset(10), flip(), shift({ padding: 8 })],
  });

  const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
    duration: 150,
    initial: { opacity: 0, transform: 'scale(0.9)' },
  });

  const interactions = useInteractions([
    useHover(context, { handleClose: safePolygon(), delay: { open: 80, close: 60 } }),
    useFocus(context),
    useDismiss(context),
    useRole(context, { role: 'tooltip' }),
  ]);

  return (
    <>
      <a href={withBase('/coshka.jpeg')} ref={refs.setReference} {...interactions.getReferenceProps()}>
        🐈
      </a>
      {isMounted && (
        <FloatingPortal>
          <div ref={refs.setFloating} style={floatingStyles} {...interactions.getFloatingProps()} className="cat-tooltip">
            <div style={transitionStyles}>
              <img src={withBase('/coshka.jpeg')} alt="My cat" width={180} height={240} className="cat-tooltip-image" />
            </div>
          </div>
        </FloatingPortal>
      )}
    </>
  );
};

export default Tooltip;
