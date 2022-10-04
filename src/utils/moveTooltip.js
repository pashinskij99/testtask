function moveTooltip () {
  try {
    const [e, target] = arguments
    let x = e.clientX
    let y = e.clientY
    target.style.top = (y + 20) + 'px'
    target.style.left = (x + 20) + 'px'
  } catch (e) {}
}

export default moveTooltip