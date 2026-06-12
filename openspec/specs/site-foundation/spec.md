# Site Foundation Specification

## Purpose

Scaffold the project with Vite + React 18 + TypeScript, configure ESLint and Prettier, set up React Router v6 routes, and establish the file structure convention.

## Requirements

### Requirement: Project Scaffold

The scaffold MUST initialize with Vite (v5) React TypeScript template and install React 18, TypeScript, Tailwind CSS 3, Framer Motion 11+, @react-three/fiber, @react-three/drei, React Router 6, React Hook Form, @hookform/resolvers, zod, and Lucide React.

#### Scenario: Default scaffold exists

- GIVEN the project root
- WHEN `npm install` runs
- THEN all dependencies and devDependencies resolve without errors
- AND `npm run dev` starts the Vite dev server

#### Scenario: Missing dependency fails

- GIVEN a broken package.json with a missing dependency
- WHEN the module is imported at runtime
- THEN Vite shows a clear resolution error

### Requirement: Routing Structure

The application MUST define React Router v6 routes at `/` (home), `/servicios`, `/productos`, `/nosotros`, `/equipo`, `/contacto`. Each route MUST render its corresponding page component.

#### Scenario: All routes render

- GIVEN the app is running
- WHEN navigating to each of the 6 routes
- THEN the correct page component renders without 404

#### Scenario: Unknown route

- GIVEN the app is running
- WHEN navigating to `/ruta-invalida`
- THEN a 404 fallback page renders

### Requirement: File Structure

The source tree MUST contain `src/components/layout/`, `src/components/sections/`, `src/components/ui/`, `src/hooks/`, and `src/types/` directories.

#### Scenario: All directories exist

- GIVEN the project source tree
- WHEN listing `src/` contents
- THEN all 5 required directories are present

#### Scenario: Working directory

- GIVEN `src/components/sections/`
- WHEN a section component is imported from another directory
- THEN the import resolves via relative path without errors

### Requirement: Code Quality Tools

ESLint and Prettier MUST be configured with consistent rules. `npm run lint` MUST report zero errors on clean code.

#### Scenario: Lint passes on clean code

- GIVEN a correctly formatted component file
- WHEN `npm run lint` executes
- THEN exit code is 0 and no errors or warnings appear

#### Scenario: Lint catches violations

- GIVEN a file with an unused import
- WHEN `npm run lint` executes
- THEN ESLint reports the unused-import error
