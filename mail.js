function SendMSG(e) {
    e.preventDefault();
    let nam_txt = document.querySelector("#name111");
    let email_txt = document.querySelector("#email111");
    let number_txt = document.querySelector("#number111");
    let message_txt = document.querySelector("#message111");
    // console.log(nam_txt.value)
    let body =
      "Name:" +
      nam_txt.value +
      ",  " +
      "email:" +
      email_txt.value +
      ",  " +
      "Number:" +
      number_txt.value +
      ",  " +
      "Message : " +
      message_txt.value;
  
    let temp = {
      from_name: nam_txt.value,
      to_name: "Pawan Kumar",
      message: body,
    };
    console.log(body)

    // emailjs.send("service_txa94nr","template_enz1bmk");
    emailjs.send("service_w5d7fk9", "template_rvqxzgg", temp).then((res) => {
      
      if (res.status == 200) {
        success();
        console.log("mailto:" )
      } else {
        failure();
      }
    });
  
    nam_txt.value = "";
    email_txt.value = "";
    number_txt.value = "";
    message_txt.value = "";
  }
  
  function success() {
    alert("Thank you for submitting your form. Your information has been received, and I will be in touch with you shortly. Your time and interest are greatly appreciated")
    // let thank = document.querySelector(".msg-pop-up");
    // thank.style.display = "block";
    // setTimeout(() => {
    // //   thank.style.display = "none";
    // }, 2000);
  }
  

  