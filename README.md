# Tailwind CSS PurgeCSS Removes Unused Hover Class

This repository demonstrates a common issue encountered when using Tailwind CSS with a framework like Next.js or Nuxt.js: the removal of unused CSS classes by PurgeCSS.  This specific example focuses on hover classes that are defined but never triggered during the build process, leading to missing styles in production.

## Problem

When using PurgeCSS, only the CSS classes present in your rendered components are included in the final CSS bundle.  If a class like `hover:bg-blue-500` is defined but the element never receives the hover state during the build, PurgeCSS removes the class, resulting in a missing hover effect.

## Solution

There are several ways to address this:

1. **Ensure the class is used:** The simplest solution is to ensure that the hover effect is triggered during the static site generation (SSG) or server-side rendering (SSR) process.  This can often involve adding a specific test or modifying the component's structure.
2. **Disable PurgeCSS:** While not recommended for production, you can disable PurgeCSS for development or specific components if you need to test hover effects without constraints.
3. **Whitelist the class:** Explicitly whitelist the class in your PurgeCSS configuration. This ensures that it is always included, regardless of its usage.
4. **Use a different CSS approach:** Consider an approach where you don't rely on Tailwind's automatic purge system, such as writing inline styles or creating a global CSS file.

This repository provides examples of both the buggy and corrected code.