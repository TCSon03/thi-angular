import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  isNew: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);

  addProduct(data: Product) {
    return this.http.post('http://localhost:3000/products', data);
  }
  editProduct(id: string, data: Product) {
    return this.http.put('http://localhost:3000/products/' + id, data);
  }
  deleteProduct(id: string | number) {
    return this.http.delete('http://localhost:3000/products/' + id);
  }
  getDetail(id: string) {
    return this.http.get('http://localhost:3000/products/' + id);
  }
  getAll() {
    return this.http.get('http://localhost:3000/products/');
  }
}
