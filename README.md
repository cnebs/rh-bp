# React Hooks Global-State Boilerplate
React-Express boilerplate using global state store with hooks to replace the need for Redux

Includes some components to render an initial todo list that uses local state with hooks and a global state with Context API & hooks :)

Remove both the components and reducer's switch cases to make a clean boilerplate for development.

Use as a template for your own projects as needed.

Use `npm run dev` to start.

___

This boilerplate contains webpack logic to load environment variables into react without using create-react-app.

In development `npm run dev`, add environment variables to the `.env.dev` file to access them on both the client and server.

In production `npm run start`, either create a `.env` file with your variables or simply `$EXPORT` them in the shell.

A Dockerfile is also included, which should use a port environment variable to be used if containerized and deployed on the cloud.

___

More info to come on how React's Context API & Hooks are used here to replace Redux's functionality...
