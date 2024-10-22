import { Component, inject } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { ProductformComponent } from '../../components/productform/productform.component';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ProductformComponent],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  productServices = inject(ProductService);
  router = inject(Router);
  toast = inject(HotToastService);

  handleSubmit(value: Product) {
    this.productServices.addProduct(value).subscribe({
      next: () => {
        this.toast.success('add ok'), this.router.navigateByUrl('/');
      },
      error: (e) => this.toast.error('error: ' + e.message),
    });
  }
}
