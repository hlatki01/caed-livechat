## Running a development environment

With your **Server** running locally at http://localhost:3000
<br />

1. Install all node dependencies.

```bash
yarn
```

2. Build preact application to `/build` folder

```bash
yarn dev
```

3. In another terminal, run webpack with hot reload at http://localhost:8080

```bash
yarn start
```

4. Open this file below in your browser

```bash
widget-demo.html
```

_OBS: For a better performance, you can run this `widget-demo.html` on a [http server](https://github.com/http-party/http-server)._

## Different host

To select a different host on your local widget, check this configuration at `/src/api.js` file.

```javascript
const host =
  window.SERVER_URL ||
  queryString.parse(window.location.search).serverUrl ||
  (process.env.NODE_ENV === "development" ? "http://localhost:3000" : null);
```

Here, you can change to your new configuration.

```javascript
const host =
  window.SERVER_URL ||
  queryString.parse(window.location.search).serverUrl ||
  (process.env.NODE_ENV === "development" ? "https://your.server.com" : null);
```

## Available CLI Commands

```bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn start

# build preact application to "build" folder
yarn dev

# build for production with minification
yarn build

# test the production build locally
yarn serve

# run tests with jest and preact-render-spy
yarn test

# run the storybook
yarn storybook
```
