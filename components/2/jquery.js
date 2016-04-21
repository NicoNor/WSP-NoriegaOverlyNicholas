function Slider(){
  $("#slide1").show("fade", 500);
  $("#slide1").delay(5500).hide("slide", {direction:"left"}, 500);

  var slidercount = $("img").size();
  var count = 2;

  setInterval(function () {
    $("#slide"+count).show("slide", {direction:"right"}, 500);
    $("#slide"+count).delay(5500).hide("slide", {direction:"left"}, 500);

    if(count == slidercount){
      count = 1;
    }else{
      count = count + 1;
    }
  },6500);
}
