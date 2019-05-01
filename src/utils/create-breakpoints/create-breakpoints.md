`import breakpoints from 'jane-components/lib/utils/breakpoints'`

You can access the following from breakpoints:
- keys: array of breakpoint keys (see next line),
- values: the value of the breakpoints,
  - xs: 0,
  - sm: 600,
  - md: 960,
  - lg: 1280,
  - xl: 1920,
- up: `(Key) => string`
  - returns a media query string for a breakpoint for all queries above,
- down: `(Key) => string`
  - returns a media query string for a breakpoint for all queries below,
- between: `(Key, Key) => string`
  - returns a media query string given two breakpoints,
- only: `(Key) => string`
  - returns a media query string for a breakpoint only at that value,
- width: `(Key) => string`
  - utility function to access a value at a given key,
