# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

http://jeevabus.com/ticket/book
http://jeevabus.com/ticket/cancel
http://jeevabus.com/ticket/reschedule
http://jeevabus.com/seats/view

ticket_booking_service.war

CRUD
C POST http://prababus.com/ticket/book?busid=1234 http_body/payload {"name".. }  
D DELETE http://prababus.com/ticket/cancel/{id}
U PUT http://prababus.com/ticket/reschedule/{id} {ticketid, datetime}
U PATCH http://prababus.com/ticket/reschedule/all
R GET http://prababus.com/seats/view?ignoreBookedSeats=true

CRUD

GET http://prababus.com/tickets
POST http://prababus.com/tickets
PUT http://prababus.com/tickets/{id} (path param) or http://prababus.com/tickets?id=1
DELETE http://prababus.com/tickets/{id} (path param) or http://prababus.com/tickets?id=1

API:

Web service
REST API

HTTP Method:

GET - receive something from some one
POST - Create something
PUT - Single Update something
PATCH - Bulk update
DELETE - remove something

/book

content-type: application/xml, application/json (input format)
accept: application/json, application/xml (response format)

Redbus : /book content-type: application/json accept: application/json (http header)

abhibus: /book accept: application/xml ()
