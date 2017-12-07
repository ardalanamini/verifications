declare module '*.json' {
  const value: {
    [key: string]: any
  } | any

  export = value
}
