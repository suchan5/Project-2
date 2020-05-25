# Interactive Frontend Development Milestone Project
### Welcome to Pottermost

[My Portfolio Website](https://suchan5.github.io/Project-2/)<br>
[My Github Page](https://github.com/suchan5/Project-2)


This website is designed for Harry Potter fans to play with and have fun. 

It is developed as a play spot for Harry Potter fans which involves interactions with the users and enables them to explore the website regardless of different types of devices they use.

It comprises of four sections and users can access each sections of the website to:
* search for the details(e.g. House, Patronus, wand and etc) with the name of their favourite characters,
* play quiz to guess a character's House,
* play game to get rid of the flying Dementors to save Hogwarts and,
* obtain fun facts about Quidditch which are not highlighted in the books.
# Technologies used
* HTML5 - it was used to build the structure of the website.
* CSS3 - it was used to give design effects and style to the website. Also, media query was used for responsive design purpose.
* JavaScript - it was used to make the website more dynamic and interactive.
* [jQuery 3.5.0](https://jquery.com) - it was used to make it easier to use JavaScript.
* [Bootstrap 4.4](https://getbootstrap.com) - it was used for structure and style for the website with responsive design for different media sizes.
* [AOS(Animate of scroll library)](https://michalsnik.github.io/aos/) - it was used for animation effect on scrollong down the website.
* [Google Fonts](https://fonts.google.com)  - it was used for typography for design effect.
* [Font Awesome](https://fontawesome.com) - it was used for concise and intuitive design effect with using icons.
# Structure
#### Each sections are presented with <h> tag for clear visibility and understanding of the theme.
#### Each sections are interactive that makes it easier for users to explore the contents throught out the website.
1. Search Characters section is the main theme of them website and placed at the top.
2. House Quiz section is strategically placed below the Search Character section so that the users can utilize the Search Character section above for hints.
3. Dementor Game secton comes the next to maintain users' interest with interaction. Users can play game by clicking the flying Dementors to get rid of them and win the game.
4. Ask About Qudditch section is placed at the bottom of the website as this is the informative section with text information which involes the least interaction with users.
# UX Design
This website is created with a focus on UX that is:
1. Simple & clear :

- This is achieved by giving consistency in clear visual style throughout the website by grouping information into four different themes and sections. Also, I give enough spacing(padding and margin) for better readability of the contents.

2. Easy to use :
- Responsiveness : For example, font-size was responsive to different device sizes so that users can use the website even on the small size of thier devices.
- No auto pop-up or auto play :  When users want to play Harry Potter background music placed in the navbar, it requires their action to click the play button.
- Placeholder, icons, error messages were added to guide users.
3. Presentable :
- Clean and theme-related images were chosen for the backgroud to boost users' interests.
- To give the texts a better visibility over the background images, I have added a translucent white box so that the texts are more readable despite the use of background.
- Images are not pixelated and uniform in size on different media sizes.
- There is a contrast between contents and background images.
- For fonts, dark gray & white were chosen as two main colours in order to give consistency in design effect (coloful texts are added only for the error messages and appear upon click or submit).

## Features added for improved UX
#### Navbar : 
- A navbar is added on the top right of the website for users' direct access to each sections. 
- The navbar is auto-expanded without clicking when a mouse pointer comes over.
#### Button to scroll back to the top :
- This button is placed on the bottom right of the website and appear when the user scrolls down 200px from the top. It dissappears when scrolling up back to the top.
#### Giving hint & guide :
- For Search Characters section, suggesions for the search word are placed below the search bar to guide users.
- For House Quiz section, giving hint and guidance for the users (e.g. "Need hint? Search above")
- Error message with different colours appear to guide users when they type wrongly or did not input anything in the search bar.
#### Search result is enlarged :
- For Search Characters section, the search results can be enlarged for easier readability upon mouse hover.
#### Button colours are changed on hover
#### Mouse cursor is changed to pointer on click-able buttons
#### Home button & replay button :
- For Dementor Game section, home button is added that users do not need to use back button.
- For Dementor Game and House Quiz sections, replay buttons is added so that users can play again as many times as they want without reloading or reaccessing to the website.
#### Toggle button :
- For Ask About Quidditch section, which is the only informative section among the four, I have added a button to toggle the text contents so that the section will not look too wordy.
#### Open in the new tab :
- Any external links(e.g. official social medias of Harry Potter) are opend in the new tab upon clicking.
#### Button disabled when the other button is activated :
- For Dementor Game section, there are two modes of the game; easy and hard. When users play easy-mode, hard-mode button is disabled from clicking in order to prevent misclicking or disrupting the game, and vise versa.
# Responsive Design
The main purpose of the test on the responsive design is to ensure that the website works well and looked organized in different sizes of the media. It was acheived by using Bootstrap grid, media query, and 'Inspect' function from Google Chrome to test.

[screenshot of the Pottermost run on 'Am I Responsive' website](img/responsiveness_test.png)

# Deployment 
Pottermost is deployed using Github with protocol 'https'.
#### Errors & differences detected 
There are a few features detected which shows error and are different from the development in the VS code :
1. API was not working :

[mixed content block](img/api_error.jpeg)

Search Characters section was not working when I typed for a character's name and error message appeared as above.
This was due to running an HTTP AJAX operation in an HTTPS page. I resolved this issue by adding the following meta tag inside the head tag of my 'index.html' file.
```html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```
2. Responsiveness issue

[Dementor section goes out of the box](img/responsiveness_issue.png)

It was working well without any error on the 'Inspect' function from Google Chrome while developing.
However when I was testing on my phone after deployment,the Dementor Game section goes out of the container and texs were overlapped when I type in the text bar.

This was due to the different set of testing environment where in VS code, there was no keyboard popping up when I type, whereas on the phone, the keybord pop up which i could not put under my consideration while developing.

This was resolved by making the House Quiz section and Dementor Game section responsive by using Bootstrap to add 'container' and put the contents/texts within the container. 
```html
<div class="container">
```
Also, I used media query in CSS to make the font-size and image sizes smaller to make it more presentable and responsive on smaller size of the devices. Font-size, margin, padding in CSS file were rectified from 'px' to 'em' or '%'.
# Testing
* To ensure that there are no broken images or links.
* To ensure that fonts(ttf) are working well after deployment.
* To ensure that the website is responsive on different devices.
* To ensure that the website runs well on different browsers.


#### After resolving the issues detected while deploying, I sent the deployed URL to friends and family to test whether the website works responsively without broken images or links in different screen sizes. Also, tests was done on different browsers to ensure that the website works well.
##### Devices tested 
* Oppo R11
* iPhone XR
* iPhone 6S
* Galaxy S20+
* Galaxy Tab A
* MacBook Pro
* HanSung Computer Ultron 2454C

##### Browsers tested 
* Google Chrome 
* Safari 
* Firefox 
* Internet Exporer 

##### Error detected on Safari and IE11
###### There is an error detected on Safari, which is when the navbar is expanded, the flip effect applied with AOS does not function properly, causing the translucent white box (only the half of it) to flash and flip on top of the navbar instead of beneath it.

[Safari issue](img/safari_issue.jpeg)

This issue still remains unresolved. 
###### There is error detected on IE 11, whereby the Search Characters section is not displayed and JavaScript does not function properly. The whole section is aligned to the centre, the texts are displayed vertically and the search bar is not expanded fully. 
[IE11 issue](img/IE_issue1.jpeg)
[Safari issue](img/IE_issue2.jpeg)

This issue still remains unresolved. 
