# Exercise: Conditional accessibility

> In running this exercise make sure that nodejs is installed on your local machine ([How to install nodejs](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs))
>
> In this current directory please run `npm install`
> To test run `npm run dev`
>
> Usually the application will be accessible in your browser in http://127.0.0.1:5173/ or http://localhost:5173/

## Instructions:

The trouble is that the `<div class="green-dot">` is semantically meaningless, and so screen readers will ignore it. If someone can't see the screen, they'll have no idea that this random `div` is meant to signify that someone is online!

```
<p>
  This text is shown normally.
  <VisuallyHidden>
    This text isn't on the screen, but is announced by screen readers.
  </VisuallyHidden>
</p>
```

- Your task is to use this component to add the suffix **“(Online)”** after the names of online users.
- Users who are online should have the text **“(Online)”** added after their names.
- The VisuallyHidden component should be used to make sure that this text isn't shown visually.
- Users who are offline should not be affected.

#### Reference:

https://www.joyofreact.com/
