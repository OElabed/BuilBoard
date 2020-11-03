import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuildMiscService {

  constructor() { }

  resolveBuildClass(status) {
    if(status === 'SUCCESS')
      return 'build-success';
    if(status === 'FAILURE')
      return 'build-failure';
    if(status === 'ABORTED')
      return 'build-canceled';
    if(status === 'NOT_BUILT')
      return 'build-canceled';
    if(status === 'UNSTABLE')
      return 'build-unstable';
    if(status === 'PROGRESS')
      return 'build-progress';

    return 'build-canceled'
  }
}
