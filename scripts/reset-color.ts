import { generateTheme } from '../src/colorGen'

generateTheme()
  .then(() => console.log('reset color done'))
  .catch(console.error)
