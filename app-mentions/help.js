/*------------------
  HELP
  @goalie help
  Provides instructions on how to use Goalie
------------------*/
module.exports = async (app, ec, utils, helpBlocks, msgText, errHandler) => {
  try {
    const result = await app.client.chat.postMessage({
      token: ec.botToken,
      channel: ec.channelID,
      blocks: helpBlocks(),
      thread_ts: ec.ts
    });
  }
  catch (err) {
    errHandler(app, ec, utils, err, msgText);
  }
};