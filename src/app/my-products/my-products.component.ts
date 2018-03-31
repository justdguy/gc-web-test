import { Component, OnInit } from '@angular/core';

import { RestApiService, apiBase} from '../rest-api.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {

  products: any;

  constructor(private data: DataService, private rest: RestApiService) { }

  async ngOnInit() {
    try {
      const data = await this.rest.get(
        apiBase + '/api/postidea/ideas'
      );
      data['success']
        ? (this.products = data['ideas'])
        : this.data.error(data['message']);
    } catch (error) {
      this.data.error(error['message']);
    }
  }

}
