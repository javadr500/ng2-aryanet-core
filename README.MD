# ng2-aryanet-core

Angular2 AryaNet Core

## Test

[http://mehrabisajad.ir/lib/ng2-datepicker-jalali/](http://mehrabisajad.ir/lib/ng2-datepicker-jalali/)

[https://github.com/mehrabisajad/ng2-datepicker-jalali-test](https://github.com/mehrabisajad/ng2-datepicker-jalali-test/)

## Installation

To install this library, run:

```bash
$ npm install ng2-aryanet-core --save
```

## Consuming

```bash
$ npm install ng2-aryanet-core
```

and then from your Angular `AppModule`:

```typescript

import { AryaNetCoreModule } from './core/core.module';
import { AppConfigService } from './core/services/app-config.service';
import { HttpInterceptedService } from './core/interceptors/http-interceptor.service';
import { AppErrorHandler } from './core/utils/error-handler';


@NgModule({
  declarations: [
  ...
  ],
  imports: [
 ...

    AryaNetCoreModule
  ],
  providers: [
     AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: init,
      multi: true,
      deps: [AppConfigService]
    },
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ]
})
export class AppModule { }
```




## License

MIT © [AryaNet](mailto:javad_r_85@yahoo.com)
