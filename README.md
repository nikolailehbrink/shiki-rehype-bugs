# Demo project for bugs with @shikijs/rehype

This is a demo project to reproduce the bugs with @shikijs/rehype that I have with a project in remix.

## Bug 1: options.meta only outputs \_\_raw

The first bug is that the `options.meta` only outputs the `__raw` string and not the actual meta key value pairs. This is a problem because I have to parse them manually now.

### Steps to reproduce

1. Go to /test -> see the code block
2. Open the console, where options.meta is logged

## Bug 2: postprocess in transformer is not working/called

The second bug is that the `postprocess` function in the transformer is not working or not called. When I log something from the function it is never shown in the console.

### Steps to reproduce

1. Go to /test -> see the code block
2. Open the console, where the postprocess function should be logged, nothing is there.
