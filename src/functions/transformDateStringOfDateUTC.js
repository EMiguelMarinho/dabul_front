import * as P from 'prop-types';

export const transformDateStringOfDateUTC = (date) => {   
   const dateArray = date.trim().split("/")
   const dateString = new Date(`${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`)
   const dateUTC = Date.parse(dateString)
   return dateUTC.toString();
}

transformDateStringOfDateUTC.propTypes = {
   date: P.string.isRequired,
}