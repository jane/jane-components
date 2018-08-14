// @flow

// taken from https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Grid/Grid.js
// and converted to use styled components and be independant of Material UI's theme
// see MUI docs for grid: https://material-ui.com/layout/grid/

import * as React from 'react'
import styled from 'styled-components'
import { createBreakpoints as breakpoints } from '../utils'

const GUTTERS = [0, 8, 16, 24, 32, 40]
export type Gutters = 0 | 8 | 16 | 24 | 32 | 40

const GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
export type GridSizes =
  | 'auto'
  | true
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12

export type GridProps = {
  /**
   * Defines the `align-content` style property.
   * It's applied for all screen sizes.
   */
  alignContent:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around',
  /**
   * Defines the `align-items` style property.
   * It's applied for all screen sizes.
   */
  alignItems: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline',
  /**
   * The content of the component.
   */
  children: React.Node,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: string | React.Node,
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   */
  container: boolean,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   */
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse',
  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   */
  item: boolean,
  /**
   * Defines the `justify-content` style property.
   * It is applied for all screen sizes.
   */
  justify:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly',
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `lg` breakpoint and wider screens if not overridden.
   */
  lg?: GridSizes,
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `md` breakpoint and wider screens if not overridden.
   */
  md?: GridSizes,
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `sm` breakpoint and wider screens if not overridden.
   */
  sm?: GridSizes,
  /**
   * Defines the space between the type `item` component.
   * It can only be used on a type `container` component.
   */
  spacing: Gutters,
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   */
  wrap: 'nowrap' | 'wrap' | 'wrap-reverse',
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `xl` breakpoint and wider screens.
   */
  xl?: GridSizes,
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for all the screen sizes with the lowest priority.
   */
  xs?: GridSizes,
  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   */
  zeroMinWidth: boolean,
}

/**
 * Generates a style object for each gridSize (0 - 12)
 */
const generateGrid = (): { [GridSizes]: string } => {
  const styles = {}
  GRID_SIZES.forEach(
    (gridSize: GridSizes): void => {
      const size = String(gridSize)

      if (gridSize === true) {
        // For the auto layouting
        styles[size] = `flex-basis: 0; flex-grow: 1; max-width: '100%';`
        return
      }

      if (gridSize === 'auto') {
        styles[size] = `flex-basis: auto; flex-grow: 0; max-width: none;`
        return
      }

      // Only keep 6 significant numbers.
      const width = `${Math.round((gridSize / 12) * 10e6) / 10e4}%`

      // Close to the bootstrap implementation:
      // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41
      styles[size] = `flex-basis: ${width}; flex-grow: 0; max-width: ${width};`
    }
  )
  return styles
}

const generatedGrid = generateGrid()

/**
 * Generates a gutter styles object for the given spacing prop
 */
const generateGutter = (): { [Gutters]: string } => {
  const styles = {}

  GUTTERS.forEach(
    (spacing: Gutters): void => {
      if (spacing === 0) {
        // Skip the default style.
        return
      }

      styles[spacing] = `margin: ${-spacing /
        2}px; width: calc(100% + ${spacing}px); & > * {padding: ${spacing /
        2}px;}`
    }
  )

  return styles
}

const generatedGutters = generateGutter()

const generateCSS = ({
  container = false,
  item = false,
  zeroMinWidth = false,
  direction = 'row',
  wrap = 'wrap',
  alignItems = 'stretch',
  alignContent = 'stretch',
  justify = 'flex-start',
  spacing = 0,
  xs,
  sm,
  md,
  lg,
  xl,
}: GridProps): string => `
flex: '0 1 auto';
display: flex;
${
  container /* Styles applied to the root element if `container={true}`. */
    ? `
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  `
    : ''
}
${
  item /* Styles applied to the root element if `item={true}`. */
    ? `
  box-sizing: border-box;
  margin: 0;
  `
    : ''
}
${
  zeroMinWidth /* Styles applied to the root element if `zeroMinWidth={true}`. */
    ? `
  min-width: 0;
  `
    : ''
}
${
  direction /* flex-direction styles applied to the root element. */
    ? `
  flex-direction: ${direction};
  `
    : ''
}
${
  wrap === 'nowrap' /* Styles applied to the root element if `wrap="nowrap"`. */
    ? `
  flex-wrap: nowrap;
  `
    : ''
}
${
  wrap ===
  'wrap-reverse' /* Styles applied to the root element if `wrap="reverse"`. */
    ? `
  flex-wrap: wrap-reverse;
  `
    : ''
}
${
  alignItems /* align-items styles applied to the root element */
    ? `
  align-items: ${alignItems};
  `
    : ''
}
${
  alignContent /* align-content styles applied to the root element */
    ? `
  align-content: ${alignContent}
  `
    : ''
}
${
  justify /* justify-content styles applied to the root element */
    ? `
  justify-content: ${justify};
  `
    : ''
}
${container && spacing !== 0 ? generatedGutters[spacing] : ''}
${xs ? `${breakpoints.up('xs')} { ${generatedGrid[xs]}}` : ''}
${sm ? `${breakpoints.up('sm')} { ${generatedGrid[sm]}}` : ''}
${md ? `${breakpoints.up('md')} { ${generatedGrid[md]}}` : ''}
${lg ? `${breakpoints.up('lg')} { ${generatedGrid[lg]}}` : ''}
${xl ? `${breakpoints.up('xl')} { ${generatedGrid[xl]}}` : ''}
`
const Grid = styled.div`
  ${(props: GridProps): string => generateCSS(props)};
`

export default Grid
