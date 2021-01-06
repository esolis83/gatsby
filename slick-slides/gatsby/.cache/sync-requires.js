const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/enriquesolis/Documents/master-gatsby/slick-slides/gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-beers-js": hot(preferDefault(require("/Users/enriquesolis/Documents/master-gatsby/slick-slides/gatsby/src/pages/beers.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/enriquesolis/Documents/master-gatsby/slick-slides/gatsby/src/pages/index.js"))),
  "component---src-pages-orders-js": hot(preferDefault(require("/Users/enriquesolis/Documents/master-gatsby/slick-slides/gatsby/src/pages/orders.js"))),
  "component---src-pages-pizzas-js": hot(preferDefault(require("/Users/enriquesolis/Documents/master-gatsby/slick-slides/gatsby/src/pages/pizzas.js"))),
  "component---src-pages-slicemasters-js": hot(preferDefault(require("/Users/enriquesolis/Documents/master-gatsby/slick-slides/gatsby/src/pages/slicemasters.js")))
}

