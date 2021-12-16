# Jurata Assignment

Tasks

* Set up a Next.js app and commit the code to a public Github repository.
* Add a homepage that allows the user to type a question and let the UI print the response for that given question using the Micro Answer REST API (https://m3o.com/answer/).
* Take over the styleguide of Jurata.ch to build this UI. You can use the browser developer tools to find some corresponding css values. Try to really focus on the details, such as typography attributes and distances.
* Install ApolloClient to this web app. 
* Now fetch the answers via ApolloClient and store them in the cache.
* Make sure the answers are bound in the UI, so that any change in the cache is reflected immediately. 
* The user should be able to set the question as part of the url path and this should return the answer as server-side-rendered html.
* Add internationalization for two languages. The user should have a way to switch between them.
* Create a short, but comprehensible README.md, that would allow a 10-year old with a Mac to test your app.

## About 

This coding exercise revolves around the frontend technology of Jurata. Depending on how well you know the required frameworks and libraries, the assignment can be challenging due to its size. That's ok. Please, keep in mind that we attach more importance to the individual quality of the functionality (ref. bullet points), than the fact, that all tasks get completed. Feel free to skip parts, that you are uncomfortable with. If you do not know Next.js and Apollo, please refer to their documentation (of course, we will take your proficiency level into consideration).

## Running locally in development mode

To get started, just clone the repository and run `npm install && npm run dev`:

    git clone https://github.com/sunshine1004-dev/questionnaire
    npm install
    npm run dev

## Building and deploying in production

If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm start`:

    npm install
    npm run build
    npm start

You should run `npm run build` again any time you make changes to the site.

Note: If you are already running a webserver on port 80 (e.g. Macs usually have the Apache webserver running on port 80) you can still start the example in production mode by passing a different port as an Environment Variable when starting (e.g. `PORT=3000 npm start`).

## Configuring

If you configure a .env file (just copy [.env.example](https://github.com/sunshine1004-dev/questionnaire/.env.example) over to '.env' and 'env.local and then fill in the options) you can configure a range of options.

## Further reading

### Hosting options

You can host your Next.js site with any hosting provider. It works great with providers like Vercel, Heroku, Amazon Web Service, Google Cloud Platform, Microsoft Azure, DigitalOcean and others.
