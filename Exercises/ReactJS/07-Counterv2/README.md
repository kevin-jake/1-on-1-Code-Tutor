# Exercise: Counterv2

> In running this exercise make sure that nodejs is installed on your local machine ([How to install nodejs](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs))
>
> In this current directory please run `npm install`
> To test run `npm run dev`
>
> Usually the application will be accessible in your browser in http://127.0.0.1:5173/ or http://localhost:5173/

## Instructions:

The buttons have already been added to the page, but they don't do anything yet. Your job is to wire up the buttons.

Acceptance Criteria:

- The <button style="width: 32px; height: 32px; padding: 0px; display: inline-grid; place-content: center; background: var(--color-gray-200); border: none; border-radius: 3px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg></button> button should increase the count by 1.
- The <button style="width: 32px; height: 32px; padding: 0px; display: inline-grid; place-content: center; background: var(--color-gray-200); border: none; border-radius: 3px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline></svg></button> button should increase the count by 10.
- The <button style="width: 32px; height: 32px; padding: 0px; display: inline-grid; place-content: center; background: var(--color-gray-200); border: none; border-radius: 3px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg></button> button should reset the count to 0.
- The <button style="width: 32px; height: 32px; padding: 0px; display: inline-grid; place-content: center; background: var(--color-gray-200); border: none; border-radius: 3px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg></button> button should set the count to a random number between 1 and 100.
- The <button style="width: 32px; height: 32px; padding: 0px; display: inline-grid; place-content: center; background: var(--color-gray-200); border: none; border-radius: 3px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg></button> button should decrease the count by 10.
- The <button style="width: 32px; height: 32px; padding: 0px; display: inline-grid; place-content: center; background: var(--color-gray-200); border: none; border-radius: 3px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></button> button should decrease the count by 1.

#### Reference:

https://courses.joshwcomeau.com/joy-of-react/02-state/03.04-use-state-exercises
