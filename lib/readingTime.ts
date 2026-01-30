export function calculateReadingTime(blocks: any[]) {
  if (!blocks) return 0

  const text = blocks
    .filter(block => block._type === 'block')
    .map(block =>
      block.children?.map((child: any) => child.text).join('')
    )
    .join(' ')

  const words = text.split(/\s+/).length
  return Math.ceil(words / 200) // 200 WPM
}
