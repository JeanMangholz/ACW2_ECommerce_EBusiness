/*
 * Script ChatBot
 */ 
var know={
    "Mike" : "Nice to meet you Mike!",
    "mike" : "Nice to meet you Mike!",
    "john" : "Nice to meet you John!",
    "John" : "Nice to meet you John!",
    "hello" : "Hi!",
    "hello!" : "Hi!",
    "Hello" : "Hi!",
    "Hello!" : "Hi!",
    "hi":"Hi!",
    "hi!":"Hi!",
    "Hi":"Hi!",
    "Hi!":"Hi!",
    "Good morning!" : "Good Morning!",
    "Good morning" : "Good Morning!",
    "good morning!" : "Good Morning!",
    "good morning" : "Good Morning!",
    "Good evening" : "Good Evening!",
    "Good evening!" : "Good Evening!",
    "good evening" : "Good Evening!",
    "good evening!" : "Good Evening!",
    "Good night" : "Good Night!",
    "Good night!" : "Good Night!",
    "good night" : "Good Night!",
    "good night!" : "Good Night!",
    "Thanks" : ":)",
    "thanks" : ":)",
    "Thank you" : ":)",
    "thank you" : ":)",
    "ok":":)",
    "information":"Home",
    "student":"Home",
    "Information":"Home",
    "Student":"Home",
    "Jean":"Home",
    "Mangholz":"Home",
    "mangholz":"Home",
    "jean":"Home",
    "201851539":"Home",
    "id":"Home",
    "Id":"Home",
    "home":"Home",
    "index":"Home",
    "Index":"Home",
    "Home":"Home",
    "bibliography":"Bibliography",
    "Bibliography":"Bibliography",
    "Books":"Bibliography",
    "Book":"Bibliography",
    "book":"Bibliography",
    "books":"Bibliography",
    "website":"Bibliography",
    "Website":"Bibliography",
    "Websites":"Bibliography",
    "websites":"Bibliography",
    "document":"Bibliography",
    "documents":"Bibliography",
    "Documents":"Bibliography",
    "Document":"Bibliography",
    "journal":"Bibliography",
    "Journal":"Bibliography",
    "journals":"Bibliography",
    "Journals":"Bibliography",
};

function talk(){
    var user = document.getElementById("userBox").value;
    var separator=" ";
    var arrayOfStrings;
    var temp=" ";
    var unknow=0;
    var i=0;
    
    document.getElementById("chatLog").innerHTML+= "[You:] " + user+"</br>";

    for(i=0;i<user.length;i++){
        arrayOfStrings=user.split(separator);
    }
    
    for(i=0;i<arrayOfStrings.length;i++){
        temp=arrayOfStrings[i];
        console.log(temp);
        if(temp in know){
            user = temp;
            unknow=0;
            if(know[user].localeCompare("Home") ==0)
            {
                if(page == 1)
                {
                    document.getElementById("chatLog").innerHTML += "[Help Desk 2.0: ] The information that you are lookink for are located in " + know[user] + " page"+ "<a href=\"index.html\">Home</a>"+"</br></br>";
                }
                else
                {
                    document.getElementById("chatLog").innerHTML += "[Help Desk 2.0: ] The information that you are lookink for are located in " + know[user] + " page"+ "<a href=\"../index.html\">Home</a>"+"</br></br>";
                }
                break;

            }
            if(know[user].localeCompare("GeneralDescription") ==0)
            {
                if(page == 1)
                {
                    document.getElementById("chatLog").innerHTML += "[Help Desk 2.0: ] The information that you are lookink for are located in " + know[user] + " page"+ "<a href=\"html/generalDescription.html\">General Description</a>"+"</br></br>";
                }
                else
                {
                    document.getElementById("chatLog").innerHTML += "[Help Desk 2.0: ] The information that you are lookink for are located in " + know[user] + " page"+ "<a href=\"generalDescription.html\">General Description</a>"+"</br></br>";
                }
                break;
            }
            if(know[user].localeCompare("KeyCriticalAreas") ==0)
            {
                if(page ==1)
                {
                    document.getElementById("chatLog").innerHTML += "[Help Desk 2.0: ] The information that you are lookink for are located in " + know[user] + " page"+ "<a href=\"html/keyCriticalAreas.html\">Key Critical Areas</a>"+"</br></br>";
                }
                else
                {
                    document.getElementById("chatLog").innerHTML += "[Help Desk 2.0: ] The information that you are lookink for are located in " + know[user] + " page"+ "<a href=\"keyCriticalAreas.html\">Key Critical Areas</a>"+"</br></br>";
                }
                break;
            }
            if(know[user].localeCompare("WebTechnologyAnalysis") ==0)
            {
                if(page==1)
                {
                    document.getElementById("chatLog").innerHTML += "[Help Desk 2.0: ] The information that you are lookink for are located in " + know[user] + " page"+ "<a href=\"html/webTechnologyAnalysis.html\">Web Technology Analysis</a>"+"</br></br>";
                }
                else
                {
                    document.getElementById("chatLog").innerHTML += "[Help Desk 2.0: ] The information that you are lookink for are located in " + know[user] + " page"+ "<a href=\"webTechnologyAnalysis.html\">Web Technology Analysis</a>"+"</br></br>";
                }
                break;
            }
            if(know[user].localeCompare("EffectivenessWebsite") ==0)
            {
                if(page==1)
                {
                  document.getElementById("chatLog").innerHTML += "[Help Desk 2.0: ] The information that you are lookink for are located in " + know[user] + " page"+ "<a href=\"html/analysisEffectivinessWebsite.html\">Effectiveness of the website</a>"+"</br></br>";
                }
                else
                {
                    document.getElementById("chatLog").innerHTML += "[Help Desk 2.0: ] The information that you are lookink for are located in " + know[user] + " page"+ "<a href=\"analysisEffectivinessWebsite.html\">Effectiveness of the website</a>"+"</br></br>";
                }
                break;
            }
            if(know[user].localeCompare("Bibliography") ==0)
            {
                if(page==1)
                {
                  document.getElementById("chatLog").innerHTML += "[Help Desk 2.0: ] The information that you are lookink for are located in " + know[user] + " page"+ "<a href=\"html/bibliography.html\">Bibliography</a>"+"</br></br>";
                }
                else
                {
                  document.getElementById("chatLog").innerHTML += "[Help Desk 2.0: ] The information that you are lookink for are located in " + know[user] + " page"+ "<a href=\"bibliography.html\">Bibliography</a>"+"</br></br>";
                }
                break;
            }
            else{
            document.getElementById("chatLog").innerHTML += "[Help Desk 2.0: ] " + know[user] +"</br></br>";
            break;
            }
        }
        unknow=1;
    }
    if(unknow==1){
        document.getElementById("chatLog").innerHTML += "[Help Desk 2.0: ] "+"I am really sorry. I am afraid that I don't understand your request. Can you be more specific?  What part of the report do you want to read? "+"</br></br>";
    }
}

/*open chatbox*/
function openChatBox() {
    document.getElementById("chatBox").style.display = "block";
}

/*close chatbox*/
function closeChatBox() {
    document.getElementById("chatBox").style.display = "none";
}
