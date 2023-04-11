# What is this repo for

This is a web page made by me to document some projects I've worked on as a programmer, written in React.Js.

You can find this page at: https://vijoplays.github.io/profile/.

# Using the code

**Simply debug the 'src\index.tsx'-file by pressing 'F5' (or whatever the 'Run/Debug' key binding is in your VSCode).**

## Adjust the currently displayed Open Source repos

Go to

> https://docs.github.com/en/graphql/overview/explorer

and execute the following query:

```
{
  user(login:"vijoplays") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
```

Then copy the result into ./src/assets/data/profile.json.

## To publish the app

Run the following script:

> npm run deploy

Or push to the main branch and wait for the workflow to complete - it might take a while for the site to update after either one of them was a success.

# Structure

## src

Contains all source files (duh!).

THE IMPORTANT FILE: Is the src/Customization.ts. If you ever want to update aspects of this website, this should be the first target.

## src/assets

Contains fonts, images and so on - nothing relevant to the code, but relevant for a nice UX.

## src/components

Contains folders for UI components.

### src/components/containers

Contains all React UI components that appear once.

### src/components/sections

Contains React UI components that are sections (Header, Footer, etc).

### src/components/shared

Contains React UI components that are being shared between other Components (e.g. a Button).

## src/pages

Contains all pages of this project.

## src/types

Contains all Types created for this project

## src/utils

Contains helper files with generic functions.
