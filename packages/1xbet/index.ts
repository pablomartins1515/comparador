import client from './client'
import apis from './src/apis'
import { XBetFootballMatch } from './typings/football'

function registerApp({ secret_key }: { secret_key: string}) {
  client.defaults.headers.authorization = secret_key
}

export { XBetFootballMatch }

export default {
  registerApp,
  ...apis,
}
