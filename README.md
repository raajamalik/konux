Here is the approach with which I did:

1. 	Originality of thoughts - First thing first, I can assure you about the originality of thoughts. What ever you see is my thinking. Be it UI, UX, interactions, colors and data representation. 

2. 	A note on UI design 
	- UI design's must be driven by the purpose. Becuase the purpose is to show data, I have come up with a simple and sober UI and colors whose highlights are to show data. Be it in the form of graph, dates, date ranges.
	- I have taken an approach of component based design, where every element on UI is a component. This gives great advantage of reusing the component. With component based design the maintenance and change of appearance of component can be handled and reflected very quickly across the application because we only have to do it at one place and it will reflect at all places.
	
3. 	A note on Hardcoded values
	- You may see some hard coded values here and there. I totally agree that these must be externalized and injected to our application to remove coupling so that we do not have to touch code to update these values. This goes true for text you see on screen, graph properties like height, width, colors, fills, margins etc.

4. 	Applicaton structure:
	root
		- src - contains all source code
		- cypress - contains all testcases. These are UI automation testcases.
		- public - contains index.html and favicon.ico
		
	- I have divided our application into multiple pages in our website. so, pages is a directory I have kept inside src.
	- src also contains a folder for all the reusable components.
	
5. 	I intentionlly used all those tehcnologies which you currently use in your project. React, Redux, TypeScript, D3, 	React-Redux, React-Bootstrap. Also, some new one like Cypress. I love cypress, it really simplifies UI automation 		testing which I stronly believe every UI engineer must write. 

6. 	This project is bootstraped from create-react-app with --typescript flat. How to run -
	- Just clone and npm install
	- Running applicatino - npm run start 
	- Running tests - npm run cypress
	
7. 	A look at the data - I assumed data(date and number) to be a train frequency on any given date. So, I named page and 		folders, models, components as Train Frequency.

8. 	Please forgive me for responsiveness. I could not make it responsive with Graph, but that is something I will learn 		fast. 


