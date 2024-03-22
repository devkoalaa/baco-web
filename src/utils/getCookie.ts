export function getCookie(cookieName: string, type: string) {
  const cookies = document.cookie.split(';')

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i]
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1)
    }
    if (cookie.indexOf(cookieName + '=') === 0) {
      const cookieValue = cookie.substring(cookieName.length + 1, cookie.length)

      if (cookieValue === 'undefined' && type === 'boolean') {
        return 'false'
      }

      return cookieValue
    }
  }
  return '{}'
}
