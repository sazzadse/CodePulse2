import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { NgIf } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { UpdateCategoryRequest } from '../models/update-category-request.model';

@Component({
  selector: 'app-edit-category',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})

export class EditCategoryComponent implements OnInit, OnDestroy {
  id: string | null = null;
  editCategorySubscription?: Subscription;
  paramsSubscription?: Subscription;
  category?: Category;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private router: Router) {
  }
  
  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        if(this.id) {
          // get the data from the API for this category Id
          this.categoryService.getCategoryById(this.id).subscribe({
            next: (response) => {
              this.category = response;
            }
          });
        }
      }
    });
  }
  
  onFormSubmit(): void {
    const updateCategoryRequest: UpdateCategoryRequest = {
      name: this.category?.name ?? '',
      urlHandle: this.category?.urlHandle ?? ''
    };

    // Pass this object to the service
    if (this.id) {
      this.editCategorySubscription = this.categoryService.updateCategory(this.id, updateCategoryRequest)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/categories');
        }
      }); 
    }
  }

  onDelete(): void {
    if (this.id) {
      this.categoryService.deleteCategory(this.id)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/categories');
        }
      }); 
    }
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.editCategorySubscription?.unsubscribe();
  }

}
