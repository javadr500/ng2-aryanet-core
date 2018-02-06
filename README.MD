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

<!-- 
Once NgbModule library is imported, you can use its components in your Angular application:

```xml
<!-- use ngb-datepicker component in app.component.html -->
<h1>
  {{title}}
</h1>
<ngb-datepicker [firstDayOfWeek]="6"></ngb-datepicker>
```

And set providers in app.component.ts
```typescript
// app.component.ts
import {NgbDateStruct, NgbCalendar, NgbDatepickerI18n, NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbCalendarPersian} from "ng2-datepicker-jalali/persian/ngb-calendar-persian";
import {NgbDatepickerI18nPersian} from "ng2-datepicker-jalali/persian/ngb-datepicker-i18n-persian";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {provide: NgbCalendar, useClass: NgbCalendarPersian},
    {provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nPersian}
  ]
})
export class AppComponent {
    ...
}
``` -->

## License

MIT © [AryaNet](mailto:javad_r_85@yahoo.com)
