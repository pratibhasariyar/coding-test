# SpaceXProgram

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Approach: Created a UI Component space-xdetails. Displayed the data using interpolation. These variable values are coming into UI component ts file through a service.
As per the usage called service method and used service variables in this component ts file. Also added a delay of 3 sec to load data intially.
I have used Angular router navigate method with queryparam to query information from service file.

The logic of displaying whole data based on with and without filter is written in mission-data.service. There I have handled query parameters on load as well as on selecting UI. Data type could be different when coming from query param, UI and API so have used | OR operator while specifying types. I have ES6 filter approach to display required data.

The look and feel of the page is designed in mobile first approach. There after applied media queries for desktop and tablet view.


