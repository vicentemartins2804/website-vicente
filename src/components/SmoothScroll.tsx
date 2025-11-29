import React, { useEffect } from 'react';

type Props = { children: React.ReactNode };

export function SmoothScroll({ children }: Props) {
  useEffect(() => {
    const headerSelector = '.navbar';

    function getHeaderOffset() {
      const header = document.querySelector(headerSelector) as HTMLElement | null;
      // add a small margin so the element isn't flush with header
      return header ? header.getBoundingClientRect().height + 12 : 0;
    }

    function findAnchor(target: EventTarget | null) {
      if (!(target instanceof Element)) return null;
      return target.closest('a[href^="#"]') as HTMLAnchorElement | null;
    }

    function scrollToHash(hash: string) {
      if (!hash) return;
      const id = hash.startsWith('#') ? hash.slice(1) : hash;
      const el = document.getElementById(id) || document.getElementsByName(id)[0] as HTMLElement | undefined;
      if (!el) return;
      const offset = getHeaderOffset();
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }

    function onClick(e: MouseEvent) {
      const a = findAnchor(e.target);
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (!href.startsWith('#')) return; // ignore external anchors

      // prevent default jump
      e.preventDefault();

      // update URL hash without immediate jump
      if (history.pushState) {
        history.pushState(null, '', href);
      } else {
        location.hash = href;
      }

      scrollToHash(href);
    }

    function onHashChange() {
      // when user presses back/forward
      scrollToHash(location.hash);
    }

    document.addEventListener('click', onClick);
    window.addEventListener('hashchange', onHashChange);

    // on initial load with hash
    if (location.hash) {
      // delay slightly to allow layout to settle
      setTimeout(() => scrollToHash(location.hash), 50);
    }

    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  return <>{children}</>;
}

