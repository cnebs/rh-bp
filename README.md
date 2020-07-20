# React Hooks Global-State Boilerplate
React-Express CRUD boilerplate using a global state store.

This global state store behaves like Redux, but uses only Hooks, React Context API, & useMemo to prevent uneccesary re-renders.

Includes some components to render a simple todo list :)

These components include examples of state, effect, memo, and context hooks.

Remove the components, storeAPI's custom hooks, and reducer's switch cases to make a clean boilerplate.

Use as a template for your own projects as needed.

Use `npm run dev` to start.

And please feel free to add issues for suggestions and bugs

___

#### This contains webpack logic to load environment variables into react for UI access:

In development `npm run dev`, add environment variables to the `.env.dev` file to access them on both the client and server.

In production `npm run start`, either create a `.env` file with your variables or simply `$EXPORT` them in the shell.

A Dockerfile is also included, and offers a basis for using a **port** environment variable.

___

More info to come on how React's Context API & Hooks are used here to replace Redux's functionality...
