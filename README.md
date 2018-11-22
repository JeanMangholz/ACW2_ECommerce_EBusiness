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

5 - Create a footnote or create a reference: 
                <p>Your text and here the reference<sup><a href="#section1">[1]</a></sup> and the rest of the text</p> 
        and add in the footer section:   
                <div id="section1"><p>[1] my reference</p></div>

6 - Create a list: 
                <ul class="square">
                <li><a href="html/generalDescription.html">Modify plan</a></li>
                <li><a href="html/keyCriticalAreas.html">Modify plan</a></li>
                <li><a href="html/webTechnologyAnalysis.html">Modify plan</a></li>
                <li><a href="html/analysisEffectivinessWebsite.html">Modify plan</a></li>

7 - Insert an image: 
                <figure>
                <img class="imgSize" src="img/LinkToYourImage.png" alt="Name of your image" />
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

10 - Create a rollover image: 
        <a href="#images" onMouseOver="imgOn('img2')" onMouseOut="imgOff('img2')"><img name="img2" border=0 height=100 width=90 src="../img/image_rolloveroff.jpg" alt="Rollover"></a></li>
        and in img folder: name your image: image_rolloveroff.jpg and image_rolloveron.jpg

