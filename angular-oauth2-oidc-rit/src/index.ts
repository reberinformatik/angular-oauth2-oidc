import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { OAuthService } from './oauth-service';
import { UrlHelperService } from './url-helper.service';
import { ValidationHandler } from './token-validation/validation-handler';
import { NullValidationHandler } from './token-validation/null-validation-handler';
import { HashHandler, DefaultHashHandler } from './token-validation/hash-handler';
import { OAuthResourceServerErrorHandler, OAuthNoopResourceServerErrorHandler } from './interceptors/resource-server-error-handler';
import { DefaultOAuthInterceptor } from './interceptors/default-oauth.interceptor';
import { OAuthModuleConfig } from './oauth-module.config';
import { OAuthStorage } from './types';

// RxJS 5 Imports (Angular 4 Umgebung)
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/publish';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/race';

// Exportiere alle öffentlichen APIs weiter
export * from './oauth-service';
export * from './token-validation/jwks-validation-handler';
export * from './token-validation/null-validation-handler';
export * from './token-validation/validation-handler';
export * from './token-validation/hash-handler';
export * from './url-helper.service';
export * from './auth.config';
export * from './types';
export * from './tokens';
export * from './events';
export * from './interceptors/default-oauth.interceptor';
export * from './interceptors/resource-server-error-handler';
export * from './oauth-module.config';

export function createDefaultStorage() {
  return (typeof sessionStorage !== 'undefined') ? sessionStorage : null;
}

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    OAuthService,
    UrlHelperService,
    { provide: OAuthStorage, useFactory: createDefaultStorage },
    { provide: ValidationHandler, useClass: NullValidationHandler },
    { provide: HashHandler, useClass: DefaultHashHandler },
    { provide: OAuthResourceServerErrorHandler, useClass: OAuthNoopResourceServerErrorHandler },
    { provide: OAuthModuleConfig, useValue: null },
    { provide: HTTP_INTERCEPTORS, useClass: DefaultOAuthInterceptor, multi: true }
  ]
})
export class OAuthModule {}