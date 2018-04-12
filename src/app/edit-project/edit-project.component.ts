import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  project;
  projects: Array<any>;
  idProject;

  constructor(private route: ActivatedRoute, private _dataService : DataService) {
    this.idProject = this.route.snapshot.paramMap.get('id');
    this._dataService.getProjects().subscribe(response => {
      this.projects = response;
      for(let project of this.projects) {
        if (project._id == this.idProject) {
          this.project = project;
        }
      }
    }      
    );
  }

  ngOnInit() {

  }

}
