import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ProjectBuild } from 'src/app/core/model/project-build';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { BuildMiscService } from 'src/app/core/services/build-misc.service';

@Component({
  selector: 'app-build-table',
  templateUrl: './build-table.component.html',
  styleUrls: ['./build-table.component.scss']
})
export class BuildTableComponent implements OnInit {

  displayedColumns: string[] = ['project', 'status', 'time', 'version', 'author'];
  dataSource = new MatTableDataSource<ProjectBuild>();

  @Input() builds: ProjectBuild[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  constructor(public buildMiscService: BuildMiscService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ProjectBuild>(this.builds);
    this.dataSource.sort = this.sort;
  }
}