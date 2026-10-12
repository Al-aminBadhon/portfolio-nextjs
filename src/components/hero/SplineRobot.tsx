"use client";

import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";

/** Free Spline scenes inject a logo overlay through the render pipeline. */
function clearBuiltWithWatermark(app: Application) {
  const root = app as Application & {
    _renderer?: {
      pipeline?: {
        setWatermark?: (t: null) => void;
        logoOverlayPass?: { enabled: boolean };
      };
    };
  };
  const pipeline = root._renderer?.pipeline;
  if (!pipeline) return;
  pipeline.setWatermark?.(null);
  if (pipeline.logoOverlayPass) {
    pipeline.logoOverlayPass.enabled = false;
  }
}

function makeBackgroundTransparent(app: Application) {
  app.setBackgroundColor("transparent");
  const canvas = (app as Application & { canvas?: HTMLCanvasElement }).canvas;
  if (canvas) {
    canvas.style.background = "transparent";
  }
}

export default function SplineRobot({ scene }: { scene: string }) {
  return (
    <div className="spline-robot relative h-full w-full bg-transparent">
      {/* Render at native size (no CSS upscale) so the robot stays crisp. */}
      <Spline
        scene={scene}
        onLoad={(app: Application) => {
          try {
            app.setGlobalEvents(true);
          } catch {
            // Optional: some scenes do not expose global mouse events.
          }
          makeBackgroundTransparent(app);
          clearBuiltWithWatermark(app);

          const poll = window.setInterval(() => {
            makeBackgroundTransparent(app);
            clearBuiltWithWatermark(app);
          }, 400);
          window.setTimeout(() => window.clearInterval(poll), 2500);
        }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      />
    </div>
  );
}
