import insertScript from './insertScript'

export default function jsonp (url, options = {}) {
  // TODO: Promise polyfill
  return new Promise((resolve, reject) => {
    const {
      callback = '_callback',
      responseType = 'json',
      timeout = 0
    } = options
    const callbackName = `_callback${Date.now()}`
    const hasQuestion = url.indexOf('?') > -1
    let src = url
    if (hasQuestion) {
      src += '&'
    } else {
      src += '?'
    }
    src += `${encodeURIComponent(callback)}=${encodeURIComponent(callbackName)}`

    let timerId
    if (timeout) {
      timerId = setTimeout(() => {
        reject(new Error(`the request is timeout ${timeout}ms`))
      }, timeout)
    }

    window[callbackName] = (text) => {
      if (timerId) clearTimeout(timerId)
      if (responseType === 'json') {
        try {
          resolve(JSON.parse(text))
        } catch (err) {
          reject(err)
        }
      } else {
        resolve(text)
      }
    }

    insertScript(src, {
      onerror (err) {
        reject(err)
      }
    })
  })
}
