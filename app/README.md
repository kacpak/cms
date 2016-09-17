# Frontend application
This is Angular2 app acting as cms's frontend

## Prerequisites
* Node.js
* `npm install` to resolve dependencies for application and build system

## Building
* `npm run build` builds application
* `npm run serve` serves application on localhost from memory
* `npm run clean` fully cleans application directory

To run application in development mode add `:dev` to relevant task names

## Environment configuration
Add required API information to `config.js`  

* `apiEndpoint` protocol + hostname of api
* `clientId` Laravel Passport client id
* `clientSecret` Laravel Passport client secret key

## Testing
Testing framework is not implemented at the moment
