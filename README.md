# Gist Light

## Details

Use the API provided by [GitHub Gist API](https://docs.github.com/en/rest/reference/gists), create a basic
website as a single-page app with React.

Your task is to use Gist API to create a simple single-page application. A user
should be able to enter a username and get the full list of public Gists for that
user. The following are a list of functional requirements for this assignment:

- [ ] Search: When a user enters a username, it should be able to get a full list of
public Gists by that user.
- [ ] Filetype: Convert the filetypes of the files in the gist into a tag/badge,
(e.g, if the returned gist has list of files containing python and JavaScript
files, the gist should have the respective tags/badges).
- [ ] Fork: Username/Avatar of the last 3 users who forked it with avatar linking to
the fork.

## Tradeoffs

- For the fork, it will be the first 3 users since it's not possible to sort by date. (The other option was to run through entire fork pagination to get the last 3 users). In order to make this project fast, it will be added a deep investigation as TODO

## TODO

- [ ] Investigate fork list sorting