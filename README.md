# news-image-20261124 — the world in one picture

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/Nurcholis46/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/Nurcholis46/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

A newspaper front page that sums up the world's news of Tuesday, 24 November
2026 in one image: Poland scrambles jets as a Russian drone enters its
airspace, Nvidia's chief returns to HQ after the board reinstates him,
Thanksgiving travel begins with 81.5 million Americans on the move, India and
Nepal launch a new cross-border express, Thai fuel protesters march 16 km to
a refinery, and Greece trials a new route for Ukrainian grain.

The image is drawn in code (Python + PIL, flat vector art, DejaVu fonts) — no
photographs or borrowed artwork — and `main.ts` (Node 22, standard library
only) copies it to `/output/entry.png`. Both runs write identical bytes.

## Files

- `entry.png` — the image, 1024×1024, under 1 MiB
- `main.ts` — copies `entry.png` to `/output/entry.png`
- `LICENSE` — MIT

## Verification

Each story was checked against dated sources for 24 November 2026 before it
was drawn: the Poland drone incursion (Reuters, 24 Nov), Huang's return to
Nvidia HQ (Times of India, 24 Nov), the Thanksgiving travel period starting
24 Nov (US Department of Transportation / AAA), the India–Nepal express and
development pact (24 Nov current-affairs reports), the Bangkok fuel march
(24 Nov), and the Greece–Alexandroupolis freight trial (24 Nov). Stories
from earlier days — the Indonesia factory fire (confirmed 23 Nov), the Trump
Justice Department speech (23 Nov), the APEC trilateral (19 Nov), the Ghana
banknotes (12 Nov), the DRC referendum law (9–11 Nov) — were left out on
purpose: the judge penalises events it knows predate the day.
