// adapted from https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/createBreakpoints.js

// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
const keys: Array<Breakpoint> = ['xs', 'sm', 'md', 'lg', 'xl']

type Values = { [B in Breakpoint]: number }

const values: Values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}
const unit: string = 'px'

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

  const value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : 0

  return `@media (max-width:${value}${unit})`
}

const between = (start: Breakpoint, end: Breakpoint): string => {
  const endIndex = keys.indexOf(end) + 1

  if (endIndex === keys.length) {
    return up(start)
  }

  return (
    `@media (min-width:${values[start]}${unit}) and ` +
    `(max-width:${values[keys[endIndex]]}${unit})`
  )
}

const only = (key: Breakpoint): string => between(key, key)
const width = (key: Breakpoint): number => values[key]

export const createBreakpoints = {
  between,
  down,
  keys,
  only,
  up,
  values,
  width,
}
