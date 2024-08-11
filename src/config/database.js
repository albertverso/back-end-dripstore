const {HOST, PASSWORD, DATABASE} = process.env

module.exports = {
    uri: 'postgresql://'+HOST+':'+PASSWORD+'@'+DATABASE
}