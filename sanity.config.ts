import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemas } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'PLAN Street Food CMS',
  projectId: 'xcwdwmij',
  dataset: 'production',
  basePath: '/admin',
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
});
