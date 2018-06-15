module.exports = {
  meta: {
    help: 'Instantly terminates the bot process.',
    level: Infinity,
    alias: ['kill']
  },
  fn: async (msg) => {
    await msg.channel.createMessage('Bye.')
    global.bot.disconnect()
    process.exit(0)
  }
}
