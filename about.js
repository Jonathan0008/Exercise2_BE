const members = require('./members') //import members module
const moment = require("moment")

const currentDate = new Date();
// Format the date in ISO 8601 format with the timezone offset
//format “2023-02-09T07:51:09+08:00”
const formattedDate = moment().format('MMMM Do YYYY, h:mm:ss a'); //code in https://momentjs.com/


//export module
module.exports = {
    "Status": 'success',
    "Message": 'response success',
    "Description": 'Exercise #03',
    "Date": `${formattedDate}`,
    "Data": [
        members.hendy(), 
        members.gerry(), 
        members.mitch(),
        members.ichad(),
        members.christina()
    ] 
}