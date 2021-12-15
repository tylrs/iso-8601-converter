export const calculateDiff = (timestamp1, timestamp2) => {   
    let millisecondsDiff = Math.abs(new Date(timestamp1)- new Date(timestamp2))
    if (millisecondsDiff === 0) {
        return 'No difference'
    } else if (isNaN(millisecondsDiff)) {
        return 'Please enter 2 ISO 8601 timestamps'
    }
    const diff = {
        days: Math.floor(millisecondsDiff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((millisecondsDiff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((millisecondsDiff / (1000 * 60)) % 60),
        seconds: Math.floor((millisecondsDiff / 1000) % 60),
        milliseconds: Math.floor(millisecondsDiff % 1000)
    }
    console.log("milliseconds", millisecondsDiff, diff)
    return Object.keys(diff).reduce((acc, unit) => {
        if (diff[unit]) acc += `${diff[unit]} ${unit} `
        return acc
    }, '')
}