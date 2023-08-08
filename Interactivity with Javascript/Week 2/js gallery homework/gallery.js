/*Name this external file gallery.js*/
var obj;

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
 console.log("previewPic" + previewPic.alt); document.getElementById('image').innerHTML=previewPic.alt;
    document.getElementById('image').style.background="url('"+previewPic.src+"')";
	}

function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
    var oldAlt = "Hover over an image below to display here."
    //var oldPic = (color:"#FFFFFF", backgroundColor: "#8e68ff", backgroundImage: "url('')")
    document.getElementById('image').innerHTML=oldAlt;
    document.getElementById('image').style.background='#8e68ff';
    document.getElementById('image').style.backgroundImage="url('')";
	}