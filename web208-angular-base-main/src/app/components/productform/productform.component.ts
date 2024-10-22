import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-productform',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './productform.component.html',
  styleUrl: './productform.component.css',
})
export class ProductformComponent {
  @Input() productId: string | null = null;
  @Output() onSubmit = new EventEmitter();
  productForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    category: new FormControl(''),
    price: new FormControl(''),
    isNew: new FormControl(''),
  });
  productServices = inject(ProductService);
  toast = inject(HotToastService);

  ngOnInit() {
    if (!this.productId) return;
    this.productServices.getDetail(this.productId).subscribe({
      next: (data) => {
        this.productForm.patchValue(data), this.toast.success('getDetail ok');
      },
      error: (e) => this.toast.error('error: ' + e.message),
    });
  }

  handleSubmit() {
    this.onSubmit.emit(this.productForm.value);
  }
}
