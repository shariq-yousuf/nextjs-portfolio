export function isUrl(str: string) {
  try {
    new URL(str)
    return true
  } catch (err) {
    return false
  }
}
