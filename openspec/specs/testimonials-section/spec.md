# Testimonials Section Specification

## Purpose

Build an autoplay carousel of client testimonials with avatar placeholders, name, company, quote text, animated star ratings, previous/next navigation buttons, and pause-on-hover behavior.

## Requirements

### Requirement: Testimonial Carousel

The section MUST display one testimonial at a time in a carousel. Each slide MUST include: an avatar placeholder (gray circle), a name, a company name, a quote text (social-media-style / Twitter-like), and a 5-star rating. The carousel MUST autoplay with smooth slide transitions every 5 seconds.

#### Scenario: Autoplay advances slides

- GIVEN the testimonials section is visible
- WHEN 5 seconds elapse
- THEN the next testimonial slides into view with a smooth horizontal transition

#### Scenario: All slides render content

- GIVEN any testimonial slide
- WHEN inspecting its content
- THEN avatar, name, company, quote, and star rating are all present and styled correctly

### Requirement: Navigation Controls

Previous and Next buttons MUST be visible on desktop (overlaid left/right). On mobile, the buttons MUST be placed below the carousel. Clicking Next advances one slide; clicking Previous goes back one slide. The carousel MUST loop (after last slide, return to first).

#### Scenario: Previous/Next navigation

- GIVEN the carousel is on slide 2
- WHEN the Previous button is clicked
- THEN slide 1 displays

#### Scenario: Loop from last to first

- GIVEN the carousel is on the last slide
- WHEN the Next button is clicked
- THEN the first slide displays

### Requirement: Pause on Hover

When the user hovers over the carousel area, autoplay MUST pause. When hover ends, autoplay MUST resume from where it paused (not restart the timer).

#### Scenario: Hover pauses autoplay

- GIVEN autoplay is active
- WHEN the mouse enters the carousel area
- THEN the slide transition does NOT advance while hovering

#### Scenario: Resume after hover ends

- GIVEN autoplay was paused by hover on slide 3
- WHEN the mouse leaves the carousel
- THEN after 5 seconds from resume, the carousel advances to slide 4

### Requirement: Animated Star Rating

Star icons MUST animate into view when each slide enters. Each star MAY appear with a sequential delay (e.g., 80ms per star) to create a "filling" effect.

#### Scenario: Stars animate on slide enter

- GIVEN a new slide enters the carousel
- WHEN observing the star icons
- THEN each star fills with Electric Blue color sequentially
