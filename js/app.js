
$('#test').click(function() {

    chrome.tabs.getSelected(null, function (tab) {
      var linko = tab.url;
      var linko = linko.substring(25);
      var idseoclerks = $("#idseoclerks").val();
      var reponse = document.getElementById('reponse');
          reponse.style.display = 'block';
      $('#replink').html('http://a.seoclerks.com/linkin/' + idseoclerks + '/' + linko);
    })


});
