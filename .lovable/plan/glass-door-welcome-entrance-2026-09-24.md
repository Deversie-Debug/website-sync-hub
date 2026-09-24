# Glass-door welcome entrance

## What will change
- Add a full-screen welcome layer on the homepage only, shown before the site becomes interactive.
- Create two translucent glass doors meeting in the center, with the Ionian Treasure monogram and name centered across them.
- Make the whole entrance clearly clickable with a subtle “Enter” cue.
- On click, split the logo with the doors and animate both panels outward to reveal the existing homepage beneath.
- Lock page scrolling while the entrance is closed, then restore it after opening.
- Respect reduced-motion settings by using a short fade instead of the door movement.

## Technical details
- Build a focused React entrance component using the existing logo asset and semantic site colors.
- Use CSS perspective, glass blur, fine borders, and transform animations; no new package is needed.
- Keep the effect session-based so it appears once per browser tab, avoiding repeated interruption during navigation.
- Verify the closed and opened states on desktop and mobile, including keyboard activation and clean build output.
