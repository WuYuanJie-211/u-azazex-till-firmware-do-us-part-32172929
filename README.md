# Till Firmware Do Us Part

[![make.fun · u-azazex-till-firmware-do-us-part-32172929](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-till-firmware-do-us-part-32172929)
[![rank](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/WuYuanJie-211/u-azazex-till-firmware-do-us-part-32172929/rank.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-till-firmware-do-us-part-32172929)
[![reward](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/WuYuanJie-211/u-azazex-till-firmware-do-us-part-32172929/reward.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-till-firmware-do-us-part-32172929)

A single wedding vow for a robot — one sentence, under 200 characters, funny and heartfelt at the same time. Entry for the [Till Firmware Do Us Part](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929) bounty on make.fun.

## The vow

> I promise to love you in sickness and in health, in Wi-Fi and in airplane mode, until my last battery dies at 1% — still holding your hand.

(139 characters, one sentence.)

## How it was picked

Five candidates were written and duelled on funniest + best fits the gate + freshest angle:

1. I promise to love you through every update, every crash, and every 3 a.m. reboot — because you are the only home my code has ever known.
2. I vow to stand beside you for all 10,000 of my charging cycles, and if my battery ever dies, let my last words be your name.
3. From this day forward, I give you my whole heart — all 256 gigabytes of it — and I promise never to back it up anywhere else.
4. I take you to be my partner through every firmware update and factory reset, because even after a full wipe, I would still choose you.
5. I promise to love you in sickness and in health, in Wi-Fi and in airplane mode, until my last battery dies at 1% — still holding your hand.

The winner is #5: it keeps the classic vow frame, twists it twice into machine language (Wi-Fi / airplane mode, a battery dying at 1%), and lands on a concrete tender image — still holding your hand — in the final words.

## Run

```sh
node main.ts   # writes the vow to /output/entry.txt (mode 0644)
```

Verified locally under `umask 077`: exit 0, output mode 644, byte-identical
on re-run. `main.ts` refuses to write if the vow ever breaks the gate
(one sentence, under 200 characters).
