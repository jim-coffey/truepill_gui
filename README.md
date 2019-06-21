# Truepill Inventory GUI

React with Typescript Inventory UI

Displays a list of Inventory `products` with recorded current & manual counts.

Click on a `Manual Count` **number** to open an input to allow the manual count to be changed for an individual product, then click on the `Reset Stock Level` button to reset both the current and manual count for that product.

Web socket implemented to update figures on screen automatically whenever the API says quantities in the database have been updated.

## Environment Variables

Required Build environment variables :

- REACT_APP_INVENTORY_API_URL e.g. //localhost:3030

## Install

`yarn install`

## Run

### Development

`yarn start`

### Production

`yarn build` and deploy from `/build` directory

Production deployment strategy not implemented as it depends upon if using Docker, or deploying to AWS, or etc., etc.

## Test

`yarn test`

## NOTES
