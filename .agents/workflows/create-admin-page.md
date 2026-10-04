# Workflow: Create Admin Page

This workflow scaffolds a new Next.js page in `apps/admin/src/app`.

## Patterns

- **Next.js**: Use **App Router** (Next.js 14+) with React 14+ features.
- **Data Fetching**: **Server Components First** (fetch data in Server Components by default).
- **Mutations**: Use **Server Actions** exclusively.
- **Styling**: **No Tailwind**, use **SCSS** with **BEM** convention.
- **State Management**: **no client-side state**. Use **nuqs** for URL state.

## Steps

1. **Preparation**:
   - Ask the user for the page path (e.g., `dashboard/users`).
   - Ask if a corresponding API endpoint exists.
   - Check `apps/admin/src/utils` and `components` for re-usable features.

2. **Scaffold Page**:
   - Create `apps/admin/src/app/[path]/page.tsx`.
   - Use a **Server Component** and fetch data if required.
   - Handle loading and error states using Next.js `loading.tsx` and `error.tsx`.

3. **Scaffold Styling**:
   - Create `apps/admin/src/scss/pages/_[name].scss`.
   - Import it into the main stylesheet `_main.scss`.
   - Follow **BEM** strictly.
   - Ensure **no inline styles** or Tailwind classes.

4. **Create Components**:
   - If needed, create new components in `apps/admin/src/app/[path]/_components`.
   - Use **Pillar UI** for UI primitives.

5. **Create Server Action**:
   - If the page requires mutations (e.g., a form), create `apps/admin/src/app/[path]/action.ts`.
   - Define a Zod schema for input validation.

6. **Add URL Parameters**:
   - If the page requires sorting/filtering/pagination, use **nuqs** for state.

7. **Cleanup**:
   - Run `yarn lint`.
   - Run `yarn check-types` for the Admin workspace.
