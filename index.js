const yas = require('youtube-audio-server')

// Start listener (REST API).
const port = process.env.port || 7331
yas.listen(port, () => {
	console.log(`Listening on port http://localhost:${port}.`)
})