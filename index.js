$(".btn").click(function clic(){

  let txt = $("#txt").val();

  if(txt == ""){
    alert("Please Enter your name.")
  }
  else{
    $('body').css('background-image','url(https://media3.giphy.com/media/FXRmT8HcXyrqdYMMzo/giphy.gif?cid=6c09b952846749af44fe216bb4dc4bbddf68508bdf56455b&rid=giphy.gif&ct=g)');
    $("body").removeClass(".bodyBefore");
    $(".form").remove();
    $(".wish").append();

    $(".messege").text(`${txt}, wishing you and your family`);
    $(".newYear").text(`Happy New Year`);
    $("#year").text(`2023`);

  }

});
