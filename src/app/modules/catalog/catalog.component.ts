import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'app-home',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = params['mainCat'];
      let guid = params['subCat'];

      console.log(`${id},${guid}`);
    });
  }

}
