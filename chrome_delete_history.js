/**
 * chrome custom search query remover: open chrome://history-frame/ search and delete
 * @NOTE: use it for your own risk
 */
setInterval(function() {
    e = document.getElementsByTagName('input')
    for (i = 0; i < e.length; i++) {
        e[i].checked = true;
    }
    b = document.getElementById('remove-selected');
    b.removeAttribute('disabled');
    b.click();
    document.getElementById('alertOverlayOk').click();
}, 1000)
