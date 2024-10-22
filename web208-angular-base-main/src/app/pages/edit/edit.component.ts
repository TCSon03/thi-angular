import { Component, inject } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { ProductformComponent } from '../../components/productform/productform.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ProductformComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  productServices = inject(ProductService);
  router = inject(Router);
  toast = inject(HotToastService);
  productId: string | null = null;
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.params.subscribe({
      next: (params) => {
        this.productId = params['id'];
        this.toast.success('ok');
      },
      error: (e) => this.toast.error('error: ' + e.message),
    });
  }

  handleSubmit(value: Product) {
    if (!this.productId) return;
    this.productServices.editProduct(this.productId, value).subscribe({
      next: () => {
        this.toast.success('add ok'), this.router.navigateByUrl('/');
      },
      error: (e) => this.toast.error('error: ' + e.message),
    });
  }
}
