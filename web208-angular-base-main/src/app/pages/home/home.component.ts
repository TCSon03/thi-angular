import { Component, inject } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { HotToastService } from '@ngneat/hot-toast';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products: Product[] = [];
  productServices = inject(ProductService);
  toast = inject(HotToastService);

  ngOnInit() {
    this.productServices.getAll().subscribe({
      next: (data) => {
        this.products = data as Product[];
        this.toast.success('home ok');
      },
      error: (e) => this.toast.error('error: ' + e.message),
    });
  }
  handleDelete(id: string | number) {
    if (confirm('ban co chac muon xoa')) {
      this.productServices.deleteProduct(id).subscribe({
        next: () => {
          this.toast.success('delete ok'), location.reload();
        },
        error: (e) => this.toast.error('error: ' + e.message),
      });
    }
  }
}
