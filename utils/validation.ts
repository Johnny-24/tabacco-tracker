export const validationEmail = (email: string): string => {
  const regexp = /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/gm
  const res = regexp.test(email)
  if (!res) return 'Введите корректный E-mail'
  return ''
}
