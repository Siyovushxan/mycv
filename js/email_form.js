// Form input. Pochtaga ma'lumot yuborish
function emailSend() {
  Email.send({
      Host : "smtp.gmail.com",
      Username : "siyovushxan@gmail.com",
      Password : "EF59219E8C9894A1546EDE55B46587EAE9B6",
      To : 'siyovushxan@gmail.com',
      From : document.getElementById("email").value,
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
}