#!/usr/bin/env python3
from pathlib import Path
import math
import struct
import wave

ROOT = Path(__file__).resolve().parents[1]
VISUAL = ROOT / "assets" / "visual" / "counter_window_flash.svg"
AUDIO = ROOT / "assets" / "audio" / "counter_hit_prototype.wav"


def write_visual() -> None:
    VISUAL.parent.mkdir(parents=True, exist_ok=True)
    VISUAL.write_text(
        """<svg id="counter-window-flash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <title>Counter Window Flash Prototype</title>
  <desc>Prototype visual feedback for a successful parry to counter window.</desc>
  <circle cx="64" cy="64" r="52" fill="none" stroke="#f5f7ff" stroke-width="8"/>
  <circle cx="64" cy="64" r="34" fill="none" stroke="#29d6a3" stroke-width="6"/>
  <path d="M22 64h84M64 22v84" stroke="#ffd166" stroke-width="5" stroke-linecap="round"/>
  <path d="M40 86l48-48" stroke="#f5f7ff" stroke-width="7" stroke-linecap="round"/>
</svg>
""",
        encoding="utf-8",
    )


def write_audio() -> None:
    AUDIO.parent.mkdir(parents=True, exist_ok=True)
    sample_rate = 44100
    duration_seconds = 0.24
    frame_count = int(sample_rate * duration_seconds)
    with wave.open(str(AUDIO), "wb") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(sample_rate)
        frames = bytearray()
        for i in range(frame_count):
            t = i / sample_rate
            envelope = max(0.0, 1.0 - t / duration_seconds)
            click = math.sin(2.0 * math.pi * 880.0 * t)
            body = math.sin(2.0 * math.pi * 1320.0 * t) * 0.45
            sample = int(22000 * envelope * (click + body) / 1.45)
            frames.extend(struct.pack("<h", sample))
        wav.writeframes(frames)


def main() -> None:
    write_visual()
    write_audio()
    print(f"Wrote {VISUAL.relative_to(ROOT)}")
    print(f"Wrote {AUDIO.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
