export const spaceKeys = [
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
]

export const colorKeys = ['color', 'backgroundColor']

export const pickProps = (props, propsList) =>
  Object.entries(props).reduce(
    (acc, [key, prop]) => ({
      ...acc,
      ...(propsList.includes(key) ? { [key]: prop } : {}),
    }),
    {}
  )

export const omitProps = (props, propsList) =>
  Object.entries(props).reduce(
    (acc, [key, prop]) => ({
      ...acc,
      ...(!propsList.includes(key) ? { [key]: prop } : {}),
    }),
    {}
  )

export const pickSpaceProps = (props) => pickProps(props, spaceKeys)

export const omitSpaceProps = (props) => omitProps(props, spaceKeys)
