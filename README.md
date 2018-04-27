# Flux HQ Interactive Floor Map

Hack day project

AIMS:

- [x] create web page with map

- [x] when hover over a space it brings up more info about the room

- [ ] add link to click in info about the space

- [ ] make interactive with hovering over rooms and seeing if booked or not
  - this will require Google integration & probably converting to a rails app (to make Goggle and Flux auth easier) -> see issues

- [ ] get / make a better SVG

- [ ] add in hover sections to for where teams are

- [ ] other??


###### NOTES:
- Hover over meeting rooms, Area 51 and Enterprise Space will work 😁, anywhere else will not 😞
- Jordane is also working on something similar and Sam is making a better SVG for him. Look to use this new svg in the future and integrate with what Jordane is doing.


## Project Sharing

### Annah
This project was very exciting to me becuse I really wanted to work with SVGs. I found when using the vector image it was easier to write code to manipulate the image. We also wanted to add a level of user engagment with mouse over. I tried working with our CSS to create a color change when the mouse hovered over a meeting room. I think this would be a usful feature to add later. As a team I believe we hit our MVP maybe next time we can try for our stretch goals.

It was great to work in a group with Libby and Priya, we all had diffiernt back grounds. The collboration and conversation around the issues and code challenge resulted in really positive outcomes. I liked engaging with code again, I hadn't in awhile. This was a large review for me with the jovascript language. I hope to continue the project and create a finished polished product.

### Priya
It was very challenging and exciting participating in Hackfest for the first time. I worked on making a tooltip over the room
name so that when we hover over it, it will show the room name and few more details in Javascript, Its still in progress. I have learnt a lot of cool things from Libby as well, working with git and with Jquery which is very useful to know. 

Thanks to the team for all the hard work. Looking forward to adding more features next month.

### Libby

I have learnt that SVGs are hard! And that good prep is can be important to get the most out of hack days and very important to not get frustrated with working with SVGs!

SVGs - we ended up getting one that had thousands of elements, which was workable but not the best. It would have be good to have done some research into SVGs, which could have been picking the brains of people at Flux that do know about SVGs.

I got back into writing some basic jQuery. I have done a bit over the last couple of hack days and it is a good feeling to know that once I spend sometime working in something I haven't work in for ages that I can remember how to do things.

Next steps will be finishing off what we have done re space room descriptions and then adding in Google calendar integration, so that when you click on a room it shows you if it is booked or not. This will require some thought and the easiest way (and possibly the best so as to make sure only Flux people can access) is to convert this to a simple Rails app and use the `simple_google_auth` gem to integrate Google and auth. Oh and of course making it look pretty and fluxxy!
