# Workflow: Create API Module

This workflow scaffolds a new NestJS module in `apps/api/src/app`.

## Pattern

**Module → Controller → Service → Repository**

## Steps

1. **Preparation**:
   - Ask the user for the module name (in `kebab-case`).
   - Verify if a similar module already exists.
   - Check for existing utility functions in `apps/api/src/common/utils` that can be reused.

2. **Scaffold Repository**:
   - Create `apps/api/src/app/[name]/[name].repository.ts`.
   - This class should handle all direct `this.db` interactions (Drizzle queries).
   - Inject `DB_CONNECTION`.

3. **Scaffold Service**:
   - Create `apps/api/src/app/[name]/[name].service.ts`.
   - This class should handle business logic and call the Repository.
   - Inject the Repository.

4. **Scaffold Controller**:
   - Create `apps/api/src/app/[name]/[name].controller.ts`.
   - This class should handle HTTP requests and call the Service.
   - Ensure all inputs use DTOs with `class-validator`.

5. **Scaffold DTOs**:
   - Create `apps/api/src/app/[name]/dto/[name].dto.ts`.
   - Use Zod schemas for validation where applicable (as per Project Standards).

6. **Scaffold Module**:
   - Create `apps/api/src/app/[name]/[name].module.ts`.
   - Register Controller, Service, and Repository.
   - Export the Service if needed.

7. **Register Module**:
   - Import the new module into `apps/api/src/app/app.module.ts`.

8. **Cleanup**:
   - Run `yarn lint`.
   - Run `yarn check-types` for the API workspace.
