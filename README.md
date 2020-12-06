# Jacqueline-Ross-Portfolio

In this portoflio you will find three html documents, each that were designed for mobile-first to ensure that they render well on a variety of devices and screens. These responsive pages were made using Bootstrap CSS Framework. 

# Deployed Applicaiton 


## Consistent on Every Page
**divs**
Majroity of the divs were removed to make the html documentation more semenatic. However, soem divs remain. The reason for the remaining divs was to reduce confusion. I found that when I had something cols that I wanted to list them similar to rows, as sections. This led me to start getting confused as to what was lining up where and the code was messy. I found divs necessary in those situations so that the code could remain clean and clear. 

**navbar**
On every page a navbar will be found. The navbar has my name, Jacqueline Ross and a link to each html page. The order of the links is index - labeled as About, contact - labeled as Contact Me, and portfolio - labled as portfolio. If you are on one of the links, it will appear as selected. If you are on a smaller screen the linsk to other pages willl be in the navbar toggler, as a drop down and Jaqueline Ross will remain as the navbar heading. 

**Containers and Rows**
Each body container occurs after the navbar. The containers were all renamed from divs to be main. I considered this to be the main parts of the webpage. Followed by the container each pave will have a row where the row was renamed to be section. Rows were renamed to be section because they group the document into parts or...sections. 

**cards**
On every page a card can be found as well. The card serves as the backdrop to the content of each page. Each card contains similar styling for the header, however the body of the card will vary from page to page. 

The card header div was changed to be labled as header, as it is the header of the card. The background was set to transparent within the html and the font was set to a custom purple shade for personal preferences.  

Each card body div was renamed to be main, as it is the main focus of the card. 

**footer**
Will you stay? time will tell

## index.html 

**Rows and Columns**
Within the main section of the webpage, the col is set to 12. Within the card I have the sme styling. this is what worked best for my page and desgin ideas. 

**My picture-on my card**
I used a wrapper to apply styling to my image. Within my class I set the image to float left so that the text would wrap around it. 

**My Personal Inforamtion-on my card**
p tags were used each paragraph within the body for the about me. I wrote my about me as If I was talking to the person reading it, for a more personal touch, I prefer that style of writing. I included my educational background, my professional background, why I changed careers, and some hobbies. 

## contact.html

**Rows and Columns**
Within the main section of the webage I have a col set to 2 with nothing in the tag then closed. I then have a col set to 8 that contains my form. This helped get my card and form the exact size and placement that I wanted. 
Within the body of the card there are no rows or cols, they messed up the formatting of the form. 
I have a row at the end of my page in its own section, as it stands alone. Please see p tag for more detials. 

**Form-on my card**
For each div class form-group, that was changed to section as it is a section of the form. They were then labled accordingly. 

**Font Awesome**
Font Awesome was use to provide imags for my p tag, see below and for my form labels: Your name (person), email address (Email), Talking bubble (Message). I thought they were a nice visual and added some flair. 

**p tag**
My p tag is a simple statment that spans a col-12, with a kiss heart face. I think this shows a little of my personality. Showing personality is improtant in my opinion, as it allows the reader to connect with the person behind the portfolio. 

## portfolio.html 

**Rows and Columns**
The main part of the webpage has a col of 9. I chose this because I liked the way it made my images appear. 
Within the card body, there is one row, so all my images are gropued together. Each image has two div col classes. one for a md screen and one for a small screen. This is so the yare responssive, and when viewed on a mobile device will adust to scroll down your screen one at a time. When the screen is larger than 540px they will appear two at a time: col-md-6. When it is smaller than 540px they will appear one a time col-sm-12. 

**Figures/Images and buttons** 
Each Figure tag represents an image wrapper. Each image wrapper contains an image and a figure caption as an image overlay. The image overlay serves as a link. 
In the future this will be a picture of my project, with a link to my github repository. The first one is fully fuctional with a link to my first respository created. You can see that the button is active, and the image matches the Code Refactor project. the remaining four images are place holders for hte upcoming projects. I chose ranndom pictures I had of myself so I coudl practie screen capturing an image, and uplaoding it to my repostiory. Each image is responsive. Ovever the image the buttons are disabled, which you can see as they are transparent. 

## style.css 

Bootstrap requires very little CSS Styling. I styled the body background of each page so that it was consistnent with an image I liked. I styled each card so that it contained margins on the top and bottom, to create space. This made it more visually appealing. Each card header also received the same styling: color, bold, margin - to make it more visually appealing. The portfolio images and buttons recieved styling to make the buttons stay over the images and make sure they are responsive. 


## credits 
The background image was found pixabay.com. While, it is free for commerical use, with no attribution requied, I would like to perosnally thank Jill Wellington for its desgin. 

The button overlay code on portfolio.html and style.css, was something I attempted many times on my own, I finally found assistance on stackoverflow.com from an answer submitted on a thred given by Terry Morse. 
