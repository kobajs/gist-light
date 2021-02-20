# Gist Light

## Requirements

Node v12+

## Installation

1. Download and install [Node](https://nodejs.org/)
2. Clone this repo: `git clone https://github.com/kobajs/gist-light.git` (HTTPS) or `git clone git@github.com:kobajs/gist-light.git` (SSH)
3. [Optional] Install Yarn globally: `npm install -g yarn`
4. Install project dependencies: `npm install` or `yarn install`

### Development

When adding new components or features, it will refresh automatically, leading to a better Developer Experience:

- `npm start`

### Run tests

Make sure that your tests are okay before refactoring or adding new features:

- `npm run test`

### Run storybook

To run an isolated environment to develop components:

- `npm run storybook`

### Run build

To generate a compiled source code prepared for production distribution:

- `npm run build`

### Run Component Generator (**PLUS**)

To generate a component with all of project standards:

- `npm run generate`

## Details

Use the API provided by [GitHub Gist API](https://docs.github.com/en/rest/reference/gists), create a basic
website as a single-page app with React.

Your task is to use Gist API to create a simple single-page application. A user
should be able to enter a username and get the full list of public Gists for that
user. The following are a list of functional requirements for this assignment:

- [x] Search: When a user enters a username, it should be able to get a full list of
public Gists by that user.
- [x] Filetype: Convert the filetypes of the files in the gist into a tag/badge,
(e.g, if the returned gist has list of files containing python and JavaScript
files, the gist should have the respective tags/badges).
- [x] Fork: Username/Avatar of the last 3 users who forked it with avatar linking to
the fork.

## Tradeoffs

- For the fork, it will be the first 3 users since it's not possible to sort by date. (The other option was to run through entire fork pagination to get the last 3 users). In order to make this project fast, it will be added a deep investigation as TODO

## TODO

- [ ] Investigate fork list sorting
- [ ] Glance styles
- [ ] Theming
- [ ] Combine GistsContext with Reducer hook
- [ ] Not all components have stories or tests because of time.
- [ ] More tests