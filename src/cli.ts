/* eslint-disable no-unused-expressions */
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { generateTheme } from './colorGen'

yargs(hideBin(process.argv))
  .scriptName('material3-style')
  .usage('$0 [args]')
  .command(
    'color',
    'generate a color scheme from a source color',
    args => args
      .option('source', {
        alias: 's',
        type: 'string',
        describe: 'source color',
      }),
    async args => {
      const { source } = args

      await generateTheme(source)
    },
  )
  .fail((msg, err, yargs) => {
    // console.error(`\n${gray('[material3-style]')} ${bold(red('An internal error occurred.'))}`)
    console.error('\n[material3-style] An internal error occurred.')
    yargs.exit(1, err)
  })
  .showHelpOnFail(false)
  .help()
  .argv

export { }
