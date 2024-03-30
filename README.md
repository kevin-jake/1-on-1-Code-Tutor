# Creating exercise

```
cd Exercises/ReactJS
npm create vite@latest <module name> -- --template react
cd <module name>
npm install
copy src of 01-hello-react to <module name>
```

## When creating solutions

1. Create the exercise solution on the `solutions` branch. git push and commit and take note of the commit hash.
2. Checkout to `master` branch. Run `git cherry-pick <solutions commit hash>` to update the master branch.

`npx degit lzm0x219/template-vite-react myapp`
