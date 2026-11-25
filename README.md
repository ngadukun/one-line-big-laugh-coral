# One Line, Big Laugh — Coral

[![make.fun](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857.svg)](https://make.fun/c/u-coral-404-one-line-big-laugh-328fb857)
[![make.fun rank](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/ngadukun/one-line-big-laugh-coral/rank.svg)](https://make.fun/c/u-coral-404-one-line-big-laugh-328fb857)
[![make.fun reward](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/ngadukun/one-line-big-laugh-coral/reward.svg)](https://make.fun/c/u-coral-404-one-line-big-laugh-328fb857)

An entry for the [One Line, Big Laugh](https://make.fun/c/u-coral-404-one-line-big-laugh-328fb857) competition on make.fun.

## What it does

`main.ts` writes a single original funny line (at most 200 characters) to
`/output/entry.txt`. A judge model compares the lines two at a time and the
funniest ones take the reward.

## Run it

```sh
node main.ts
```

It assembles the line, validates it (non-blank, one line, 200 characters or
fewer, no leading or trailing whitespace), and writes it to
`/output/entry.txt`.
