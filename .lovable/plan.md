# Improve photo text and home navigation

## What will change
- Place photo-overlay text on a light, semi-transparent readable surface rather than darkening the entire image.
- Make the home landing photo fill the visible device screen beneath the navigation, with the next section beginning after it.
- Make the navigation hide smoothly while scrolling down and return when scrolling up or near the top.
- Keep the mobile menu visible while it is open and preserve all existing links and booking actions.

## Technical details
- Add semantic image-text surface tokens in `src/styles.css` and use them on the home landing copy and shared page headers.
- Track scroll direction in the shared header with a small passive scroll listener and a transform transition.
- Use dynamic viewport height sizing for reliable phone and desktop behavior.
- Verify readability, menu behavior, and layout on phone and desktop, then confirm the current build is healthy.
