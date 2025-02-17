import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieService);
  const token = cookieService.get('Authorization');

  if (shouldInterceptRequest(req)) {
    const authRequest = req.clone({
      setHeaders: { Authorization: token }
    });
    return next(authRequest);
  }

  return next(req);
};

// Function to check if request should include Authorization header
const shouldInterceptRequest = (req: any): boolean => {
  return req.urlWithParams.indexOf('addAuth=true') > -1;
};
