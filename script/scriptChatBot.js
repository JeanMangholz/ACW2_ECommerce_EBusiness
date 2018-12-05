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
    "trends":"Trends",
    "trend":"Trends",
    "Trends":"Trends",
    "Trend":"Trends",
    "History":"Trends",
    "history":"Trends",
    "Evolution":"Trends",
    "evolution":"Trends",
    "time":"Trends",
    "Time":"Trends",
    "date":"Trends",
    "dates":"Trends",
    "Date":"Trends",
    "Dates":"Trends",
    "Business":"UseTechnologyToBusiness",
    "business":"UseTechnologyToBusiness",
    "legal":"LegalSocialEthicalAspects",
    "Legal":"LegalSocialEthicalAspects",
    "social":"LegalSocialEthicalAspects",
    "Social":"LegalSocialEthicalAspects",
    "ethical":"LegalSocialEthicalAspects",
    "Ethical":"LegalSocialEthicalAspects",
    "ethics":"LegalSocialEthicalAspects",
    "ethic":"LegalSocialEthicalAspects",
    "Ethic":"LegalSocialEthicalAspects",
    "Ethics":"LegalSocialEthicalAspects",
    "aspect":"LegalSocialEthicalAspects",
    "aspects":"LegalSocialEthicalAspects",
    "Aspects":"LegalSocialEthicalAspects",
    "Aspect":"LegalSocialEthicalAspects",
    "description":"DescriptionTechnology",
    "Description":"DescriptionTechnology",
    "technology":"DescriptionTechnology",
    "Technology":"DescriptionTechnology",
    "introduction":"DescriptionTechnology",
    "Introduction":"DescriptionTechnology",
};

function talk(){
    var user = document.getElementById("userBox").value;
    var separator=" ";
    var arrayOfStrings;
    var temp=" ";
    var unknow=0;
    var i=0;
    
    str="[You:] "+ user;
    result=str.fontcolor("red");
    document.getElementById("chatLog").innerHTML+= result +"</br>";

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
                    str="[Help Desk 2.0: ] The information that you are lookink for are located in " + know[user] + " page ";
                    result=str.fontcolor("green");
                    document.getElementById("chatLog").innerHTML += result + "<a href=\"index.html\">Home</a>"+"</br></br>";
                }
                else
                {
                    str="[Help Desk 2.0: ] The information that you are lookink for are located in " + know[user] + " page ";
                    result=str.fontcolor("green");
                    document.getElementById("chatLog").innerHTML += result + "<a href=\"../index.html\">Home</a>"+"</br></br>";
                }
                break;

            }
            if(know[user].localeCompare("DescriptionTechnology") ==0)
            {
                if(page == 1)
                {
                    str="[Help Desk 2.0: ] The information that you are looking for are located in " + know[user] + " page ";
                    result=str.fontcolor("green");
                    document.getElementById("chatLog").innerHTML += result + "<a href=\"html/descriptionTechnology.html\">Description of the technology</a>"+"</br></br>";
                }
                else
                {
                    str="[Help Desk 2.0: ] The information that you are looking for are located in " + know[user] + " page ";
                    result=str.fontcolor("green");
                    document.getElementById("chatLog").innerHTML += result + "<a href=\"descriptionTechnology.html\">Description of the technology</a>"+"</br></br>";
                }
                break;
            }
            if(know[user].localeCompare("Trends") ==0)
            {
                if(page ==1)
                {
                    str="[Help Desk 2.0: ] The information that you are looking for are located in " + know[user] + " page ";
                    result=str.fontcolor("green");
                    document.getElementById("chatLog").innerHTML += result + "<a href=\"html/trends.html\">Trends</a>"+"</br></br>";
                }
                else
                {
                    str="[Help Desk 2.0: ] The information that you are looking for are located in " + know[user] + " page ";
                    result=str.fontcolor("green");
                    document.getElementById("chatLog").innerHTML += result + "<a href=\"trends.html\">Trends</a>"+"</br></br>";
                }
                break;
            }
            if(know[user].localeCompare("UseTechnologyToBusiness") ==0)
            {
                if(page==1)
                {
                    str="[Help Desk 2.0: ] The information that you are looking for are located in " + know[user] + " page ";
                    result=str.fontcolor("green");
                    document.getElementById("chatLog").innerHTML += result + "<a href=\"html/useTechnologyToBusiness.html\">Use of the technology to business</a>"+"</br></br>";
                }
                else
                {
                    str="[Help Desk 2.0: ] The information that you are looking for are located in " + know[user] + " page ";
                    result=str.fontcolor("green");
                    document.getElementById("chatLog").innerHTML += result + "<a href=\"useTechnologyToBusiness.html\">Use of the technology to business</a>"+"</br></br>";
                }
                break;
            }
            if(know[user].localeCompare("LegalSocialEthicalAspects") ==0)
            {
                if(page==1)
                {
                    str="[Help Desk 2.0: ] The information that you are looking for are located in " + know[user] + " page ";
                    result=str.fontcolor("green");
                    document.getElementById("chatLog").innerHTML += result + "<a href=\"html/legalSocialEthicalAspects.html\">Legal,social and ethical aspects</a>"+"</br></br>";
                }
                else
                {
                    str="[Help Desk 2.0: ] The information that you are looking for are located in " + know[user] + " page ";
                    result=str.fontcolor("green");
                    document.getElementById("chatLog").innerHTML += result + "<a href=\"legalSocialEthicalAspects.html\">Legal,social and ethical aspects</a>"+"</br></br>";
                }
                break;
            }
            if(know[user].localeCompare("Bibliography") ==0)
            {
                if(page==1)
                {
                    str="[Help Desk 2.0: ] The information that you are looking for are located in " + know[user] + " page ";
                    result=str.fontcolor("green");
                    document.getElementById("chatLog").innerHTML += result + "<a href=\"html/bibliography.html\">Bibliography</a>"+"</br></br>";
                }
                else
                {
                    str="[Help Desk 2.0: ] The information that you are looking for are located in " + know[user] + " page ";
                    result=str.fontcolor("green");
                    document.getElementById("chatLog").innerHTML += result + "<a href=\"bibliography.html\">Bibliography</a>"+"</br></br>";
                }
                break;
            }
            else{
                str="[Help Desk 2.0: ] " + know[user];
                result=str.fontcolor("green");
                document.getElementById("chatLog").innerHTML += result +"</br></br>";
                break;
            }
        }
        unknow=1;
    }
    if(unknow==1){
        str="[Help Desk 2.0: ] "+"I am really sorry. I am afraid that I don't understand your request. Can you be more specific?  What part of the report do you want to read? ";
        result=str.fontcolor("green");
        document.getElementById("chatLog").innerHTML += result +"</br></br>";
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
