/**
 * Sanity Studio configuration.
 *
 * Run `npx sanity dev` in this directory to launch the studio locally.
 * The studio will be available at http://localhost:3333
 *
 * Before running, ensure SANITY_STUDIO_PROJECT_ID is set in .env
 */

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'incluence',
  title: 'Incluence CMS',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'pgbkmfzt',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
