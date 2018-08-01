// @flow

export const fromTheme = (key: string) => ({
  theme,
}: {
  theme: Theme,
}): string => theme[key]
