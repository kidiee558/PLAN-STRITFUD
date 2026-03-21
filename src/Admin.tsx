import { Studio } from 'sanity';
import config from '../sanity.config';

export default function Admin() {
  return <Studio config={config} />;
}
