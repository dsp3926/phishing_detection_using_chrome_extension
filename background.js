chrome.extension.onRequest.addListener(function(prediction){
    if (prediction == 1){

    chrome.tabs.getSelected(null, function(tab) {
           chrome.tabs.remove(tab.id);
        
  });
chrome.tabs.create({'url': chrome.extension.getURL('error.html')});
    }
    else if (prediction == -1){
        console.log("You are browsing safe");
        //alert("No phishing detected");
    }
});
