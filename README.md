# Project Documentation

## Project URL

- **URL**: [https://task-front-test.vercel.app/](https://task-front-test.vercel.app/)

## Project Structure

```
.angular/
.cache/
19.0.5/
tasks/
.editorconfig
.gitignore
.vscode/
extensions.json
launch.json
tasks.json
angular.json
package.json
public/
README.md
src/
app/
app.component.html
app.component.scss
app.component.spec.ts
app.component.ts
app.config.ts
app.routes.ts
components/
...
models/
...
services/
environments/
environment.development.ts
environment.ts
index.html
main.ts
styles.scss
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.spec.json
```

## Components

### `AppComponent`

- **File**: [src/app/app.component.ts](src/app/app.component.ts)
- **Template**: [src/app/app.component.html](src/app/app.component.html)
- **Styles**: [src/app/app.component.scss](src/app/app.component.scss)
- **Description**: The root component of the application.

### `TableComponent`

- **File**: [src/app/components/table/table.component.ts](src/app/components/table/table.component.ts)
- **Template**: [src/app/components/table/table.component.html](src/app/components/table/table.component.html)
- **Styles**: [src/app/components/table/table.component.scss](src/app/components/table/table.component.scss)
- **Description**: Displays a table of tasks with filtering, sorting, and pagination functionalities.

### `TasksGeneralFormComponent`

- **File**: [src/app/components/tasks-general-form/tasks-general-form.component.ts](src/app/components/tasks-general-form/tasks-general-form.component.ts)
- **Template**: [src/app/components/tasks-general-form/tasks-general-form.component.html](src/app/components/tasks-general-form/tasks-general-form.component.html)
- **Styles**: [src/app/components/tasks-general-form/tasks-general-form.component.scss](src/app/components/tasks-general-form/tasks-general-form.component.scss)
- **Description**: A form component for creating and updating tasks.

### `ConfirmComponent`

- **File**: [src/app/components/confirm/confirm.component.ts](src/app/components/confirm/confirm.component.ts)
- **Template**: [src/app/components/confirm/confirm.component.html](src/app/components/confirm/confirm.component.html)
- **Styles**: [src/app/components/confirm/confirm.component.scss](src/app/components/confirm/confirm.component.scss)
- **Description**: A confirmation dialog component.

### `GeneralModalComponent`

- **File**: [src/app/components/general-modal/general-modal.component.ts](src/app/components/general-modal/general-modal.component.ts)
- **Template**: [src/app/components/general-modal/general-modal.component.html](src/app/components/general-modal/general-modal.component.html)
- **Styles**: [src/app/components/general-modal/general-modal.component.scss](src/app/components/general-modal/general-modal.component.scss)
- **Description**: A general-purpose modal component.

### `DinamicFormFieldComponent`

- **File**: [src/app/components/dinamic-form-field/dinamic-form-field.component.ts](src/app/components/dinamic-form-field/dinamic-form-field.component.ts)
- **Template**: [src/app/components/dinamic-form-field/dinamic-form-field.component.html](src/app/components/dinamic-form-field/dinamic-form-field.component.html)
- **Styles**: [src/app/components/dinamic-form-field/dinamic-form-field.component.scss](src/app/components/dinamic-form-field/dinamic-form-field.component.scss)
- **Description**: A dynamic form field component for input.

## Services

### `TasksService`

- **File**: [src/app/services/tasks.service.ts](src/app/services/tasks.service.ts)
- **Description**: Provides methods to interact with the task API, including getting, creating, updating, and deleting tasks.

## Models

### `Task`

- **File**: [src/app/models/taskModel.ts](src/app/models/taskModel.ts)
- **Description**: Defines the structure of a task object.

### `TaskBackResponse`

- **File**: [src/app/models/taskModel.ts](src/app/models/taskModel.ts)
- **Description**: Defines the structure of the response from the backend when a task is created or updated.

## Environments

### `environment.ts`

- **File**: [src/environments/environment.ts](src/environments/environment.ts)
- **Description**: Contains environment variables for the production environment.

### `environment.development.ts`

- **File**: [src/environments/environment.development.ts](src/environments/environment.development.ts)
- **Description**: Contains environment variables for the development environment.

## Configuration Files

### `angular.json`

- **File**: [angular.json](angular.json)
- **Description**: Angular CLI configuration file.

### `package.json`

- **File**: [package.json](package.json)
- **Description**: Contains project dependencies and scripts.

### `tsconfig.json`

- **File**: [tsconfig.json](tsconfig.json)
- **Description**: TypeScript configuration file.

### `tsconfig.app.json`

- **File**: [tsconfig.app.json](tsconfig.app.json)
- **Description**: TypeScript configuration file for the application.

### `tsconfig.spec.json`

- **File**: [tsconfig.spec.json](tsconfig.spec.json)
- **Description**: TypeScript configuration file for tests.

### `tailwind.config.js`

- **File**: [tailwind.config.js](tailwind.config.js)
- **Description**: Tailwind CSS configuration file.

### `.editorconfig`

- **File**: [.editorconfig](.editorconfig)
- **Description**: Configuration file for code editors.

### `.gitignore`

- **File**: [.gitignore](.gitignore)
- **Description**: Specifies files and directories to be ignored by Git.

### `.vscode/extensions.json`

- **File**: [.vscode/extensions.json](.vscode/extensions.json)
- **Description**: Recommended extensions for Visual Studio Code.

### `.vscode/launch.json`

- **File**: [.vscode/launch.json](.vscode/launch.json)
- **Description**: Launch configurations for Visual Studio Code.

### `.vscode/tasks.json`

- **File**: [.vscode/tasks.json](.vscode/tasks.json)
- **Description**: Task configurations for Visual Studio Code.

## Main Entry Points

### `index.html`

- **File**: [src/index.html](src/index.html)
- **Description**: The main HTML file for the application.

### `main.ts`

- **File**: [src/main.ts](src/main.ts)
- **Description**: The main entry point for the Angular application.

### `styles.scss`

- **File**: [src/styles.scss](src/styles.scss)
- **Description**: Global styles for the application.

## Installed Libraries

- **@angular/animations**: Angular animations library.
- **@angular/cdk**: Angular Component Dev Kit.
- **@angular/common**: Angular common library.
- **@angular/compiler**: Angular compiler library.
- **@angular/core**: Angular core library.
- **@angular/forms**: Angular forms library.
- **@angular/material**: Angular Material library.
- **@angular/platform-browser**: Angular platform browser library.
- **@angular/platform-browser-dynamic**: Angular platform browser dynamic library.
- **@angular/router**: Angular router library.
- **rxjs**: Reactive Extensions for JavaScript.
- **tslib**: TypeScript library.
- **zone.js**: Zone.js library for Angular.

## Development Dependencies

- **@angular-devkit/build-angular**: Angular CLI build tools.
- **@angular/cli**: Angular CLI.
- **@angular/compiler-cli**: Angular compiler CLI.
- **@types/jasmine**: TypeScript definitions for Jasmine.
- **autoprefixer**: PostCSS plugin to parse CSS and add vendor prefixes.
- **jasmine-core**: Jasmine testing framework.
- **karma**: Test runner for JavaScript.
- **karma-chrome-launcher**: Launcher for Chrome in Karma.
- **karma-coverage**: Code coverage reporter for Karma.
- **karma-jasmine**: Adapter for Jasmine in Karma.
- **karma-jasmine-html-reporter**: Reporter that shows test results in Karma.
- **postcss**: Tool for transforming CSS with JavaScript.
- **tailwindcss**: Utility-first CSS framework.
- **typescript**: TypeScript language.

This documentation provides an overview of the project structure, components, services, models, configuration files, main entry points, and installed libraries.
