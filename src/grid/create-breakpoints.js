// @flow

// adapted from https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/createBreakpoints.js

// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
const keys: Array<Breakpoint> = ['xs', 'sm', 'md', 'lg', 'xl']

type Values = { [Breakpoint]: number }

const values: Values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}
const unit: string = 'px'
const step: number = 5

const up = (key: Breakpoint): string => {
  const value = typeof values[key] === 'number' ? values[key] : key
  return `@media (min-width:${value}${unit})`
}

const down = (key: Breakpoint): string => {
  const endIndex = keys.indexOf(key) + 1
  const upperbound = values[keys[endIndex]]

  if (endIndex === keys.length) {
    // xl down applies to all sizes
    return up('xs')
  }

  const value =
    typeof upperbound === 'number' && endIndex > 0 ? upperbound : key

  return `@media (max-width:${value - step / 100}${unit})`
}

const between = (start: Breakpoint, end: Breakpoint): string => {
  const endIndex = keys.indexOf(end) + 1

  if (endIndex === keys.length) {
    return up(start)
  }

  return (
    `@media (min-width:${values[start]}${unit}) and ` +
    `(max-width:${values[keys[endIndex]] - step / 100}${unit})`
  )
}

const only = (key: Breakpoint): string => {
  return between(key, key)
}

const width = (key: Breakpoint): number => {
  return values[key]
}

export default {
  keys,
  values,
  up,
  down,
  between,
  only,
  width,
}
