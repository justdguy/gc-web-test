import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { RestApiService, apiBase } from '../rest-api.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  btnDisabled = false;

  currentAddress: any;

  constructor(private data: DataService, private rest: RestApiService) { }

  async ngOnInit() {
    try {
      const data = await this.rest.get(
        apiBase + '/api/accounts/address'
      );

      if (
        JSON.stringify(data['address']) === '{}' &&
        this.data.message === ''
      ) {
        this.data.warning(
          'You have not entered your Contact address. Please enter your Contact address.'
        );
      }
      this.currentAddress = data['address'];
    } catch (error) {
      this.data.error(error['message']);
    }
  }

  async updateAddress() {
    this.btnDisabled = true;
    try {
      const res = await this.rest.post(
        apiBase + '/api/accounts/address',
        this.currentAddress
      );

      res['success']
        ? (this.data.success(res['message']), await this.data.getProfile())
        : this.data.error(res['message']);
    } catch (error) {
      this.data.error(error['message']);
    }
    this.btnDisabled = false;
  }

}
