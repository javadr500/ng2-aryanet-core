
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// import { DeleteConfirmComponent } from './components/delete-confirm/delete-confirm.component';
import { ToolbarButtonComponent } from "./components/toolbar-button/toolbar-button.component";
import { BreadcrumbComponent } from "./components/breadcrumb.component";

import { BaseService } from "./services/base.service";
import { BaseKendoGridService } from "./services/base-kendo-grid.service";
import { BaseKendoGridComponent } from "./components/base-kendo-grid.component";

// pipes
import { JalaliPipe } from "./pipes/jalali.pipe";
import { PersianWordPipe } from "./pipes/persian-word.pipe";


// third party
import { SnotifyModule, SnotifyService, ToastDefaults } from "ng-snotify";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    // CommonModule
  ],
  declarations: [
    JalaliPipe,
    PersianWordPipe,

    // DeleteConfirmComponent,
    ToolbarButtonComponent,
    BreadcrumbComponent
  ],
  providers: [
    // BaseService,
    // BaseKendoGridService,

    { provide: "SnotifyToastConfig", useValue: ToastDefaults },
    SnotifyService,
  ],
  exports: [
    ToolbarButtonComponent,
    // DeleteConfirmComponent,
    BreadcrumbComponent,
    JalaliPipe,

  ]

})
export class AryaNetCoreModule {

  static injector: Injector;

  constructor(injector: Injector) {
    AryaNetCoreModule.injector = injector;
  }

}

