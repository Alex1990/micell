import hasOwn from '../_internal/hasOwn'
import isObject from '../lang/isObject'
import { Query } from './types'

export default function stringify (query: Query): string {
  const pairs = []

  if (isObject(query)) {
    for (const name in query) {
      if (hasOwn(query, name)) {
        const value = query[name]
        const encodedName = encodeURIComponent(name)
        if (Array.isArray(value)) {
          value.forEach(v => {
            pairs.push(`${encodedName}=${encodeURIComponent(v)}`)
          })
        } else {
          pairs.push(`${encodedName}=${encodeURIComponent(value)}`)
        }
      }
    }
  }

  return pairs.join('&')
}
