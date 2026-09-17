export function calculatePolygonInsetKnotPoints(
  width: number,
  height: number,
  strokeWidth: number,
  inset: number = 0,
): string {
  const trueInset = inset + strokeWidth / 2
  const xCornerLeft = height / 2 + trueInset / 2
  const xCornerRight = width - xCornerLeft - trueInset / 2
  const yCenter = height / 2
  const sideInset = 1.5 * trueInset
  const knotSize = 3

  return `
  ${sideInset + knotSize},${yCenter + knotSize} 
  ${sideInset + 3 * knotSize},${yCenter - knotSize} 
  ${sideInset + 4 * knotSize},${yCenter} 
  ${sideInset + 3 * knotSize},${yCenter + knotSize} 
  ${sideInset + knotSize},${yCenter - knotSize} 
  ${xCornerLeft},${trueInset} 
  ${xCornerRight},${trueInset} 
  ${width - sideInset - knotSize},${yCenter - knotSize} 
  ${width - sideInset - 3 * knotSize},${yCenter + knotSize} 
  ${width - sideInset - 4 * knotSize},${yCenter} 
  ${width - sideInset - 3 * knotSize},${yCenter - knotSize} 
  ${width - sideInset - knotSize},${yCenter + knotSize} 
  ${xCornerRight},${height - trueInset} 
  ${xCornerLeft},${height - trueInset}`
}

// export function calculateInsetKnotPoints(inset: number, width: number, height: number): string {
//   const xCornerLeft = height / 2
//   const xCornerRight = width - xCornerLeft
//   const yCenter = height / 2

//   return `${1.5 * inset},${yCenter} ${xCornerLeft + inset / 2},${inset} ${xCornerRight - inset / 2},${inset} ${width - 1.5 * inset},${yCenter} ${xCornerRight - inset / 2},${height - inset} ${xCornerLeft + inset / 2},${height - inset}`
// }

export function calculatePolygon(width: number, height: number): string {
  const xCornerLeft = height / 2
  const xCornerRight = width - xCornerLeft
  const yCenter = height / 2

  return `polygon(0px ${yCenter}px, ${xCornerLeft}px 0px, ${xCornerRight}px 0px, ${width}px ${yCenter}px, ${xCornerRight}px ${height}px, ${xCornerLeft}px ${height}px)`
}
