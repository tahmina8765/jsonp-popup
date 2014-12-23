var VideoChatModule = (function(d, w) {

    var appId = '';
    var text = 'Call an agent';
    var url = 'http://videochat.khanahero.com/chats/add';

    function initModule(id, t) {
        appId = id;
        text = t;
        addBtn();
    }

    function addBtn() {
        if (appId === '1234') {
            d.getElementById('dataPlaceholder').innerHTML = '<button id="videochatPopupBtn" onclick="VideoChatModule.openPopup()">' + text + '</button>';
        } else {
            d.getElementById('dataPlaceholder').innerHTML = 'Sorry! You are not authorized.';
        }
    }

    function openPopup() {
        w.open(url + '?appId=' + appId, 'MsgWindow', 'width=400, height=500');
    }

    return {
        start: initModule,
        addBtn: addBtn,
        openPopup: openPopup
    };

})(document, window);
VideoChatModule.start(appId, chatBtnTxt);
