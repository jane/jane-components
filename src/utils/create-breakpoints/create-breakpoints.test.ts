/* eslint-env jest */

import {
  createBreakpoints as breakpoints,
  Breakpoint,
} from './create-breakpoints'

describe('breakpoints', (): void => {
  breakpoints.keys.forEach(
    (key: Breakpoint): void => {
      test(`up with ${key} returns correct media query`, (): void => {
        expect(breakpoints.up(key)).toEqual(
          `@media (min-width:${breakpoints.values[key]}px)`
        )
      })
    }
  )
  test(`down with xs returns correct media query`, (): void => {
    expect(breakpoints.down('xs')).toEqual(
      `@media (max-width:${breakpoints.values.sm}px)`
    )
  })
  test(`down with sm returns correct media query`, (): void => {
    expect(breakpoints.down('sm')).toEqual(
      `@media (max-width:${breakpoints.values.md}px)`
    )
  })
  test(`down with md returns correct media query`, (): void => {
    expect(breakpoints.down('md')).toEqual(
      `@media (max-width:${breakpoints.values.lg}px)`
    )
  })
  test(`down with lg returns correct media query`, (): void => {
    expect(breakpoints.down('lg')).toEqual(
      `@media (max-width:${breakpoints.values.xl}px)`
    )
  })
  test(`down with xl returns correct media query`, (): void => {
    expect(breakpoints.down('xl')).toEqual(
      `@media (min-width:${breakpoints.values.xs}px)`
    )
  })

  test(`between with xl breakpoint returns min width of smaller breakpoint`, (): void => {
    expect(breakpoints.between('sm', 'xl')).toEqual(breakpoints.up('sm'))
  })
  test(`between returns correct media query given two breakpoints`, (): void => {
    expect(breakpoints.between('sm', 'lg')).toEqual(
      `@media (min-width:${breakpoints.values.sm}px) and (max-width:${
        breakpoints.values.xl
      }px)`
    )
  })

  test(`only returns corect media query`, (): void => {
    expect(breakpoints.only('sm')).toEqual(
      `@media (min-width:${breakpoints.values.sm}px) and (max-width:${
        breakpoints.values.md
      }px)`
    )
  })

  test(`width returns the correct value`, (): void => {
    expect(breakpoints.width('sm')).toEqual(breakpoints.values.sm)
  })
})
