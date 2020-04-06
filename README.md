# Budget Tracker

A budget tracker application used to help the user visualize their spending habits. The web application can also be installed as a PWA (Progessive Web App) for online/offline use, so that the user can update their budget if they are not able to be connected to the internet (or if the servers are down). Most all of the code was provided by the University of Washington's Coding Bootcamp, and it was my assignment to create the web manifest, install the service worker and make sure it worked when deployed on Heroku.

## Usage

To install and use locally,

1. `git clone` this repository to a local directory
2. Install the dependencies via the terminal by running:

```bash
npm i
```

3. Then run the application with:

```bash
npm run start
```

Optionally, run the application with nodemon using:

```bash
npm run watch
```

4. Open the browser and visit [http://localhost:3000/](http://localhost:3000/)

To use the deployed application, click [here](https://justin-budget-tracker.herokuapp.com/)

### Interaction

The user can input a transaction name and cost associated with it, then click either the 'Add Funds' or 'Subtract Funds' button to begin tracking their expenses. The application will graph the user's spending habits and display their financial situation on the graph. The data will persist, and the application also allows the user to update transactions if there is not an internet connection.

### Screenshots

![budget-tracker-screenshot](https://github.com/twopcz/Budget-Tracker/blob/master/public/assets/images/budget-tracker.png?raw=true)

Installed as an application (Progessive Web App)
![pwa-screenshot](https://github.com/twopcz/Budget-Tracker/blob/master/public/assets/images/budget-tracker-pwa.png?raw=true)

# Technologies

This application was built with:

- JavaScript
- [Chart.js](https://www.chartjs.org/docs/latest/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Node](https://nodejs.org/en/)

The dependencies required:

```
"dependencies": {
    "express": "^4.17.1",
    "mongoose": "^5.9.5"
  }
```

Documentation on dependencies:

- [mongoose](https://mongoosejs.com/docs/guide.html)

# Enhancements

I did not get around to implementing [Workbox](https://developers.google.com/web/tools/workbox) into this assignment as I focused on refreshing/relearning/advanced learning on React.js for the upcoming weeks.

# References

- UW Coding Bootcamp for providing the frontend and backend code.
- [Flaticon](https://www.flaticon.com/) - for the icon used as the favicon

# License

This project is licensed under the MIT License - see the LICENSE.md file for details
