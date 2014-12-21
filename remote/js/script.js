var VideoChat = {
    appId: '',
    text: '',
    initScript: function(appId, text) {
        VideoChat.appId = appId;
        VideoChat.text = text;
        VideoChat.addBtn();
    },
    addBtn: function() {
        if (VideoChat.appId === '1234') {
            document.getElementById('dataPlaceholder').innerHTML = '<button id="videochatPopupBtn" onclick="VideoChat.openPopup()">' + VideoChat.text + '</button>';
        } else {
            document.getElementById('dataPlaceholder').innerHTML = 'Sorry! You are not authorized.';
        }
    },
    openPopup: function() {
        window.open("http://videochat.khanahero.com/chats/add?appId=" + VideoChat.appId, "MsgWindow", "width=400, height=500");
    }
};
VideoChat.initScript(appId, chatBtnTxt);