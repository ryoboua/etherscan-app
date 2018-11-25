import moment from 'moment'
import { isHexStrict, hexToNumber } from 'web3-utils'

export function getDate(timeStamp){
    const date = moment.unix(timeStamp).utc();
    return `${date.date()}/${date.month() + 1} ${date.year()}`
  }

export function isBlockNumber(num){
    return !isNaN(Number(num))
 }

export const toNumber = num => isHexStrict(num) ? hexToNumber(num) : num

export function isEmpty(prop){
  return (
      prop === null ||
      prop === undefined ||
      (prop.hasOwnProperty('length') && prop.length === 0) || //check if array and length
      (prop.contructor === Object && Object.keys(prop).length ===0) // check if object
  )
}