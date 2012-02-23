$(function(){

   var nuwiki = $("<div id='nuwiki'></div>").css({
     "width" : "122px",
     "height" : "30px",
     "position" : "absolute",
     "top" : "0",
     "right" : "475px"
   });

   var url = "https://nulab.backlog.jp/NewWiki.action?projectKey=BLG";

   var container = $("div#editorcontainer iframe").contents().find("#outerdocbody iframe").contents().find("#innerdocbody");

   var getDateStr = function(d){
     var buf = [];
     var padZero = function(n){
       return (n < 10 )? "0" + n : n +"";
     }
     buf.push(d.getFullYear() + "");
     buf.push(padZero(d.getMonth() + 1 ));
     buf.push(padZero(d.getDate()));
     return buf.join("/");
   }

   var a = $("<a>Add to Backlog Wiki</a>").appendTo(nuwiki).click(function(){
     var buf = [];
     container.children("div").each(function(){
       buf.push($(this).text());
     });
     var org = buf[1];
     buf.splice(1,1,"-" + location.href,org);

     var params = {
       "page.content" : buf.join("\n"),
       "page.name" : "[議事録]ミーティング(" + getDateStr(new Date()) + ") - 開発|全体"
     }
     var p = _(params).chain().map(function(v,k){return k + "=" + encodeURIComponent(v)}).reduce(function(n,m){return m + "&" + n}).value();
     window.open(url + "&" + p);
   }).css({
     "display" : "block",
     "width": "100%",
     "text-align" : "center",
     "line-height" : "28px",
     "cursor" : "pointer"
   }).hover(function(){
     $(this).css("background-color","#eee");
   },function(){
     $(this).css("background-color","");
   });

   $("#docbaroptions-outer").before(nuwiki);
});



