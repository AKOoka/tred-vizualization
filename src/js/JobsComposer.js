function convertHsvToRgb (hue, saturation, value) {
  const h = hue / 360
  const s = saturation / 100
  const v = value / 100
  const i = Math.floor(h * 6)
  const f = h * 6 - i
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - (1 - f) * s)

  let r = 0
  let g = 0
  let b = 0

  switch (i % 6) {
    case 0:
      r = v
      g = t
      b = p

      break
    case 1:
      r = q
      g = v
      b = p

      break
    case 2:
      r = p
      g = v
      b = t

      break
    case 3:
      r = p
      g = q
      b = v

      break
    case 4:
      r = t
      g = p
      b = v

      break
    case 5:
      r = v
      g = p
      b = q

      break
  }

  return { r, g, b }
}

function rgbToString (color) {
  const { r, g, b } = color

  return `${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}`
}

class JobsComposer {
  constructor () {
    this.jobsModel = []
  }

  // generateColorsByModel maybe use in parsing or somewhere else!

  generateColorsByModel (model) {
    const jobNames = new Set()
    const jobColors = new Map()

    for (const { name } of model.jobRecords.values()) {
      jobNames.add(name)
    }

    const sortedJobNames = [...jobNames.values()]
    const hueStep = 120 / sortedJobNames.length * 4
    let saturation = 60
    let value = 75

    for (let i = 0; i < sortedJobNames.length; i++) {
      const hue = i * hueStep

      if (hue > 360) {
        if (saturation === 60) {
          saturation = 100
        } else if (value === 75) {
          value = 100
        } else {
          value = 100
          saturation = 60
        }
      }

      jobColors.set(sortedJobNames[i], convertHsvToRgb(hue, saturation, value))
    }

    return jobColors
  }

  createJobsModelRange () {}

  createModel (model) {}
}

export { JobsComposer, rgbToString }
