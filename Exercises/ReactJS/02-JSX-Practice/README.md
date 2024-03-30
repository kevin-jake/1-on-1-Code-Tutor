# Exercise: JSX Practice

> In running this exercise make sure that nodejs is installed on your local machine ([How to install nodejs](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs))
>
> In this current directory please run `npm install`
> To test run `npm run dev`
>
> Usually the application will be accessible in your browser in http://127.0.0.1:5173/ or http://localhost:5173/

## Instructions:

The UI should match the screenshot.

![Output](https://courses.joshwcomeau.com/react-mats/critter-mockup-v2.png)

- The data should be referenced using expression slots.
- The user's name should be a link, and it should link to `/users/[handle]`. With this particular data, it should be `/users/benjaminthorn`.
- There is no actual "profile page", and so the link won't resolve to anything. That's alright.
- The avatar image should use the author's _avatarDescription_ for the alt text.
- For the timestamp in the footer, use the provided formatDate function. Pass in the _message.published_ to get a nicely-formatted timestamp

#### Reference:

https://courses.joshwcomeau.com/joy-of-react/01-fundamentals/02.05-jsx-exercises
