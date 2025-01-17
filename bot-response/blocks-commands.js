/*------------------
  BLOCKS: COMMANDS
------------------*/
const commandsBlocks = [
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "*How I Work:*"
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": ':sparkles: `@goalie new @{usergroup} [rotation description]` *creates a new rotation* in the current channel.'
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": ':x: `@goalie @{usergroup} delete` *wipes any record of a rotation\'s existence* from my memory. _Use with caution!_'
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": ':information_source: `@goalie @{usergroup} about` *publicly displays the description and current goalie* for a rotation. The *staff list* is also displayed, but only to the user who requested info (to avoid unnecessary user notifications).'
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": ':writing_hand: `@goalie @{usergroup} description [new description]` *updates the description* for a rotation.'
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": ':busts_in_silhouette: `@goalie @{usergroup} staff @{user1} @{user2} @{user3} ...` *saves a staff list* for a rotation. It expects a space-separated list of user mentions in the order you want assignments to rotate. You can then rotate the assignment through the staff list without needing to know who is next. _(Duplicates will be removed, so if you want someone to pull a double shift, you\'ll have to do that assignment by username.)_'
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": ':ghost: `@goalie @{usergroup} reset staff` *removes all users* from a rotation staff list. _Use with caution!_'
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": ':information_desk_person: `@goalie @{usergroup} assign @{user} [optional handoff message]` *assigns a user to a rotation*. Optionally, I can also deliver handoff information at the start of a rotation.'
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": ':arrows_counterclockwise: `@goalie @{usergroup} assign next [optional handoff message]` *assigns the next person in the staff list* to a rotation. If there is nobody currently assigned or the current user is not in the staff list, I\'ll start at the beginning of the list. Optionally, I can also deliver handoff information when starting a rotation.'
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": ':bust_in_silhouette: `@goalie @{usergroup} who` *reports the name of the person* who is on duty for a rotation.'
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": ':eject: `@goalie @{usergroup} unassign` *removes the current assignment* for a rotation.'
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": ":clipboard: `@goalie list` *displays a list* of all rotations I\'m keeping track of at the moment."
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": ':phone: `@goalie @{usergroup} [message]` *contacts a rotation\'s goalie*. I send a DM telling them your message needs attention. They\'ll follow up at their earliest convenience. _(Kindly keep in mind they may be busy or outside working hours.)_'
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": ":question: `@goalie help` shows how to interact with me."
    }
  }
];

module.exports = commandsBlocks;