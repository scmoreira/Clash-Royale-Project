# Clash Royale Web API.

Ironhack Back-End Project to create an API Web.

## Link

## Install

- Run `npm i` on the root directory

## Run

- Create a `.env` file on the root directory to populate the database (`DB`) and port (`PORT`)
- Get a Clash Royale `API Key`.
- Run `npm run dev` command on the root directory

## Endpoints


| Method | Path   | Description |
| ------ | ------ | ----------- |
| `GET` | / | See Home page |
| `GET` | /signup | See the Signup form |
| `POST` | /signup | Submit the Signup form |
| `GET` | /login | See Login form |
| `POST` | /login | Submit the Login form |
| `GET` | /decks | See all the decks |
| `GET` | /cards | See all the cards |
| `GET` | /profile/:id | See the User profile |
| `GET` | /profile/edit/:id | See edit User profile form |
| `POST` | /profile/edit/:id| Edit User profile in DDBB |
| `GET` | /profile/cards/new?id=xxx | Add card to User profile |
| `GET` | /profile/cards/delete?id=xxx | Delete card from User profile |
| `GET` | /profile/player/:tag | See player profile |

## Built With

- HTML5
- SCSS
- JavaScript - ES6
- Node.js
- APIs: Clash Royale API, REST Countries API.

## Authors

- David Díaz
- S. Cecilia Moreira






