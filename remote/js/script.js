var VideoChat = {
    initScript: function(text) {
        VideoChat.addBtn(text);
    },
    addBtn: function(text){
        document.getElementById('dataPlaceholder').innerHTML = '<button id="videochatPopupBtn" onclick="VideoChat.openPopup()">' + text + '</button>';
        
    },
    openPopup: function(){
        window.open("http://www.w3schools.com", "MsgWindow", "width=300, height=400");
    }
};
VideoChat.initScript('Tahmina');