// "Make it animated" — apply simple loop animations to a static image using
// Canvas frame generation + ffmpeg.wasm (reuses animatedEngine's ffmpeg).
// Generates a short looping GIF entirely in-browser.

import type { RenderedSize } from "./imageEngine";

type FFmpegModule = {
  load: (config?: object) => Promise<void>;
  writeFile: (path: string, data: Uint8Array) => Promise<void>;
  readFile: (path: string) => Promise<Uint8Array>;
  deleteFile: (path: string) => Promise<void>;
  exec: (args: string[]) => Promise<number>;
};

let ffmpegGetter: (() => Promise<FFmpegModule>) | null = null;
async function getFFmpeg(): Promise<FFmpegModule> {
  if (!ffmpegGetter) {
    // Reuse same lazy loader from animatedEngine.
    const mod = await import("./animatedEngine");
    // Access via a workaround — re-export the getter if available.
    // We'll duplicate just the getter here for isolation.
    const { FFmpeg } = await import("@ffmpeg/ffmpeg");
    const { toBlobURL } = await import("@ffmpeg/util");
    const ffmpeg = new FFmpeg() as unknown as FFmpegModule;
    const base = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";
    await ffmpeg.load({
      coreURL: await toBlobURL(`${base}/ffmpeg-core.js`, "text/javascript"),
      wasmURL: await toBlobURL(`${base}/ffmpeg-core.wasm`, "application/wasm"),
    });
    ffmpegGetter = () => Promise.resolve(ffmpeg);
    void mod; // suppress lint
  }
  return ffmpegGetter();
}

export type AnimationPreset =
  | "bounce"
  | "shake"
  | "pulse"
  | "rainbow"
  | "spin"
  | "wobble"
  | "wiggle"
  | "zoom"
  | "rave"
  | "slide"
  | "roll"
  | "glitch"
  | "heartbeat"
  | "jelly"
  | "float"
  | "hyperspin"
  | "rainbowspin";

interface FrameTransform {
  offsetX: number;
  offsetY: number;
  scale: number;
  scaleX?: number;
  scaleY?: number;
  rotation: number; // degrees
  hue: number; // degrees
}

function generateFrames(preset: AnimationPreset, totalFrames: number): FrameTransform[] {
  const frames: FrameTransform[] = [];
  for (let i = 0; i < totalFrames; i++) {
    const t = i / totalFrames; // 0..1
    const angle = t * Math.PI * 2;
    switch (preset) {
      case "bounce":
        frames.push({ offsetX: 0, offsetY: -Math.abs(Math.sin(angle)) * 0.15, scale: 1, rotation: 0, hue: 0 });
        break;
      case "shake":
        frames.push({ offsetX: Math.sin(angle * 3) * 0.06, offsetY: 0, scale: 1, rotation: Math.sin(angle * 3) * 5, hue: 0 });
        break;
      case "pulse":
        frames.push({ offsetX: 0, offsetY: 0, scale: 1 + Math.sin(angle) * 0.12, rotation: 0, hue: 0 });
        break;
      case "rainbow":
        frames.push({ offsetX: 0, offsetY: 0, scale: 1, rotation: 0, hue: t * 360 });
        break;
      case "spin":
        frames.push({ offsetX: 0, offsetY: 0, scale: 1, rotation: t * 360, hue: 0 });
        break;
      case "wobble":
        frames.push({
          offsetX: Math.sin(angle) * 0.05,
          offsetY: 0,
          scale: 1 + Math.abs(Math.sin(angle)) * 0.05,
          rotation: Math.sin(angle) * 8,
          hue: 0,
        });
        break;
      case "wiggle":
        frames.push({ offsetX: 0, offsetY: 0, scale: 1, rotation: Math.sin(angle * 3) * 10, hue: 0 });
        break;
      case "zoom":
        frames.push({ offsetX: 0, offsetY: 0, scale: 1 + Math.sin(angle) * 0.25, rotation: 0, hue: 0 });
        break;
      case "rave":
        frames.push({
          offsetX: Math.sin(angle * 4) * 0.07,
          offsetY: Math.cos(angle * 5) * 0.07,
          scale: 1 + Math.sin(angle * 3) * 0.08,
          rotation: Math.sin(angle * 4) * 6,
          hue: t * 360,
        });
        break;
      case "slide":
        frames.push({ offsetX: Math.sin(angle) * 0.2, offsetY: 0, scale: 1, rotation: 0, hue: 0 });
        break;
      case "roll":
        frames.push({
          offsetX: Math.sin(angle) * 0.1,
          offsetY: Math.cos(angle) * 0.1,
          scale: 1,
          rotation: t * 360,
          hue: 0,
        });
        break;
      case "glitch":
        frames.push({
          offsetX: (Math.sin(angle * 7) > 0.6 ? 0.05 : 0) * (Math.sin(angle * 13) > 0 ? 1 : -1),
          offsetY: (Math.cos(angle * 9) > 0.6 ? 0.05 : 0) * (Math.cos(angle * 11) > 0 ? 1 : -1),
          scale: Math.sin(angle * 5) > 0.8 ? 0.9 : 1.05,
          rotation: Math.sin(angle * 15) > 0.7 ? 8 : -8,
          hue: 0,
        });
        break;
      case "heartbeat": {
        const pulse = t < 0.3 ? Math.sin((t / 0.3) * Math.PI) * 0.15 : t < 0.6 ? Math.sin(((t - 0.3) / 0.3) * Math.PI) * 0.08 : 0;
        frames.push({ offsetX: 0, offsetY: 0, scale: 1 + pulse, rotation: 0, hue: 0 });
        break;
      }
      case "jelly": {
        const jellyX = 1 + Math.sin(angle) * 0.15;
        const jellyY = 1 - Math.sin(angle) * 0.15;
        frames.push({ offsetX: 0, offsetY: 0, scale: 1, scaleX: jellyX, scaleY: jellyY, rotation: 0, hue: 0 });
        break;
      }
      case "float":
        frames.push({
          offsetX: Math.sin(angle) * 0.05,
          offsetY: -0.05 + Math.cos(angle) * 0.05,
          scale: 1,
          rotation: Math.sin(angle) * 4,
          hue: 0,
        });
        break;
      case "hyperspin":
        frames.push({ offsetX: 0, offsetY: 0, scale: 1, rotation: t * 360 * 3, hue: 0 });
        break;
      case "rainbowspin":
        frames.push({ offsetX: 0, offsetY: 0, scale: 1, rotation: t * 360, hue: t * 360 });
        break;
    }
  }
  return frames;
}

/**
 * Generate an animated GIF from a static image by rendering frames with
 * transform offsets, then stitching them with ffmpeg.
 */
export async function makeAnimated(
  file: Blob,
  targetSizes: number[],
  preset: AnimationPreset,
  onProgress?: (msg: string) => void,
): Promise<{ sizes: RenderedSize[] }> {
  onProgress?.("Loading animation engine…");
  const ff = await getFFmpeg();

  const fps = 20;
  const totalFrames = 20; // 1-second loop at 20fps
  const transforms = generateFrames(preset, totalFrames);

  // Decode source image.
  const bmp = await createImageBitmap(file);

  // Render frames for the largest target size (then we'll scale down via ffmpeg).
  const largest = Math.max(...targetSizes);
  const frameSize = largest;
  onProgress?.("Rendering animation frames…");
  const framePromises: Promise<Uint8Array>[] = [];

  for (let i = 0; i < totalFrames; i++) {
    const f = transforms[i];
    const canvas = document.createElement("canvas");
    canvas.width = frameSize;
    canvas.height = frameSize;
    const ctx = canvas.getContext("2d")!;

    ctx.clearRect(0, 0, frameSize, frameSize);
    ctx.save();
    ctx.translate(frameSize / 2 + f.offsetX * frameSize, frameSize / 2 + f.offsetY * frameSize);
    ctx.rotate((f.rotation * Math.PI) / 180);
    ctx.scale(f.scaleX ?? f.scale, f.scaleY ?? f.scale);

    const ratio = bmp.width / bmp.height;
    let dw = frameSize * 0.8;
    let dh = frameSize * 0.8;
    if (ratio > 1) dh = dw / ratio;
    else dw = dh * ratio;

    ctx.drawImage(bmp, -dw / 2, -dh / 2, dw, dh);
    ctx.restore();

    // Apply hue rotation via manual pixel manipulation (ctx.filter is
    // not supported in Safari / WebKit, so we do it ourselves).
    if (f.hue !== 0) {
      const imgData = ctx.getImageData(0, 0, frameSize, frameSize);
      const d = imgData.data;
      const hueDeg = f.hue;
      for (let px = 0; px < d.length; px += 4) {
        if (d[px + 3] === 0) continue; // skip fully transparent
        const r = d[px] / 255, g = d[px + 1] / 255, b = d[px + 2] / 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        const l = (max + min) / 2;
        if (max === min) continue; // grey — no hue to shift
        const delta = max - min;
        const s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
        let h = 0;
        if (max === r) h = ((g - b) / delta + (g < b ? 6 : 0)) / 6;
        else if (max === g) h = ((b - r) / delta + 2) / 6;
        else h = ((r - g) / delta + 4) / 6;
        h = (h + hueDeg / 360) % 1;
        // HSL → RGB
        const hue2rgb = (p: number, q: number, t: number) => {
          if (t < 0) t += 1; if (t > 1) t -= 1;
          if (t < 1 / 6) return p + (q - p) * 6 * t;
          if (t < 1 / 2) return q;
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        };
        const q2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p2 = 2 * l - q2;
        d[px] = Math.round(hue2rgb(p2, q2, h + 1 / 3) * 255);
        d[px + 1] = Math.round(hue2rgb(p2, q2, h) * 255);
        d[px + 2] = Math.round(hue2rgb(p2, q2, h - 1 / 3) * 255);
      }
      ctx.putImageData(imgData, 0, 0);
    }

    framePromises.push(
      new Promise<Uint8Array>((resolve) => {
        canvas.toBlob((blob) => {
          if (!blob) {
            resolve(new Uint8Array());
            return;
          }
          blob.arrayBuffer().then((buf) => {
            resolve(new Uint8Array(buf));
          });
        }, "image/png");
      })
    );
  }

  const frameBlobs = await Promise.all(framePromises);
  bmp.close?.();

  // Write frames to ffmpeg vfs.
  for (let i = 0; i < frameBlobs.length; i++) {
    await ff.writeFile(`frame_${String(i + 1).padStart(4, "0")}.png`, frameBlobs[i]);
  }

  onProgress?.("Encoding animated GIFs…");

  // Construct single ffmpeg complex filter command to process all sizes in one run.
  let filterComplex = "";
  if (targetSizes.length === 1) {
    const size = targetSizes[0];
    filterComplex = `[0:v]fps=${fps},scale=${size}:${size}:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=128:reserve_transparent=1[p];[s1][p]paletteuse=dither=bayer:bayer_scale=5:alpha_threshold=128[out_${size}]`;
  } else {
    const filterParts: string[] = [];
    const splitStreams: string[] = [];
    for (let i = 0; i < targetSizes.length; i++) {
      splitStreams.push(`[v${i}]`);
    }
    filterParts.push(`[0:v]split=${targetSizes.length}${splitStreams.join("")}`);

    for (let i = 0; i < targetSizes.length; i++) {
      const size = targetSizes[i];
      const instream = `[v${i}]`;
      const outstream = `[out_${size}]`;
      filterParts.push(
        `${instream}fps=${fps},scale=${size}:${size}:flags=lanczos,split[s0_${size}][s1_${size}];` +
        `[s0_${size}]palettegen=max_colors=128:reserve_transparent=1[p_${size}];` +
        `[s1_${size}][p_${size}]paletteuse=dither=bayer:bayer_scale=5:alpha_threshold=128${outstream}`
      );
    }
    filterComplex = filterParts.join(";");
  }

  const args = [
    "-framerate", String(fps),
    "-i", "frame_%04d.png",
    "-filter_complex", filterComplex,
  ];

  for (const size of targetSizes) {
    args.push("-map", `[out_${size}]`, "-loop", "0", `anim_${size}.gif`);
  }

  await ff.exec(args);

  const sizes: RenderedSize[] = [];
  for (const size of targetSizes) {
    const out = `anim_${size}.gif`;
    const data = await ff.readFile(out);
    const bytes = new Uint8Array(data.length);
    bytes.set(data);
    const blob = new Blob([bytes], { type: "image/gif" });
    sizes.push({ size, blob, url: URL.createObjectURL(blob), bytes: blob.size });
    await ff.deleteFile(out).catch(() => {});
  }

  // Cleanup frames.
  for (let i = 0; i < frameBlobs.length; i++) {
    await ff.deleteFile(`frame_${String(i + 1).padStart(4, "0")}.png`).catch(() => {});
  }

  return { sizes };
}
