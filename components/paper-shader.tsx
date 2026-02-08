"use client";

import { HalftoneDots } from "@paper-design/shaders-react";

export default function PaperShader() {
  return (
    <div className="paper-shader" aria-hidden="true">
      <HalftoneDots
        // Keep the shader static and subtle; the CSS paper base does the heavy lifting.
        speed={0}
        frame={0}
        image=""
        colorBack="#00000000"
        colorFront="#0000001f"
        size={0.82}
        radius={1.35}
        contrast={0.85}
        originalColors={false}
        inverted={false}
        grainMixer={0.12}
        grainOverlay={0.18}
        grainSize={0.55}
        grid="hex"
        type="soft"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.75,
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
}
