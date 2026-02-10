# Project Maintenance & Codebase Cleanup

This document outlines the steps taken to standardize component naming, fix import paths, and fully resolve ESLint issues across the project.

The goal of this process was to **enforce kebab-case naming conventions**, ensure **consistent imports**, and achieve a **clean linting state** across the entire codebase.

---

## Summary of Changes

- Enforced **kebab-case** naming for components and files
- Updated all related **import paths** across pages and components
- Resolved **ESLint configuration issues**
- Achieved a **lint-clean codebase** using automated and manual fixes

---

## Step-by-Step Process

### 1. Documentation Updates

- Updated `task.md` and `implementation_plan.md` to reflect the cleanup strategy and scope.

### 2. Codebase Audit

- Listed all files to identify component and file naming violations.

### 3. Component Renaming

- Renamed components to **kebab-case** using `git mv` to preserve Git history.

### 4. Initial Import Updates

- Updated imports to kebab-case in `app/page.js` and related files.

### 5. Cross-Page Import Fixes

- Updated imports in other page files and shared components.

### 6. Continued Import Validation

- Updated imports in remaining pages and verified component usage.

### 7. Section-Specific Updates

- Updated imports in:
  - `contact`
  - `case-studies`
  - `careers`
  - `blog` pages

### 8. Internal Component Cleanup

- Updated remaining pages and fixed internal component imports.

### 9. Lint Error Resolution

- Resolved linting errors caused by renamed components and paths.

### 10. Route & Path Refinement

- Updated internal imports and refined route paths for consistency.

### 11. Final Component Scan

- Completed a full internal component scan.
- Ran auto-linting fixes where applicable.

### 12. Global Linting Pass

- Updated final component imports.
- Started global linting cleanup.

### 13. Automated Lint Fixes

- Ran:
  ```bash
  pnpm lint --fix
  ```
