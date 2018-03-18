---
title: React setup
category: react-quickstart
weight: -100
---

To get you started as quickly as possible, you can follow these instructions. If you've already gotten your React app up and running, please head straight to the [Setting up Headless Ninja](#setting-up-headless-ninja) section.

Please also make sure you've followed the [Drupal setup guide](/docs/drupal-quickstart).

## Setting up your React app
Open up your terminal and make sure you've got Node.js with version >= 6 installed. Run `node -v` to verify. Head over to the [Node.js website](https://nodejs.org) to download or update.

After Node.js is installed, run the following commands. They will make sure your React app is running and will open up your brand new app in your browser.

Please make sure to replace `my-app` by your own app name.
```bash
npx create-react-app my-app
cd my-app
npm start
```

Now open up the `my-app` folder in your editor of choice.

## Setting up Headless Ninja
To get started, run the following command from your `my-app` folder
```bash
npm install hn hn-react react-router-dom --save
```
Or with Yarn
```bash
yarn add hn hn-react react-router-dom
```
We'll now do two things:
1) Connect React to the Drupal site
2) Render the page title from Drupal

Start by opening up `src/index.js`. In this file we'll
* Initialize Headless Ninja with HN's `site.initialize()`
* Wrap our App in react-router's `<BrowserRouter />`
* Tell the React app to wait for our Drupal to respond with data by wrapping it in HN's `waitForHnData()`.

Replace all contents of `src/index.js` with
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { waitForHnData, site } from 'hn-react';
import App from './App';

(async () => {
  site.initialize({ url: 'http://drupal.dev' });

  ReactDOM.render(
    await waitForHnData(
      <Router>
        <App />
      </Router>
    ),
    document.getElementById('root'),
  );
})();
```

Please replace "http://drupal.dev" with [your Drupal url](/docs/drupal-quickstart).

Now open up `src/App.js`. In this file we'll
* Make sure HN updates whenever your visitor navigates
* Map the Content Type we get from Drupal to a React component

Replace all contents of `src/App.js` with
```javascript
import React, { Component } from 'react';
import { DrupalPage } from 'hn-react';
import { withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    const { location: { pathname, search } } = this.props;

    return (
      <DrupalPage
        mapper={{ node__content: Article }}
        url={pathname + search}
      />
    );
  }
}

const Article = ({ entity }) => <h1>{entity.title}</h1>;

export default withRouter(App);
```

Now head back to your browser, and you should see the page title as you've entered it in your Drupal homepage.

That's it! Follow the other guides for more detailed instructions and documentation:
* [waitForHnData()](/docs/react/wait-for-hn-data)
* [\<DrupalPage />](/docs/react/DrupalPage)
* [Mapping Drupal to React components](/docs/react/mappers)
* [Server Side Rendering](/docs/react-quickstart/server-side-rendering)
