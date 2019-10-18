const moment = require('moment')

exports.lowercaseFirst = str => str[0].toLowerCase() + str.substring(1)

exports.relativeTime = time => moment(new Date(time * 1000)).fromNow()