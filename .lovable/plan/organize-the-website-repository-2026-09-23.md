# Organize the website repository

## Goal
Make the GitHub repository easy to understand without changing the website, its links, or the Netlify deployment.

## Changes
- Keep only required project and Netlify setup files at the top level; these cannot be moved because the website tools look for them there.
- Organize website code into clearly named areas:
  - `src/components/layout` for the header and footer
  - `src/components/booking` for the enquiry form
  - `src/components/shared` for reusable page sections
  - `src/content` for hotel details, suites, photos, and other editable content
  - `src/routes` for the visible website pages
  - `src/system` for required error-handling files
- Remove unused starter interface files and generated local cache files so the repository contains only files the live site needs.
- Add a simple repository guide explaining each folder and identifying where common edits should be made.
- Update all file connections after moves, then verify every page and the Netlify-ready build.

## What stays unchanged
- Page addresses and navigation
- Current design, colours, text, and photos
- Booking enquiry behavior
- Netlify deployment settings

## Technical note
TanStack requires page files in `src/routes`, while Netlify and the build tools require several configuration files at the repository root. Those files will remain in their required locations and will be documented clearly rather than moved.
