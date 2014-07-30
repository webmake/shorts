timer=setInterval(function(){
  $.post("http://pazintys.draugas.lt/dotnet/Question/WebService.asmx/Vote", {"ValentineId":"2061043","Vote":1,"AgeFrom":18,"AgeTo":26,"Source":1});
},950);
