// BLG-2216 クリップボードにコピー
$(function(){
  var swf = "https://cacoo.com/swf/Asclip.swf";

  var key = location.href;
  var desc = $("div#page_detail").find("div.main header h1 a").text();
  var clipString = desc + "\n" + key;

  var params = {
    clipString : clipString,
    imageNormal : "https://cacoo.com/diagrams/oNUOwOf0vTsarQEI-00FA0.png",
    imageOver : "https://cacoo.com/diagrams/oNUOwOf0vTsarQEI-96A91.png",
    imagePress : "https://cacoo.com/diagrams/oNUOwOf0vTsarQEI-96A91.png"
  };

  var flashvars = _(params).chain().map(function(v,k){ return k + "=" + v; }).reduce(function(n,m){return n+ "&" + m;}).value();
  var asclip = $("<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' width='20' height='20' id='asclip' style='float:right;position:relative;top:-18px'>") 
      .append("<param name='movie' value='" + swf + "' />")
      .append("<param name='allowScriptAccess' value='always' />")
      .append("<param name='quality' value='high' />")
      .append("<param name='scale' value='noscale' />")
      .append("<param name='FlashVars' value='" + flashvars + "' />")
      .append("<embed src='" + swf + "' width='20' height='20' name='asclip' quality='high' allowScriptAccess='always' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' flashvars='" + flashvars + "' />").css({
        "float":"right",
        "position":"relative",
        "top":"-4px",
        "left":"-480px"
      });

   $("div#page_detail").find("div.main header p.breadcrumbs").append(asclip);
});
