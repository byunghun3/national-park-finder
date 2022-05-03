# National Park Finder

This app helps you find the 466 parks registered under the National Park Service by name, type of park, activities, and states the park is located in. 



## Live Demo

https://byunghun3.github.io/national-park-finder/



## Technologies

This project was created with:

* React.js
* Node.js
* Express.js
* Mongoose/MongoDB
* Styled-components
* Material UI
* ESLint



## Usage

You can either use the default account below or sign up with a new account to save/heart favorite parks to your account.

Username: byunghun3@gmail.com

Password: byunghun3

![npf-main](./src/assets/images/national-park-finder-main.png)

In the top right corner, the account icon takes you to the login or the profile page, depending on the login status.

The search section contains 3 filters by activities that the park offers, states that the park is located in, and the type of park designation under NPS. 

There's a search bar where you can search parks by name, activities that are not included in the activities filter (i.e., Park Film or Snow Play), or a more specific activity (i.e., Back Country Camping vs RV Camping).

There's also a checkbox for filtering hearted parks saved to your account. 


![npf-search](./src/assets/images/national-park-finder-search-result.png)

The search results include basic info about name, states, park type of each filtered park. Each park card also contains a button to show more details and a heart button to save the park to your account (only when logged in).


![npf-details1](./src/assets/images/national-park-finder-details-1.png)
![npf-details2](./src/assets/images/national-park-finder-details-2.png)

Clicking on the Details button opens a modal with more info on each park. It contains a link to the official park website, and buttons to expand additional info on all the listed activities, operating hours, and weather tips for visiting. 


![npf-saved](./src/assets/images/national-park-finder-saved.png)

Saved parks have red hearts for indication.


## Reflection

My goal for this project was to build an app to introduce my web development journey and display my profile and projects.

I also treated this project as further practice for developing React apps.  

I paid particular attention to visual or styling details for this single-page app. Upon clicking any of the three hash links ("Projects" and "Story" in navbar, and "Back to Top" at the bottom of the page) and navigating to each section, I called the history.pushState() method to remove any added hash text from the URL. 

I was also careful with how I handled the scroll snap with responsiveness in mind, making sure that when the window size shrank, the snap didn't hide any content.   

Because adding tests at the end had me incorporating aria-labels to some elements, it got me thinking more about using them more often for both testing, SEO, and accessibility purposes. This will be an important skill to develop for my professional career.

This being my third React project, I reazlied how much more proficient and efficient with React and other complementary libraries I've become. 

For the next project, I want to learn about incorporating a back end with Node.js. Another long-term goal is to learn and use Next.js to build an app.
![image](https://user-images.githubusercontent.com/74752059/166394692-72e2b341-2e4d-4d2f-8ae1-69789848eef0.png)
