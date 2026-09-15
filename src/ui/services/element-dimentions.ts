export function getElementDimensions(element: HTMLElement | null): [number, number] {
  let width = 0
  let height = 0

  if (element) {
    const rect = element.getBoundingClientRect()
    width = rect.width
    height = rect.height
  }

  return [width, height]
}
