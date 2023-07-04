/*------------------
  NEW
  @goalie new [optional description]
  Creates a new rotation with description
------------------*/
module.exports = async (app, event, context, ec, utils, store, msgText, errHandler) => {
  try {
    const pCmd = await utils.parseCmd('new', event, context);
    const rotation = ec.channelID;
    const description = pCmd.description;

    if (utils.rotationInList(rotation, ec.rotaList)) {
      // Can't create a rotation that already exists
      const result = await app.client.chat.postMessage(
        utils.msgConfigThread(ec.botToken, ec.channelID, ec.ts, msgText.newError(rotation))
      );
    } else {
      // Initialize a new rotation with description
      const save = await store.newRotation(rotation, description);
      const result = await app.client.chat.postMessage(
        utils.msgConfigThread(ec.botToken, ec.channelID, ec.ts, msgText.newConfirm(rotation))
      );
    }
  }
  catch (err) {
    errHandler(app, ec, utils, err, msgText);
  }
};