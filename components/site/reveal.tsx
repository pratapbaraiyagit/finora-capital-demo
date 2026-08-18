'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'span';
  once?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
  once = true,
  ...props
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const Tag = as as any;

  return (
    <Tag
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}
