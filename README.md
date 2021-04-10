## **Weather App**
A weather website I did while learning JavaScript. <br>
<hr>
## The Process:
### **Idea:**
While learning JavaScript, The course I took did a simple Weather website that only shows the current degrees, location name, and a weather icon (using AccWeather Free API) <br>
I wanted to do something by myself with addtional features (that the API let me use). <br>
I saw that the AccWeather API actually allows me to access all sorts of data. <br>
My Idea:
- Current Condition
    - Location's County, Name, Current Time, Current Weather in Degrees & Text (Cloudy, Sunny, etc).
- Forecast Information
    - Forecast for the next 12 Hours & 5 Days

With that in mind, I started to design!

### **Design:**
I opened **Figma**, and started playing with ideas, and ended up with this design idea:<br>
![Desktop Design Idea, Day & Night Versions](https://via.placeholder.com/150)
![Mobile Design Idea , Day & Night Versions](https://via.placeholder.com/150)
<br> *I ended up changing the desktop version a bit, but similar design overall*

### **Development**:
I started by building a simply HTML structure, naming elements with IDs and making sure everything is in place and no missing things. <br>
After that, I started doing the CSS part. For this project I used **TailwindCSS** (with JIT enabled), to quickly set everything up (with creating day&night themes that changes based on the location's time). <br>
Finally, it's time to do some JavaScript things, and put to the test what I've learned in the last few days. <br>
- Workflow:
    - I started by setting up the API in the *forecast.js file*, and making sure the functions I wrote works and returns all the data I needed.
    - I moved into the *app.js file* where I will do all the DOM minipulation.
    - I added all the elements from the document so I'll have access to them.
    - First, I worked on grabbing the search box text value and insert it into a function that returns me all the data I need to start using it.
    - Then, I made a new function called *updateUI* and chained it after the first function<br>
    `updateCity(city).then(data => updateUI(data)).catch(err => console.log(err));`
    - Now that I have the data I need, I can start with the DOM minipulation.
        1. destructure properties, so it will be more comfortable to write them each time
        2. updated all the current condition to the document
        3. by default, the forecast area is hidden so I had to remove it when a user enters a location.
        4. then I added a forecast reset since each time a user enters a location, it generates new forecast items, so I found this method to work. just an empty string to make sure it's empty (`.innerHTML = ""`).
        5. made a simple if function to check if it's day or night and change the design based on that (overall theme, icons).
        6. and finally,  I made two for loops that generates forecast items, one for the 12 hours and one for the 5 days.
        7. since some values were in Fahrenheit, I had to convert them to Celsius, since that's what I use (simple function).
    - That's it!
    <br>
### **Conclusion**:
- I learned how to use different concepts that I've learned together
- Learned new things, such as getting a day of the week based on date using `.toLocaleDateString`
- Saw how different concepts fits togther and how some don't
- debugging any errors that I have and fully understand them.
- This project in my opinion it far from perfect, but it was a great way to practice my skills as a new developer!
<br><br>
As always, If you got any feedback about my design/code, feel free to contact me and help me become a better developer!
