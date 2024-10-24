import { HttpInterceptorFn } from '@angular/common/http';
import { application } from 'express';
import { json } from 'stream/consumers';

export const authdataInterceptor: HttpInterceptorFn = (req, next) => {

  try {
    //console.log("In Interceptor");
    const _tokan: any = sessionStorage.getItem('mytokan');
    if (_tokan) {
      req = req.clone({
        setHeaders: { 'Authorization': 'Bearer ' + _tokan }
      });//if (_tokan)

    }
    return next(req);
  } catch (error: any) {
    console.log("error from interceptor" + error.message);
    return next(req);
  }


}
