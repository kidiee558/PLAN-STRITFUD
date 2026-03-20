import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemas } from './schemas';
import { Iframe } from 'sanity-plugin-iframe-pane';

const defaultDocumentNode = (S: any, { schemaType }: any) => {
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: 'https://plan-stritfud.pages.dev/',
        reload: { button: true },
        defaultSize: 'desktop', // This helps with side-by-side
      })
      .title('Preview'),
  ]);
};

export default defineConfig({
  name: 'default',
  title: 'PLAN Street Food CMS',
  projectId: 'xcwdwmij',
  dataset: 'production',
  basePath: '/admin',
  plugins: [structureTool({ defaultDocumentNode })],
  schema: {
    types: schemas,
  },
});
