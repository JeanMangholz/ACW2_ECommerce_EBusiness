# ACW2_Ecommerce_Ebusiness

Here some information for the website: 

0 - index.html -> home page
     other web pages in html folder

1 - if you want to modify or add a javascript program, go to script folder

2 - if you want to modify or add an image, go to img folder

3 - if you want to modify the css file, go to style folder

4 - use the css style in the html page: 
                <p class ="italic"> Text in italic</p> 
                <p class ="oblique"> Text in oblique</p> 
                <p class ="bold"> Text in bold</p> 
                <p class="indent"> indent the paragraph </p>
                <q> for a citation </q>
                <h1>Title1</h1>
                <h2>Title2</h2>
                <h3>Title3</h3>
    Create a link to the bibliography <a href="bibliography.html">(University of Minnesota, N.D)</a> 

5 - Create a footnote:
                <p>Your text<sup><a href="#section1">[1]</a></sup> and the rest of the text</p>

                and add in the footer section:
                    <div id="section1"><p>[1] my footnote</p></div>

6 - Create a list: 
                <ul class="square">
                <li><a href="html/generalDescription.html">Modify plan</a></li>
                <li><a href="html/keyCriticalAreas.html">Modify plan</a></li>
                <li><a href="html/webTechnologyAnalysis.html">Modify plan</a></li>
                <li><a href="html/analysisEffectivinessWebsite.html">Modify plan</a></li>

7 - Insert an image: 
                <figure>
                <img class="imgSize" src="../img/LinkToYourImage.png" alt="Name of your image" />
                <figcaption>Title Image</figcaption>
                </figure>

8 - Insert an image with a zoom when the mouse is on it:
                <p>Image with zoom</p></br></br>
                <figure>
                <div class="zoomImg"><img class="imgSize" src="../img/LinkToYourImage.png.png" alt="Name of your image" /></div></br>
                <figcaption>Title Image</figcaption>
                </figure>

9 - Create a panel for hidding information, appears whan you click on the panel:
        <div id="flip">Click</div>
            <div id="panel">
                <p>Information or Image to hide</p>
            </div>
            add the javascript file add the end of the html file (flip script)
            add this line add the end of the html file <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> 

10 - Create a rollover image: 
        <a href="#images" onMouseOver="imgOn('img2')" onMouseOut="imgOff('img2')"><img name="img2" border=0 height=100 width=90 src="../img/image1_rolloveroff.jpg" alt="Rollover"></a></li>

        and in img folder: name your image: image1_rolloveroff.jpg and image1_rolloveron.jpg
                                            image2_rolloveroff.jpg and image2_rolloveron.jpg

        and in script folder, update the name of the images in scriptRollover.js
        call the javascript file add the end of the html file (rollover script)

11 - When you have finish your part: update the knowledge of the chatbot. The chatbot helps the navigation of the client on the website.
    The javascript program checks if it knowns one of the words that the customer has written (can be a word or a phrase). If it is not present, it will say that it doesn't understand the query. Otherwise, it will respond with a link.
    example: "I want to see the list of books present in the bibliography". The program will find the keyword "books" in the knowledge and will answer with the link of the bibliography web page.

        extact of the knowledge:
            var know={
                "Mike" : "Nice to meet you Mike!",
                "Books":"Bibliography",
                "books":"Bibliography",
                "Book":"Bibliography",
                "book":"Bibliography",
                };

