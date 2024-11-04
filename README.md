# DivaSoftware Sandbox

This repository is a blueprint TypeScript React project created by vite, using Tailwind CSS and NextUI for styling.

## Project Structure and Features

- **i18next**: Manages multi-language support, currently configured for French (fr) and Arabic (ar). To add another language, update the `i18n` configuration file in the project root and add a JSON translation file in `assets/locales/[language_code]/translation.json`.

- **react-router-dom**: Manages the application’s routes, which are configured in `routes.tsx`. Additional pages can be added under the `views` folder.

- **react-responsive**: Used for creating responsive layouts across different screen sizes.

- **react-helmet-async**: Allows asynchronous management of document head elements, such as titles and meta tags, which enhances SEO and dynamic document handling.

- **react-error-boundary**: Provides robust error handling by allowing fallback UI display if components throw errors.

- **Theme Context**: Enables toggling between light and dark themes by applying a `dark` class. Users can switch themes from light to dark and vice versa.

### Default Components

- **Error Fallback Component**: Displays if the React app encounters an error.
- **Loading Fallback**: A loading indicator that appears while the app is loading.
- **Centered Layout**: A layout component with max-width and `mx-auto` to center content.
- **Header and Footer**: Basic header and footer components.
- **AppContainer**: The main container for the app, which includes the navbar, footer, and router outlet.
- **Language Dropdown Select Menu**: Allows users to switch between supported languages.
- **Theme Toggler**: Provides a control for toggling between light and dark themes.
- **Section Title**: Provides a Title and an optionnal subtitle, so all titles will have the same styles

### Common Folder

The `common` folder contains:
- **Type Definitions**: Files defining TypeScript types used across the project.
- **Data Definitions**: Files for structured data definitions.
- **Utils**: Utility functions shared across the app.

This sandbox project provides a foundation for building responsive, multi-language applications with a modular structure, organized routing, SEO support, and theme toggling.

