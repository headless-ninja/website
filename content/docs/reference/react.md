---
title: React
category: reference
stub: true
weight: 200
---

_On this page we want to explain everything that's in the `hn-react` package._

## DrupalPage component

The \\<DrupalPage /> component is the most important one when using Headless Ninja. It handles 

### Examples

#### Basic example

```javascript
import React, { Component } from 'react';
import { DrupalPage } from 'hn-react';
import { withRouter } from 'react-router-dom';


class App extends Component {
  render() {
    const { location: { pathname, search }} = this.props;

    return (
      <DrupalPage
        mapper={{
          node__page: Article,
          node__product: Product,
        }}
        url={pathname + search}
      />
    );
  }
}

const Article = ({ entity }) => <h1>{entity.title}</h1>;
const Product = ({ entity }) => <h1>{entity.title}</h1>;

export default withRouter(App);
```

### Props

#### `url`

#### `asyncMapper` & `mapper`

#### `layout`

#### `layoutProps`

#### `renderWhileLoadingData`

#### `pageProps`
