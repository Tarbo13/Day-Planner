# Project Discription

Here I was tasked with creating a day planner app that would display and track the current time and day.  My app consists of nine hour blocks of time that will be shaded a different color based on the time of day: (Grey == Past, Red == Present, & Green == Future).  A user is able to enter their daily tasks into each hour block and save the entries so that they remain on the page after it is refreshed or closed and reopened.  
I used a combination of Bootstrap, JavaScript, JQuery, and CSS to create this app.  Bootstrap's grid system is used to create the layout of the app.  I then used various CSS classes to style the page.  I also used FontAwesome in this project to get the disk icons that were used on the save buttons.  I used JavaScript and JQuery to shade the various time blocks based on the current time of day.  There are style classes in my .css file that pull the style instructions for past, present, and future.  I used a click event on the save button to store the users input into each hour block into local storage.  When my app reloads the users data remains on the page.  
I used moment.js to track the date and time of day.  I was able to pull from their API by linking their CDN to my page and entering prewritten functions that moment provides in their documentation.
    


## Links

[GitHub Repository](https://github.com/Tarbo13/Day-Planner)

<br>

[Deployed Web Page](https://tarbo13.github.io/Day-Planner/)

### Screen Shots

![Time Block Shadding](https://user-images.githubusercontent.com/68627417/95254126-478fce00-07d4-11eb-8777-af95044fc097.png)

<br>

![Saved User Input in Time Blocks](https://user-images.githubusercontent.com/68627417/95275407-41621780-07fd-11eb-9306-6e6d4e99db06.png)


