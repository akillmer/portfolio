// generate inline style for deep box shadows
export default function(color, depth) {
  let style = new Array(depth)

  for (let i = 0; i < depth; i++) style[i] = `${i}px ${i + 2}px 1px ${color}`

  style.push(`${depth}px ${depth + 2}px 20px #aaa`)

  return `box-shadow: ${style.join(',')};`
}
