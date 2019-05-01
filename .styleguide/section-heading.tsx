import * as React from 'react'
import cx from 'classnames'
import Heading from 'react-styleguidist/lib/client/rsg-components/Heading/index'
import Styled from 'react-styleguidist/lib/client/rsg-components/Styled/index'
import { colors } from '../src/theme'

type Classes = {
  isDeprecated: string
  sectionName: string
  toolbar: string
  wrapper: string
}

type SectionHeaderProps = {
  children: React.ReactElement
  classes: Classes
  deprecated?: boolean
  depth: number
  href: string
  id: string
  toolbar: React.ReactElement
}

const SectionHeadingRenderer = ({
  children,
  classes,
  deprecated,
  depth,
  href,
  id,
  toolbar,
}: SectionHeaderProps): React.ReactElement => {
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

type Color = {
  light: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StylesObj = { color: Color; space: Array<any> }
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
