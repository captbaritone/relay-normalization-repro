# Relay Normalization Perf Repro

Trying to reproduce the issue filed here: https://github.com/facebook/relay/issues/4649

To run:

```
pnpm install
pnpm run test
```

Results on my M1 Mac Laptop with Node/V8

```
Normalized into 2750 records.
Execution time: 46.854916006326675 ms
```
