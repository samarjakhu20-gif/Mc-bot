const { createClient } = require('bedrock-protocol')

const client = createClient({
  host: 'DominexSMPfun.aternos.me',
  port: 19132,
  username: 'McBot',
  offline: true,
  version: '1.21.50'
})

client.on('spawn', () => {
  console.log('Bot server me join ho gaya!')
})

client.on('text', (packet) => {
  console.log(packet.message)
  if (packet.message.includes('hi bot')) {
    client.queue('text', {
      type: 'chat',
      needs_translation: false,
      source_name: client.username,
      xuid: '',
      platform_chat_id: '',
      message: 'Hello! Main online hu'
    })
  }
})
