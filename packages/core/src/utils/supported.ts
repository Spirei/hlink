import micromatch from 'micromatch'

function supported(path: string, include: string[], exclude: string[]) {
  return micromatch.isMatch(path, include, {
    ignore: exclude,
  })
}

export default supported
