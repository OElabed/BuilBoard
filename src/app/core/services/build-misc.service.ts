import { Injectable } from '@angular/core';
import * as moment from 'moment';

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

  relativeDate(fromDate) {
    return moment(fromDate).fromNow();
  }

  exctractShortSha1(sha1) {
    return sha1.substr(0,7);
  }
}
