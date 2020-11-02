import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment'; 
import { ProjectBuild } from 'src/app/core/model/project-build';

@Component({
  selector: 'app-build-card',
  templateUrl: './build-card.component.html',
  styleUrls: ['./build-card.component.scss']
})
export class BuildCardComponent implements OnInit {

  @Input() build: ProjectBuild;

  constructor() { }

  ngOnInit(): void {
  }

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

  exctractShortSha1(sha1) {
    return sha1.substr(0,7);
  }

  relativeDate(fromDate) {
    return moment(fromDate).fromNow();
  }

}
