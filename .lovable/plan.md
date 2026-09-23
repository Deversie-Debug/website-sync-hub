# Verify responsive behavior and openable photos

## Build
- Add a reusable full-screen photo viewer for gallery and suite photos.
- Support click/tap, previous and next controls, close button, backdrop click, and keyboard Escape/arrow keys.
- Keep the existing light palette and page design unchanged.

## Verify
- Test every public page at phone, tablet, and desktop sizes.
- Check for horizontal overflow, clipped text, broken navigation, missing images, and browser errors.
- Exercise the mobile menu, gallery filters, suite navigation, photo viewer, and booking form validation.
- Fix any responsive or interaction issues found, then confirm the final build is healthy.

## Technical details
- Reuse one React photo-viewer component across the gallery and suite-detail pages.
- Preserve image descriptions and provide accessible controls and dialog labeling.
