// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';
// import { AuthService } from '../services/auth.service';
// import jwt_decode from 'jwt_decode';

// export const authGuard: CanActivateFn = (route, state) => {
//   const cookieService = inject(CookieService);
//   const authService = inject(AuthService);
//   const router = inject(Router);
  
//   // Check for the JWT Token
//   let token = cookieService.get('Authorization');

//   if (token) {
//     token = jwt_decode(token);
//   } else {
//     // Logout 
//     authService.logout();
//     return router.createUrlTree(['/login'], { queryParams : { returnUrl: state.url }})
//   }
// };
