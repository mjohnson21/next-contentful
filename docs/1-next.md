# Setting Up Next JS

Getting started with Next JS is pretty straight forward. From the [NextJS](https://nextjs.org/docs#setup) docs setup page, just run the following.

```bash
yarn add next react react-dom
```

Then add the scripts to get the project running locally.

```
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

Next uses the `/pages` directory as it's router. Files placed here will become routable. This is a convention set by Next, and should not be renamed (although they probably have a way to configure that). Creating a `/pages/index.js` file creates a homepage. With a very simple component, we can verify that things are good to go. 

```
function Home() {
  return <div>Welcome to Next.js!</div>
}

export default Home
```

Then start the local dev server to see the welcome message.

```bash
yarn dev
```

With that, we'll move to phase 2.



