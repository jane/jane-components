// @flow

/* eslint-disable flowtype/no-weak-types */

import * as React from 'react'
import cx from 'classnames'
import Heading from 'react-styleguidist/lib/rsg-components/Heading/index'
import Styled from 'react-styleguidist/lib/rsg-components/Styled/index'
import { colors } from '../src/theme.js'

type SectionHeaderProps = {
  children: React.Node,
  classes: Object,
  deprecated?: boolean,
  depth: number,
  href: string,
  id: string,
  toolbar: React.Node,
}

const SectionHeadingRenderer = ({
  children,
  classes,
  deprecated,
  depth,
  href,
  id,
  toolbar,
}: SectionHeaderProps): React.Node => {
  const headingLevel = Math.min(6, depth)
  const sectionNameClasses = cx(classes.sectionName, {
    [classes.isDeprecated]: deprecated,
  })

  return (
    <div
      style={{
        backgroundColor: headingLevel === 1 ? colors.action : null,
        padding: headingLevel === 1 ? 30 : null,
        color: headingLevel === 1 ? colors.white : null,
      }}
      className={classes.wrapper}
    >
      <Heading
        style={{
          fontSize: headingLevel === 1 ? 20 : null,
          color: headingLevel === 1 ? colors.white : null,
        }}
        level={headingLevel}
        id={id}
      >
        <a href={href} className={sectionNameClasses}>
          {children}
        </a>
      </Heading>
      <div className={classes.toolbar}>{toolbar}</div>
    </div>
  )
}

type StylesObj = { color: Object, space: Array<*> }
const styles = ({ color, space }: StylesObj) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: space[1],
  },
  toolbar: {
    marginLeft: 'auto',
  },
  sectionName: {
    '&:hover, &:active': {
      isolate: false,
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
  isDeprecated: {
    color: color.light,
    '&, &:hover': {
      textDecoration: 'line-through',
    },
  },
})

export default Styled(styles)(SectionHeadingRenderer)
