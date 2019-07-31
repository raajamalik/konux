# Case Study with React, Redux, TypeScript, D3, Cypress, React Bootstrap, React Datepicker and more...

Please go through these points before you get hold of source folder.
(For application running instructions, please follow #6)

1. 	### Originality of thoughts 
	- First thing first, I can assure you about the originality of thoughts. What ever you see is my thinking. Be it UI, UX, interactions, colors and data representation. 

2. 	### A note on UI design 
	- UI design's must be driven by the purpose. Becuase the purpose is to show data, I have come up with a simple and sober UI and colors which highlights the data. Be it in the form of graph, dates, date ranges.
	- I have taken an approach of component based design, where every element on UI is a component. This gives great advantage of reusing the component. With component based design the maintenance and change of appearance of component can be handled and reflected very quickly across the application because we only have to do it at one place and it will reflect at all places.
	
3. 	### A note on Hardcoded values
	- You may see some hard coded values here and there. I totally agree that these must be externalized and injected to our application to remove coupling so that we do not have to touch code to update these values. This goes true for text you see on screen, graph properties like height, width, colors, fills, margins etc.

4. 	### Applicaton structure:
		root
		|---src - contains all source code
			|---assets
			|---components
				|---charts
				|---datetime
				|---html
				|---layout
				|---message
			|---config
				|---timeframe.json
			|---pages
				|---trainFrequency
					|---actions
					|---components
					|---reducers
					|---types
					|---constants.tsx
		|---cypress - contains all testcases. These are UI automation testcases
			|---fixtures
			|---integrations
				|---trainFrequency
					|---AddPoint.spec.js
					|---GETApi.spec.js
					|---timeframe.spec.js
					|---LineGraph.spec.js
					|---DateRange.spec.js
		|---public - contains index.html and favicon.ico
			
	- I have divided our application into multiple pages in our website. so, pages is a directory I have kept inside src.
	- src also contains a folder for all the reusable components.
	
5. 	### Libraries and packages used: 
		I intentionlly used all those tehcnologies which you currently use in your project. 
			-React
			-Redux
			-TypeScript
			-D3
			-React-Redux
			-React-Thunk
			-React-Bootstrap
			-React-Datepicker
			-Cypress - Also, some new one like Cypress. I love cypress, it really simplifies UI automation 		testing which I stronly believe every UI engineer must write. You can explore it here - https://www.cypress.io/. There is a great training conducted by Cypress tomorrow, I am joining it.

6. 	### How to run 
	- This project is bootstraped from create-react-app with --typescript flag. How to run -
	
	``` git clone 
	npm install
	npm run start
	npm run cypress
	``` 
	
	Once cypress is run, you will see a cypress window. You just have to click Run all specs at the right top to run all tests. 	
	
7. 	### A look at the data 
	- I assumed data(date and number) to be a train frequency on any given date. So, I named page and 		folders, models, components as Train Frequency.

8. 	### Please forgive me for responsiveness. 
	- I could not make it responsive with Graph, but that is something I will learn 		fast. 

9.	### Loved and enjoyed D3 
        - I really liked working in D3 and I found that the code written in D3 can be quite messy and hard to understand. Although I have tried to make it easy with Inline comments. But I strongly believe that just by looking at the markup, one should be able to understand that this code renders line chart. 
        Unfortunately, other than component name nothing much is helping us do that. Though I had limited time, but I would have loved to break this line chart code in several other components like Line, Axis, Scale, Path, Circle, Ticks, Group, Canvas etc. Once we have such thing it will be really easy to work with it. 

10.	### Test cases - 
	- Though not extensive but yes tests all major functionality as per requirements. But yes, I agree that I could not test Line chart rendering. I thought that we can only assert the change of d attribute of path tag. This is something which I have o explore more.



