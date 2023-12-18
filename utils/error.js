module.exports = async (app, ec, utils, err, msgText)  => {
  const errResult = await app.client.chat.postMessage(
    utils.msgConfigThread(ec.botToken, ec.channelID, ec.ts, msgText)
  );
};