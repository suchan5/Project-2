# Interactive Frontend Development Milestone Project

[My Portfolio Website](https://suchan5.github.io/Project-2/) - Welcome to Pottermost<br>
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
1. Search Characters section is the main theme of them website and placed at the top.
2. House Quiz section is strategically placed below the Search Character section so that the users can utilize the Search Character section above for hints.
3. Dementor Game secton comes the next to maintain users' interest with interaction. Users can play game by clicking the flying Dementors to get rid of them and win the game.
4. Ask About Qudditch section is placed at the bottom of the website as this is the informative section with text information which involes the least interaction with users.
#### Each sections are presented with <h> tag for clear visibility and understanding of the theme.
#### Each sections are interactive that makes it easier for users to explore the contents throught out the website.
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
