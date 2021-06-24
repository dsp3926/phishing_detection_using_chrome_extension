// Declaring global variables

var testdata;
var prediction;




/*********************************************************************

1.1 Function to predict which takes data and weights as arguments 

**********************************************************************/

// Define the funtion predict()
function predict(data,weight){

    // Initial f variable
    var f = 0;

    // Weights are prefined
    //weight = [3.33346292e-01,-1.11200396e-01,-7.77821806e-01,1.11058590e-01,3.89430647e-01,1.99992062e+00,4.44366975e-01,-2.77951957e-01,-6.00531647e-05,3.33200243e-01,2.66644002e+00,6.66735991e-01,5.55496098e-01,5.57022408e-02,2.22225591e-01,-1.66678858e-01];

    //weight = [ 0.29140903, -0.08272586, -0.72969851,  0.10492972,  0.47924222,  2.31353698,0.49953743, -0.27273309, -0.04159056,  0.29137892,  2.62675847,  0.70850427,0.50071374,  0.12451573,  0.1044904,  -0.06092436]

    weight = [0.01611421, 0.01338162, 0.04329071, 0.0157611,  0.01566466, 0.07121394, 0.14288436, 0.01078316, 0.03074644, 0.09232462, 0.32972087, 0.0806333, 0.11188914, 0.00692575, 0.01184583, 0.00682028]

    // Copy the product of data and weights 
    for(var j=0;j<data.length;j++) {
      f += data[j] * weight[j];
    }

    // Return statement if f greater than 0, result = 1 else -1
    return f > 0 ? 1 : -1;
}



/*********************************************************************

1.2 Function to find the IP is present in URL or not

**********************************************************************/

// Define the funtion isIPInURL()
function isIPInURL(){

    // Initializating the regular expression
    var reg =/\d{1,3}[\.]{1}\d{1,3}[\.]{1}\d{1,3}[\.]{1}\d{1,3}/;

    // Defining the path of the url
    var url = window.location.href

    // Condition to check whether the url is present or not

    // Checking whether the url is null or not
    if(reg.exec(url)==null){

        // if url is not present then print NP
        console.log("NP");
        return -1;
    }
    else{
        // if url is present the print P
        console.log("P");
        return 1;
    }
}



/*********************************************************************

1.2 Function to check if the url entered is too long

**********************************************************************/

// Define the funtion isLongURL()
function isLongURL(){

    // Defining the path of the url
    var url = window.location.href;    

    // Condition to check whether the url is long or not

    // If the url length is less than 54 char then print NP
    if(url.length<54){
        console.log("NP");
        return 1;
    } 

    // If the url length is greater then or equal to 54 char and less then or equal to 75 then print Maybe 
    else if(url.length>=54 && url.length<=75){
        console.log("Maybe");
        return 0;
    }

    // If the url length is greater than 75 char print p. That's the entered url is long
    else{
        console.log("P");
        return 1;
    }
}


/*********************************************************************

1.2 Function to check if the url entered is small or not

**********************************************************************/

// Define the function isTinyUrl()
function isTinyURL(){

    // Defining the path of the url
    var url = window.location.href;   

    // Condition to check whether the url is small or not

    // If the url length is greather than 20 char then print NP
    if(url.length>20){
        console.log("NP");
        return 1;
    } 

    // If the url length is less than 20 char then print P.That's the entered url is small
    else{
        console.log("P");
        return 1;
    }
}


/**************************************************************************************

1.2 Function to check if the url is alpha numeric (string of both alphabet and numbers)

****************************************************************************************/

// Define the function isAlphaNumericURL()
function isAlphaNumericURL(){

    //Initializing and finding the special character '@'
    var search ="@";

    // Defining the path of the url
    var url = window.location.href; 

    // Condition to check whether the url is match with the special character or not

    // Checking whether the url is null or not.If null print NP
    if(url.match(search)==null){
        console.log("NP");
        return -1;
    }

    // if url is present the print P
    else{
        console.log("P");
        return 1;
    }
}


/**************************************************************************************

1.2 Function to Verify if ’//’ existing within the URL more than once

****************************************************************************************/

// Define the function isRedirectingURL()
function isRedirectingURL(){

    // Initializing the variables for further mapping
    var reg1 = /^http:/
    var reg2 = /^https:/
    var srch ="//";

    // Defining the path of the url
    var url = window.location.href; 

    // Condition to check whether the url is match with the special character or not

    // Conditons to check the search url is not null and finding the match case    
    if(url.search(srch)==5 && reg1.exec(url)!=null && (url.substring(7)).match(srch)==null){
        console.log("NP");
        return -1;
    }

    // Conditons to check the search url is not null and finding the match case  
    else if(url.search(srch)==6 && reg2.exec(url)!=null && (url.substring(8)).match(srch)==null){
        console.log("NP");
        return -1;
    }

    // if not print P
    else{
        console.log("P");
        return 1;
    }
}




/**************************************************************************************

1.2 Function to check if the url contains hypens or not

****************************************************************************************/

// Define the function isHypenURL()
function isHypenURL(){

    // Defining the regular expression and hypen
    var reg = /[a-zA-Z]\//;
    var srch ="-";

    // Defining the path of the url
    var url = window.location.href; 

    // Condition to check whether the url is match with the special character or not

    // Checking whether url contains is '-'. If doesn't contain print null
    if(((url.substring(0,url.search(reg)+1)).match(srch))==null){
        console.log("NP");
        return -1;
    }    

    // If the url contain hypens (-) print P
    else{
        console.log("P");
        return 1;
    }
}


/**************************************************************************************

1.2 Function to check if the url regualar expression and hypens

****************************************************************************************/

// Define the function isMultiDomainURL()
function isMultiDomainURL(){

    // Defining the regular expression and hypen
    var reg = /[a-zA-Z]\//;
    var srch ="-";

    // Defining the path of the url
    var url = window.location.href; 

    // Condition to check whether the url is contains the regular expression

    // Checking whether url is split at '.'. Print NP
    if((url.substring(0,url.search(reg)+1)).split('.').length < 5){
        console.log("NP");
        return -1;
    }  

    // If regular expression are present print P
    else{
        console.log("P");
        return 1;
    }
}


/**************************************************************************************

1.2 Function to check if the url on  given webpage are loaded from other domains

****************************************************************************************/

// Define the function isFaviconDomainUnidentical()
function isFaviconDomainUnidentical(){

    // Defining the regular expression
    var reg = /[a-zA-Z]\//;

    // Defining the path of the url
    var url = window.location.href; 

    // Condition for finding the query for the icon
    if(document.querySelectorAll("link[rel*='shortcut icon']").length>0){      

        // Initializing the favicon url  
        var faviconurl = document.querySelectorAll("link[rel*='shortcut icon']")[0].href;

        // Checking whether the url contains favicon url. If not print NP
        if((url.substring(0,url.search(reg)+1))==(faviconurl.substring(0,faviconurl.search(reg)+1))){
            console.log("NP");
            return -1;
        }  

        // If the favicon url is present then print P  
        else{
            console.log("P");
            return 1;
        }
    }

    // If the query selector is not working then print NP
    else{
        console.log("NP");
        return -1;
    }
}



/**************************************************************************************

1.2 Function to check if Identify presence of multiple ’https’ in the URL string

****************************************************************************************/

// Define the function isIllegalHttpsURL()
function isIllegalHttpsURL(){

    //Initializing the strings
    var srch1 ="//";   
    var srch2 = "https";   

    // Defining the path of the url
    var url = window.location.href; 

    // Finding whether the url contains the string or not. If not print NP
    if(((url.substring(url.search(srch1))).match(srch2))==null){
        console.log("NP");
        return -1;
    }    

    // If the given string is present then Print P
    else{
        console.log("P");
        return 1;
    }
}



/**************************************************************************************

1.2 Function to check if the image belong to different domian 

****************************************************************************************/

// Define the function isImgFromDifferentDomain()
function isImgFromDifferentDomain(){

    // Querying the data from images.
    var totalCount = document.querySelectorAll("img").length
    var identicalCount = getIdenticalDomainCount("img");

    // Finding the percentage and checking wheter it falls under 0.22.If Yes, print NP
    if(((totalCount-identicalCount)/totalCount)<0.22){
        console.log("NP");
        return -1;
    } 

    // Finding the percentage and checking it is greater then 0.22 and less then 0.61 .If Yes, print MayBe
    else if((((totalCount-identicalCount)/totalCount)>=0.22) && (((totalCount-identicalCount)/totalCount)<=0.61)){
        console.log("Maybe");
        return 0;
    } 

    // If it is greater than 0.61 print P   
    else{
        console.log("P");
        return 1;
    }
}


/**************************************************************************************

1.2 Function to check to detect  if  links  on  given web-page are loaded from other domains

****************************************************************************************/

// Define the function isAnchorFromDifferentDomain()
function isAnchorFromDifferentDomain(){

    // Querying the data from id 'a'.
    var totalCount = document.querySelectorAll("a").length
    var identicalCount = getIdenticalDomainCount("a");

    // Finding the percentage and checking where it falls under 0.31. If Yes, print NP
    if(((totalCount-identicalCount)/totalCount)<0.31){
        console.log("NP");
        return -1;
    } 

    // Finding the percentage and checking where it falls between 0.67 and 0.31.If Yes, print MayBe
    else if((((totalCount-identicalCount)/totalCount)>=0.31) && (((totalCount-identicalCount)/totalCount)<=0.67)){
        console.log("Maybe");
        return 0;
    }   

    // If it is greater than 0.67 print P
    else{
        console.log("P");
        return 1;
    }
}




/**************************************************************************************

1.2 Function to check if the script links belong to different domain

****************************************************************************************/

// Define the function isScLnkFromDifferentDomain()
function isScLnkFromDifferentDomain(){

    // Query the script length and link length 
    var totalCount = document.querySelectorAll("script").length + document.querySelectorAll("link").length
    var identicalCount = getIdenticalDomainCount("script") + getIdenticalDomainCount("link");

    //Finding the percentage and checking it falls under 0.17. If Yes, print NP
    if(((totalCount-identicalCount)/totalCount)<0.17){
        console.log("NP");
        return -1;
    } 

    //Finding the percentage and checking it falls between 0.17 and 0.81. If Yes, print Maybe
    else if((((totalCount-identicalCount)/totalCount)>=0.17) && (((totalCount-identicalCount)/totalCount)<=0.81)){
        console.log("Maybe");
        return 0;
    }   

    // If it is greater than 0.81 print P
    else{
        console.log("P");
        return 1;
    }
}


/**************************************************************************************

1.2 Function to Detect invalid/blank form submissions

****************************************************************************************/

// Define the function isFormActionInvalid()
function isFormActionInvalid(){

    //Quering the data from 'form'
    var totalCount = document.querySelectorAll("form").length
    var identicalCount = getIdenticalDomainCount("form");

    // Checking the form action is null
    if(document.querySelectorAll('form[action]').length<=0){
        console.log("NP");
        return -1;
    }   

    // Condition to check if identicalCount and totalCount are not equal
    else if(identicalCount!=totalCount){
        console.log("Maybe");
        return 0;
    } 

    // Checking whether the form action length is greater than 0    
    else if(document.querySelectorAll('form[action*=""]').length>0){
        console.log("P");
        return 1;
    } 

    //If not print NP
    else{
        console.log("NP");
        return -1;
    } 
}



/**************************************************************************************

1.2 Function to Check  for  anchor  tag  incorporating mailto

****************************************************************************************/

// Define the function isMailToAvailable()
function isMailToAvailable(){

    //Defining and Querying the mail link and size less than zero(0)
    if(document.querySelectorAll('a[href^=mailto]').length<=0){
        console.log("NP");
        return -1;
    }   

    //If the length greater than 0 then print P
    else{
        console.log("P");
        return 1;
    }
}


/**************************************************************************************

1.2 Function to Checks if  manipulatedthe status bar displayor not on MouseOverEvent()

****************************************************************************************/

// Define the function isStatusBarTampered()
function isStatusBarTampered(){

    // Defining and Querying the status and link and checking the lenght less than 0
    if((document.querySelectorAll("a[onmouseover*='window.status']").length<=0) || (document.querySelectorAll("a[onclick*='location.href']").length<=0)){
        console.log("NP");
        return -1;
    }

    // If the status bar and link size is greater then 0, print P 
    else{
        console.log("P");
        return 1;
    } 
}



/**************************************************************************************

1.2 Function to check if the frame is present or not

****************************************************************************************/

// Define the function isIframePresent()
function isIframePresent(){

    // Quering the iframe is present or not and length less than 0
    if(document.querySelectorAll('iframe').length<=0){
        console.log("NP");
        return -1;
    }

    // Checking iframe is found and length is greater than 0
    else{
        console.log("P");
        return 1;
    }
}



/**************************************************************************************

1.2 Function to find the count of Identical Domain

****************************************************************************************/

// Define the function getIdenticalDomainCount()
function getIdenticalDomainCount(tag){    

    // Defining the varibale and declaring the regular expression
    var i;
    var identicalCount=0;
    var reg = /[a-zA-Z]\//;    

    // Defining the path of the url
    var url = window.location.href;

    //Finding the substring
    var mainDomain = url.substring(0,url.search(reg)+1);    

    //Querying the data  
    var nodeList = document.querySelectorAll(tag);

    // Tag and Script and mapping 
    if(tag=="img" || tag=="script"){
        nodeList.forEach(function(element,index) {        
        i = nodeList[index].src

        // Finding the matchcase
        if(mainDomain==(i.substring(0,i.search(reg)+1))){
           identicalCount++;    // Incrementing the value if found
        }    
      });
    }  


    // Tagging and Mapping
    else if(tag=="form"){
        nodeList.forEach(function(element,index) {        
        i = nodeList[index].action

        // Finding the matchcase
        if(mainDomain==(i.substring(0,i.search(reg)+1))){
           identicalCount++; // Incrementing the value if found
        }   
      });
    }  

    // Anchroing and Mapping
    else if(tag=="a"){
        nodeList.forEach(function(element,index) {        
        i = nodeList[index].href

        // Finding and Mapping
        if((mainDomain==(i.substring(0,i.search(reg)+1))) && ((i.substring(0,i.search(reg)+1))!=null) && ((i.substring(0,i.search(reg)+1))!="")){
           identicalCount++; // Incrementing the value if found
        }    
      });
    } 

    // Special Case
    else{
        nodeList.forEach(function(element,index) {        
        i = nodeList[index].href

        // Finding and Mapping
        if(mainDomain==(i.substring(0,i.search(reg)+1))){
           identicalCount++;
        }    
      });
    }  
    return identicalCount;
} 


// Main Declarations

// Declaring the array of functions
testdata = [isIPInURL(),isLongURL(),isTinyURL(),isAlphaNumericURL(),isRedirectingURL(),isHypenURL(),isMultiDomainURL(),isFaviconDomainUnidentical(),isIllegalHttpsURL(),isImgFromDifferentDomain(),isAnchorFromDifferentDomain(),isScLnkFromDifferentDomain(),isFormActionInvalid(),isMailToAvailable(),isStatusBarTampered(),isIframePresent()];

// Predicting and running all functions
prediction = predict(testdata);

// Sends a single request to other listeners within the extension
chrome.extension.sendRequest(prediction);

