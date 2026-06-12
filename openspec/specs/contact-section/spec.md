# Contact Section Specification

## Purpose

Implement a contact form with React Hook Form and zod validation (name, email, company, service type, message), real-time validation errors, loading spinner on submit, success confirmation, a contact info sidebar with placeholders, and EmailJS configuration stubs.

## Requirements

### Requirement: Form Validation

The form MUST use React Hook Form with zod resolver. Fields: name (required), email (required, valid format), company (optional), service type (dropdown/select with 4+ options matching the service cards), message (required, min 10 characters). Validation errors MUST display in real time beneath each field.

#### Scenario: All fields valid submit

- GIVEN all fields with valid data
- WHEN the submit button is pressed
- THEN no validation errors appear
- AND the form proceeds to submission state

#### Scenario: Invalid email shows error

- GIVEN the email field contains "notanemail"
- WHEN the field loses focus
- THEN "Please enter a valid email" error appears beneath the field
- AND the submit button remains disabled

#### Scenario: Short message rejected

- GIVEN the message field contains "Hi"
- WHEN the submit button is pressed
- THEN an error "Message must be at least 10 characters" appears

### Requirement: Submit Behavior

On submit, the button MUST show a loading spinner and become disabled. After a simulated delay (EmailJS is stubbed), a success confirmation message MUST replace the form content.

#### Scenario: Loading spinner on submit

- GIVEN a valid form is submitted
- WHEN the submit handler fires
- THEN the button shows a spinning indicator
- AND the button is disabled to prevent double submission

#### Scenario: Success confirmation

- GIVEN the form submission completes (resolved)
- WHEN the response returns
- THEN the form content is replaced with a success message
- AND the success message includes a checkmark icon and "Mensaje enviado" text

### Requirement: Contact Info Sidebar

A sidebar MUST display next to the form on desktop (below on mobile) with placeholder contact info: email (info@inexatech.com placeholder), phone (+52 placeholder), and address (Mexico City placeholder). Social media icons MUST match the footer.

#### Scenario: Desktop side-by-side layout

- GIVEN a viewport width of 1024px+
- WHEN the contact section renders
- THEN the form is on the left and the info sidebar is on the right

#### Scenario: Mobile stacked layout

- GIVEN a viewport width of 375px
- WHEN the contact section renders
- THEN the form appears above the contact info

### Requirement: EmailJS Configuration

The file `src/config/contact.ts` MUST export EmailJS config stubs with TODO comments for `serviceId`, `templateId`, and `publicKey`. The file MUST NOT contain real credentials.

#### Scenario: Config file exists

- GIVEN the source tree
- WHEN reading `src/config/contact.ts`
- THEN it exports EmailJS configuration with `serviceId: "TODO"`, `templateId: "TODO"`, and `publicKey: "TODO"`

#### Scenario: No real credentials

- GIVEN the config file
- WHEN inspecting the exported values
- THEN no real EmailJS credentials are present

### Requirement: Entrance Animation

The contact section MUST animate into view with the standard slide-fade transition, using 300ms ease-out and 50ms stagger between the form and sidebar.

#### Scenario: Staggered entrance

- GIVEN the contact section scrolls into view
- WHEN observing the form and sidebar
- THEN one appears 50ms after the other

#### Scenario: Reduced motion

- GIVEN `prefers-reduced-motion: reduce` is active
- WHEN the section scrolls into view
- THEN both elements appear at full opacity with no animation
