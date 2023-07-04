module.exports = async (app, ec, utils, err, msgText)  => {
  console.error(err);
  const errResult = await app.client.chat.postMessage(
    utils.msgConfigThread(ec.botToken, ec.channelID, ec.ts, msgText)
  );
};