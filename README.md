# Orange-slices

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

### Models

- Organization
- Activity
- Season
- Level
- Team
- User+
- Gane Day
- Game/Fixture

Thru tables
- Organization + Activity = Exercise : Outdoor Soccer @ Boulder Park & Rec
- Organization + Activity + Season = Exercise + Season = Competition : Outdoor Soccer @ Boulder Park & Rec in Summer
- Competition + Level = League : Outdoor Soccer @ Boulder Park & Rec in Summer, Level 3
- League + Team = Team Membership : Outdoor Soccer @ Boulder Park & Rec in Summer, Level 3 - Bunga Bunga
- League + Team + User+ = Team Membership + User+ = User Membership : Outdoor Soccer @ Boulder Park & Rec in Summer, Level 3 - Bunga Bunga - Rémi Chaignon
- League + Game Day = Gameweek : Outdoor Soccer @ Boulder Park & Rec in Summer, Level 3 - Gameweek 1
- League + Game Day + Game = Gameweek + Game = Fixture : Outdoor Soccer @ Boulder Park & Rec in Summer, Level 3 - Gameweek 1 - Bunga Bunga vs Vivace

### TODO

- [x] Organization pages
  - [x] create
  - [x] edit
  - [x] delete
  - [ ] add activity
  - [ ] remove activity
- [x] Activity pages
  - [x] create
  - [x] edit
  - [x] delete
- [x] Season pages
  - [x] create
  - [x] edit
  - [x] delete
  - [ ] add league
  - [ ] remove league
- [x] League pages
  - [x] create
  - [x] edit
  - [x] delete
  - [ ] join season
  - [ ] leave season
  - [ ] add team
  - [ ] leave team
- [x] Team pages
  - [x] create
  - [x] edit
  - [x] delete
  - [ ] join league
  - [ ] leave league
  - [ ] add player
  - [ ] remove player
  - [ ] edit manager
- [x] User pages
  - [x] create
  - [x] edit
  - [x] delete
  - [ ] change type?
  ...
- [ ] Game pages
  - [ ] create
  - [ ] edit
  - [ ] delete
- [ ] Organizer pages
  - [ ] create
  - [ ] edit
  - [ ] delete
- [ ] Manager pages
  - [ ] create
  - [ ] edit
  - [ ] delete
- [ ] Referee pages
  - [ ] create
  - [ ] edit
  - [ ] delete
- [ ] Facility Manager pages
  - [ ] create
  - [ ] edit
  - [ ] delete
- [ ] Player pages
  - [ ] create
  - [ ] edit
  - [ ] delete
  - [ ] join team
  - [ ] leave team
- [ ] Volunteer pages
  - [ ] create
  - [ ] edit
  - [ ] delete
- [ ] Facility pages
  - [ ] create
  - [ ] edit
  - [ ] delete
- [ ] Content pages
  - [ ] create
  - [ ] edit
  - [ ] delete
- [ ] Communication pages
