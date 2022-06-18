import { Fastfood } from './../../../model/fastfood';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';
import { FastfoodService } from 'src/app/service/fastfood.service';
import { DeleteDialogComponent } from '../../dialog/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-fastfood-edit',
  templateUrl: './fastfood-edit.component.html',
  styleUrls: ['./fastfood-edit.component.scss']
})
export class FastfoodEditComponent implements OnInit {

  newFastfood: Fastfood = new Fastfood();
  fastfood!: Fastfood;

  editPageText = this.config.editPageText
  editPageItems = this.config.editPageItems
  fastfoodEditItems = this.config.fastfoodEditItems

  allergensItems = this.config.allergensItems

  selected!: string

  allergensValue = this.config.allergensItems.map(item => item.key)
  allergensName = this.config.allergensItems.map(item => item.name)

  fastfoodEditMenuItems = this.config.fastfoodEditMenuItems

  categoryKeys = this.config.dashboardTdCardItems.filter(item => this.config.dashboardTdCardItems.indexOf(item) > 12 && this.config.dashboardTdCardItems.indexOf(item) < 23  ).map(item => item.key)
  categoryValue = this.config.dashboardTdCardItems.filter(item => this.config.dashboardTdCardItems.indexOf(item) > 12 && this.config.dashboardTdCardItems.indexOf(item) < 23  ).map(item => item.title)

  messages = this.config.toastrItems

  deleteDialog = this.config.dialogItems

  constructor(
    private activatedRoute: ActivatedRoute,
    private fastfoodService: FastfoodService,
    private config: ConfigService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id'] === '0') {
      this.fastfood = this.newFastfood
      this.selected = this.setSelected(this.fastfood.menu)
    }
    else {
      this.activatedRoute.params.pipe(
        switchMap( params => this.fastfoodService.getOne(params['id']))
        ).subscribe(fastfood => {
          this.fastfood = fastfood
          this.selected = this.setSelected(fastfood.menu)
        })
    }
  }

  dataChanged(value: string) {
    let name = ''
    this.fastfoodEditMenuItems.filter(item => {
      if (value.includes(item.key)) {
        name = item.new
      }
    });
    this.selected = name
  }

  setSelected(value: string) {
    let name = ''
    this.fastfoodEditMenuItems.filter(item => {
      if (item.title === value) {
        name = item.new
      }
    });
    return name
  }

  saveFastfood(fastfood: Fastfood): void {
    fastfood.menu = this.selected
    if (this.activatedRoute.snapshot.params['id'] === '0') {
      this.fastfoodService.create(fastfood).subscribe(
        response => this.router.navigate(['/', 'product']));
        this.toastr.success(this.messages[1].message, this.messages[1].title);
    } else {
      this.fastfoodService.update(fastfood).subscribe(
        response => this.router.navigate(['/', 'product']));
        this.toastr.success(this.messages[2].message, this.messages[2].title);
    }
  }

  onDelete(id: number): void {
    const confirmDialog = this.dialog.open(DeleteDialogComponent, {
      data: {
        title: this.deleteDialog[0].title,
        message: this.deleteDialog[0].message,
        ok: this.deleteDialog[0].ok,
        cancel: this.deleteDialog[0].cancel
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.fastfoodService.delete(id).subscribe(
          response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/', 'product' ]);
            this.toastr.error(this.messages[0].message, this.messages[0].title);
            }
          )
        )
      }
    });
  }

}
