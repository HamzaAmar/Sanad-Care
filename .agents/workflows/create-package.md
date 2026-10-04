# Workflow: Create Package

This workflow scaffolds a new shared package in `packages/`.

## Steps

1. **Preparation**:
   - Ask the user for the package name (in `kebab-case`).
   - Verify if a similar package already exists.
   - Check if this belongs in a new workspace or existing one.

2. **Scaffold Directory**:
   - Create `packages/[name]`.

3. **Scaffold package.json**:
   - Create `packages/[name]/package.json`.
   - Name it `@doctor_office/[name]`.
   - Version it `workspace:*`.

4. **Scaffold tsconfig.json**:
   - Create `packages/[name]/tsconfig.json`.
   - Extend `@doctor_office/typescript-config/base.json`.

5. **Scaffold Entry Point**:
   - Create `packages/[name]/src/index.ts`.

6. **Scaffold README.md**:
   - Create `packages/[name]/README.md`.
   - Include: Purpose, Public API Surface, and Usage Examples (as per Project Standards).

7. **Register Workspace**:
   - Ensure it's included in the root `package.json`'s workspaces.

8. **Yarn Install**:
   - Run `yarn install` to link the new workspace.

9. **Cleanup**:
   - Run `yarn build` for the entire monorepo.
   - Run `yarn check-types`.
