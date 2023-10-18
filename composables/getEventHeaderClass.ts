export const getEventHeaderClass = () => {
  // generate random tailwnd class like 'bg-primary-violet text-white' or 'bg-secondary-yellow text-white'
  const colors = ['primary', 'secondary']
  const shades = ['violet', 'yellow', 'pink', 'green']
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  const randomShade = shades[Math.floor(Math.random() * shades.length)]
  
  return `bg-${randomColor}-${randomShade} text-white`

}