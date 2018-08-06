// function to respond back after calendar event created
export const calendarEventCreateMsg = function (botResponse, panId, creatDate, creatTime, commandEntered) {
  return `<div class='createGithubRepo playGroungDiv-you' id='createGithubRepo-you_${panId}' >
              <span><strong><a href="#">You</a></strong></span>
              <p>${commandEntered}</p>
              <span>On ${creatDate} at ${creatTime}</span>
              </div>
              <div class='createGithubRepo panBackground playGroungDiv-bot' id='createGithubRepo_${panId}' >
              <span><strong>Slackbot</strong></span>
              <p>${botResponse}</p>
              <span>On ${creatDate} at ${creatTime}</span>
          </div>`;
};
