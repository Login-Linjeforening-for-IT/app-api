# Cibus_backend
## INFT2508 Semester project

### Project description
Cibus is a marketplace where users can buy items. This is the backend for the 
application. The backend provides GET, PUT and DELETE endpoints.Endpoints are 
hosted at /ads and /category.

### Run application
Use `npm i && npm start` to run this application. This installs all necesarry
dependencies, compiles the TypeScript to JavaScript, and starts the application
on port 3000.

### Features
- Hosts the backend necesarry for the application to run as intended
- API hosting advertisements and categories including subcategories

### Design decisions and main components
The ‘main’ component of the application is the API. This is what makes the app 
possible, and provides the actual content. The backend is a node application 
written in TypeScript. There are 50 hard coded items provided by default, to 
show the idea I had in mind while creating this application. There are two 
endpoints, ads, and categories. Ads serves all 50 advertisements through a get 
endpoint. There are also put and delete endpoints, but these are not used by the 
frontend, due to listing items not being included in the scope of the assignment. 
More on this may be found in the limitations section at the bottom of this file. 
Furthermore, there is a category endpoint which provides all the categories 
available, as well as the subcategories of each category. The subcategories are 
scarcely used by the application, but would be necessary to grow the application, 
therefore they are included.

### Endpoint limitations
There is no interaction with the PUT or DELETE endpoints of the backend, as the 
application is already large for this limited time available, therefore I did 
not see it fit to add image CDN handling, image upload and ad preview features.

The backend does **NOT** have any CORS limitations.

Completed 07.11.23.
