(function () {
    var CharacterPos = 0;
    var MsgBuffer = "";
    var TypeDelay = 100; 
    var NxtMsgDelay = 1000;
    var MsgIndex = 0;
    var delay;
    var MsgArray = ["Bienvenido a Jesse's Code","Espero que tu experiencia en este sitio web sea de lo mejor","Gracias por visitarme!"];

    function StartTyping() {
    var id = document.getElementById("typing-text");
    if (CharacterPos != MsgArray[MsgIndex].length) {
        MsgBuffer  = MsgBuffer + MsgArray[MsgIndex].charAt(CharacterPos);
        id.value = MsgBuffer+"";
        delay = TypeDelay;
        id.scrollTop = id.scrollHeight; 
    } else {
        delay = NxtMsgDelay;
        MsgBuffer   = "";
        CharacterPos = -1;
        if (MsgIndex!=MsgArray.length-1){
            MsgIndex++;
        }else {
            MsgIndex = 0;
        }
        }
        CharacterPos++;
        setTimeout(StartTyping,delay);
    }
StartTyping();
})();