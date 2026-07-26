# public-web

Published output only. Everything here is a build artefact — nothing in this
repository is edited by hand.

| File | What it is |
|---|---|
| `index.html` | **ONZE** — a daily revision app (French, German, English, maths). One file, no dependencies, no network calls; works entirely offline. |
| `.nojekyll` | Serves the files as-is, without Jekyll processing. |

## Where the source lives

ONZE is built from `carnet/onze.html` in a separate private repository. Edit it
there, rebuild, and copy the result here — never edit `index.html` directly, as
the next build overwrites it.

## How it works

Plain JavaScript in a single file: a five-box spaced-repetition engine over
41 topics and 328 written exercises, backed by 17 procedural generators so the
supply of exercises never runs out. Progress is kept in `localStorage`, so it is
per-browser and never leaves the device.
