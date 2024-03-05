import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RcModule } from './app/rc.module';


platformBrowserDynamic().bootstrapModule(RcModule)
  .catch(err => console.error(err));
