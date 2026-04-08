"use client";

import { ReactNode } from "react";
import { ReactLenis as StudioReactLenis } from "lenis/react";

export const ReactLenis = ({ children }: { children: ReactNode }) => {
  return (
    <StudioReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </StudioReactLenis>
  );
};
