import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: "hmt-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"]
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() total: number;
  @Input() itemsPerPage: number;
  @Input() currentPage: number;

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  totalPages: number;
  pages: number[];
  Math: any;

  constructor() {
    this.Math = Math;
  }

  ngOnInit(): void {
    this.calculateTotalPages();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.total && !changes.total.firstChange) {
      this.calculateTotalPages();
    }
  }

  calculateTotalPages(): void {
    if (this.total && this.itemsPerPage) {
      const pages = Math.ceil(this.total / this.itemsPerPage);
      this.totalPages = pages > 0 ? pages : 0;
      this.pages = pages > 0 ? _.range(1, pages + 1) : [];
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      const newPageNo = this.currentPage - 1;
      this.pageChange.emit(newPageNo);
    }
  }

  setPage(newPageNo) {
    this.pageChange.emit(newPageNo);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      const newPageNo = this.currentPage + 1;
      this.pageChange.emit(newPageNo);
    }
  }
}
