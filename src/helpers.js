import moment from 'moment'
import { isHexStrict, hexToNumber } from 'web3-utils'


export function getDate(timeStamp){
    const date = moment.unix(timeStamp).utc();
    return `${date.date()}/${date.month() + 1} ${date.year()}`
  }

export const toNumber = num => isHexStrict(num) ? hexToNumber(num) : num
