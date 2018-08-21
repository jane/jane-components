// @flow

/* eslint-env jest */

import * as React from 'react'
import { create } from '../test-utils'
import Grid, { GUTTERS, GRID_SIZES } from './grid'

const DIRECTION = ['row', 'row-reverse', 'column', 'column-reverse']
const ALIGN_CONTENT = [
  'stretch',
  'center',
  'flex-start',
  'flex-end',
  'space-between',
  'space-around',
]
const ALIGN_ITEMS = ['flex-start', 'center', 'flex-end', 'stretch', 'baseline']
const WRAP = ['nowrap', 'wrap', 'wrap-reverse']
const JUSTIFY = [
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
]

/* eslint-disable flowtype/require-parameter-type */
describe('grid', (): void => {
  it('renders container', (): void => {
    expect(create(<Grid container />)).toMatchSnapshot()
  })

  it('handles gutters', (): void => {
    GUTTERS.forEach(
      (g): void => {
        expect(create(<Grid spacing={g} />)).toMatchSnapshot()
      }
    )
  })

  it('handles zeroMinWidth', (): void => {
    expect(create(<Grid zeroMinWidth />)).toMatchSnapshot()
  })

  it('handles justify', (): void => {
    JUSTIFY.forEach(
      (j): void => {
        expect(create(<Grid justify={j} />)).toMatchSnapshot()
      }
    )
  })

  it('handles item', (): void => {
    expect(
      <Grid container>
        <Grid item />
      </Grid>
    ).toMatchSnapshot()
  })

  it('handles direction', (): void => {
    DIRECTION.forEach(
      (d): void => {
        expect(create(<Grid direction={d} />)).toMatchSnapshot()
      }
    )
  })

  it('handles alignItems', (): void => {
    ALIGN_ITEMS.forEach(
      (a): void => {
        expect(create(<Grid alignItems={a} />)).toMatchSnapshot()
      }
    )
  })

  it('handles alignContent', (): void => {
    ALIGN_CONTENT.forEach(
      (a): void => {
        expect(create(<Grid alignContent={a} />)).toMatchSnapshot()
      }
    )
  })

  it('handles wrap', (): void => {
    WRAP.forEach(
      (w): void => {
        expect(create(<Grid wrap={w} />)).toMatchSnapshot()
      }
    )
  })

  it('handles grid sizes', (): void => {
    GRID_SIZES.forEach(
      (s): void => {
        expect(create(<Grid xl={s} />)).toMatchSnapshot()
        expect(create(<Grid lg={s} />)).toMatchSnapshot()
        expect(create(<Grid md={s} />)).toMatchSnapshot()
        expect(create(<Grid sm={s} />)).toMatchSnapshot()
        expect(create(<Grid xs={s} />)).toMatchSnapshot()
      }
    )
  })
})
