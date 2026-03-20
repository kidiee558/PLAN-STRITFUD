import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemas } from './schemas';
import { Iframe } from 'sanity-plugin-iframe-pane';

export default defineConfig({
  name: 'default',
  title: 'PLAN Street Food CMS',
  projectId: 'xcwdwmij', // Twoje poprawne ID
  dataset: 'production',
  basePath: '/admin',
  plugins: [
    structureTool({
      defaultDocumentNode: (S, { schemaType }) => {
        if (schemaType === 'homepage') {
          return S.document().views([
            S.view.form().title('Edycja treści'),
            S.view.component(Iframe).options({
              url: 'https://plan-stritfud.pages.dev/',
              reload: { button: true }
            }).title('Podgląd na żywo')
          ]);
        }
        return S.document().views([S.view.form()]);
      }
    }),
  ],
  schema: {
    types: schemas,
  },
});
