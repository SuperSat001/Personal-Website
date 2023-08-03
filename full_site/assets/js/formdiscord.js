function sendMessageToDiscord() {
  event.preventDefault();

  const request = new XMLHttpRequest();
  request.open(
    "POST",
    "https://discord.com/api/webhooks/1133455310309302442/_PntBw88Pz52Uy2om_3aQmZmaEbhi0-IgD8wz_V_E7CAa3pgi24w0YFxbpOFTy8D3o4V"
  );

  request.setRequestHeader("Content-type", "application/json");

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  const params = {
    username: name + " : " + email,
    // avatar_url: "",
    content: "Subject : `" + subject + "`\n\n```" + message + "```",
  };

  request.send(JSON.stringify(params));
  console.log("sent");

  var messageSentElement = document.getElementById("messageSent");
  messageSentElement.style.opacity = 1;
  setTimeout(function () {
    setTimeout(function () {
      messageSentElement.style.opacity = 0;
    }, 500);
  }, 2000);
}
