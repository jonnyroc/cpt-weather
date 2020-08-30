import moment from 'moment-timezone'

export const FormatTimeWithZone = (timestamp) => {
    return moment.tz(timestamp, 'Africa/Johannesburg').format('h:mm A z')
}

export const FormatTime = (timestamp) => {
    return moment.tz(timestamp * 1000, 'Africa/Johannesburg').format('h:mm A')
}

export const getDay = (timestamp) => {

    const day =  moment.unix(timestamp).utc().format("ddd DD");
    return day;
}

