/*------------------
    MESSAGE TEXT
------------------*/
const msgText = {
  newConfirm: (rotation) => {
    return ':sparkles: The *<!subteam^' + rotation + '>* rotation has been created. You can now assign someone to be goalie for this rotation or add a staff list. Use `@goalie help` to learn more.';
  },
  newError: (rotation) => {
    return ':mag_right: The *<!subteam^' + rotation + '>* rotation already exists. You can assign someone to be goalie with `@goalie <!subteam^' + rotation + '> assign @{user}`.';
  },
  descConfirm: (rotation, description) => {
    return `:writing_hand: The *<!subteam^${rotation}>* description has been updated to "${description}"`;
  },
  descEmpty: (rotation) => {
    return `:disappointed: I couldn't update the description for *<!subteam^${rotation}>* because it looks like you didn't provide one.`;
  },
  descError: (rotation) => {
    return ':shrug: I couldn\'t update the description for <!subteam^' + rotation + '> rotation because it does not exist. When you create a new rotation, you can include the description: `@goalie new <!subteam^' + rotation +'> [description]`.';
  },
  staffConfirm: (rotation) => {
    return ':busts_in_silhouette: The *<!subteam^' + rotation + '>* rotation staff list has been saved! You can now use `@goalie <!subteam^' + rotation + '> assign next` to rotate assignments.\nWhen using `next`, if the currently goalie person is not in the staff list, the assignment will default to the _first person_ in the rotation.\n_(Note: I remove duplicates. If you want someone to do additional shifts, you\'ll need to do a username assignment.)_';
  },
  staffEmpty: () => {
    return `:disappointed: I didn't understand that staff list. To save staff, please make sure you pass me a space-separated list of valid usernames.\n_(Note: I can also understand a comma+space separated list, but that's just more typing for you!)_`;
  },
  staffError: (rotation) => {
    return ':shrug: I couldn\'t save staff for <!subteam^' + rotation + '> rotation because it does not exist. To create this rotation, first tell me `@goalie new <!subteam^' + rotation + '> [description]`, _then_ set up staffing.';
  },
  resetStaffConfirm: (rotation) => {
    return `:ghost: The staff list for the *<!subteam^${rotation}>* rotation has been reset and is empty.`;
  },
  resetStaffError: (rotation) => {
    return ':shrug: I couldn\'t reset the staff list for <!subteam^' + rotation + '> rotation because it does not exist. To create this rotation, first tell me `@goalie new <!subteam^' + rotation + '> [description]`. It will initialize with no staff by default.';
  },
  deleteConfirm: (rotation) => {
    return `:put_litter_in_its_place: The *<!subteam^${rotation}>* rotation has been deleted.`;
  },
  deleteError: (rotation) => {
    return ':shrug: There is no rotation called <!subteam^' + rotation + '>. Nothing changed.';
  },
  aboutReport: (rotation, rotationObj) => {
    const assignment = rotationObj.assigned ? ' (`' + rotationObj.assigned + '`)' : ' (_unassigned_)';
    return `:information_source: *<!subteam^${rotation}>*: ${rotationObj.description}${assignment}`;
  },
  aboutStaffEph: (rotation, staff) => {
    if (staff && staff.length) {
      let str = '';
      for (const user of staff) {
        str = str + `• ${user}\n`;
      }
      if (str.length) {
        return `:card_index: The following people are on staff for the *<!subteam^${rotation}>* rotation. _To save their notifications, this is only visible to you._\n` + str;
      }
    }
    return '_No staff list saved for this rotation._';
  },
  aboutError: (rotation) => {
    return ':shrug: I couldn\'t get any info about rotation <!subteam^' + rotation + '> because it does not exist. To create it, use `@goalie new <!subteam^' + rotation + '> [description]`.';
  },
  assignConfirm: (usermention, rotation) => {
    return `:information_desk_person: ${usermention} is now goalie for the *<!subteam^${rotation}>* rotation.`;
  },
  assignDMHandoffBlocks: (rotation, link, sentByUserID, channelID, handoffMsg) => {
    return [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `:telephone: You are now goalie for the *<!subteam^${rotation}>* rotation and have received the following handoff message:`
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `>${handoffMsg}`
        }
      },
      {
        "type": "context",
        "elements": [
          {
            "type": "mrkdwn",
            "text": `<${link}|View handoff message> from <@${sentByUserID}> in <#${channelID}>`
          }
        ]
      }
    ];
  },
  assignHandoffConfirm: (usermention, rotation) => {
    return `Your handoff message for the *<!subteam^${rotation}>* rotation has been sent to ${usermention} via direct message.`;
  },
  assignNextError: (rotation) => {
    return ':shrug: I couldn\'t assign the next person in the *<!subteam^' + rotation + '>* rotation because there is nobody in the rotation staff list.\nTo set staff, use `@goalie <!subteam^' + rotation + '> staff @{user1} @{user2} @{user3} ...`.\nThen you can use `@goalie <!subteam^' + rotation + '> assign next [optional handoff message]` to rotate to the next user on staff.\nIf you don\'t want to use a staff list, assign someone directly by username: `@goalie <!subteam^' + rotation + '> assign @{user} [optional handoff message]`.';
  },
  assignError: (rotation) => {
    return ':shrug: I couldn\'t complete this assignment because <!subteam^' + rotation + '> does not exist. To create it, use `@goalie new <!subteam^' + rotation + '> [description]`.';
  },
  listReport: (list) => {
    let msgStr = '';
    const assignment = (item) => {
      return !!item.assigned ? ' (`' + item.assigned + '`)' : ' (_unassigned_)';
    };
    for (const rotation in list) {
      const rota = list[rotation];
      msgStr = msgStr + `• *<!subteam^${rota.rotation}>*: ${rota.description}${assignment(rota)}\n`;
    }
    return `:clipboard: Here are all the rotations I know about:\n${msgStr}`;
  },
  listEmpty: () => {
    return ':clipboard: There are no rotations saved right now. To create one, tell me `@goalie new @{usergroup} [description]`.';
  },
  whoReport: (usermention, rotation) => {
    return ':bust_in_silhouette: `' + usermention + '` is on duty for the *<!subteam^' + rotation + '>* rotation. To notify them directly, use `<!subteam^' + rotation + '> [message]`.';
  },
  nobodyAssigned: (rotation) => {
    return ':ghost: Nobody is currently assigned to the *<!subteam^' + rotation + '>* rotation. To assign someone, use `@goalie <!subteam^' + rotation + '> assign @{user} [optional handoff message]` or assign the next person in the rotation staff list with `@goalie <!subteam^' + rotation + '> assign next [optional handoff message]`.';
  },
  whoError: (rotation) => {
    return ':shrug: I couldn\'t find any goalie because rotation for <!subteam^' + rotation + '> does not exist. To create it, use `@goalie new <!subteam^' + rotation + '> [description]`. You can then assign someone using `@goalie <!subteam^' + rotation + '> assign {@user} [optional handoff message]`.';
  },
  unassignConfirm: (rotation) => {
    return `:ghost: The *<!subteam^${rotation}>* rotation has been unassigned. Nobody is on duty.`;
  },
  unassignNoAssignment: (rotation) => {
    return `:shrug: There is currently nobody assigned to the *<!subteam^${rotation}>* rotation. Nothing changed.`;
  },
  unassignError: (rotation) => {
    return ':shrug: I couldn\'t clear this assignment because rotation for <!subteam^' + rotation + '> does not exist. To create it, use `@goalie new <!subteam^' + rotation + '> [description]`.';
  },
  confirmChannelMsg: (rotation) => {
    return `:speech_balloon: The goalie user for *<!subteam^${rotation}>* has been notified.`;
  },
  confirmEphemeralMsg: (rotation) => {
    return ':mantelpiece_clock: The current goalie for *<!subteam^' + rotation + '>* will respond at their earliest convenience. Keep in mind: they might be busy or outside working hours.\n:rotating_light: If it\'s *very urgent* and nobody replies within 15 minutes, ping the appropriate `@{usergroup}`.';
  },
  dmToAssigned: (rotation, sentByUserID, channelID, link) => {
    if (sentByUserID) {
      return `Hi there! <@${sentByUserID}> needs your attention in <#${channelID}> (${link}) because you're goalie for the *<!subteam^${rotation}>* rotation.\n\n`;
    } else {
      return `Hi there! You've received a message in <#${channelID}> (${link}) because you're goalie for the *<!subteam^${rotation}>* rotation.\n\n`;
    }
  },
  msgError: (rotation) => {
    return ':shrug: I couldn\'t tell anyone about the message because rotation for <!subteam^' + rotation + '> does not exist. To create it, use `@goalie new <!subteam^' + rotation + '> [description]`.';
  },
  didntUnderstand: (ec, msgText) => {
    return ":thinking_face: I'm sorry, I didn't understand that. To see my full capabilities and learn how to format commands, type `@goalie help`.\nUndecipherable message text: `" + msgText + "`\nResponse log:\n```" + ec.text + "```";
  },
  error: (err) => {
    return ":cry: I'm sorry, I couldn't do that because an error occurred:\n```" + err + "```";
  }
}

module.exports = msgText;