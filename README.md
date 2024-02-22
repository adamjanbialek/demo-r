Projekt ma modułową architekture, moim założeniem było to aby każda strona miała swój osobny moduł, który będzie ładowany leniwie.
Poza modułem dedykowanym stronie głównej stworzyłem też Core module i Shared module. Tutaj założeniem było, że w Core Module będą się
znajdywać rzeczy, którę będą wykorzystywane na wszystkich stronach(stąd obecność tam Navbara i Contact Forma- założyłem, że Contact Form)
będzie na każdej stronie). W Shared Module znajduję się tylko HeroComponent- tutaj z kolei zakładałem, że na jakichś podstronach mógłbyć
wykorzystywany ponownie(można było wtedy wprowadzić tam kilka @Inputów i wprowadzać treść każdorazowo z poziomu komponentu, który by go 
implementował). Gdzie niegdzie wykorzystałem ViewChild i ViewChildren do modyfikacji DOMem, w Contact Form trochę skorzystałem z 
Angular Material. Scss dzieliłem na foldery. W komponentach dodawałem reguły, które w mojej ocenie nie byłyby 
wykorzystywany globalnie. Takie z kolei dodawałem do podfolderów folderu /scss.


# Rokezzz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
