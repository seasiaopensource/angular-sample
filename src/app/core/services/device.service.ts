import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, delay, map } from "rxjs/operators";

import { environment } from "@src/environments/environment";
import { IAttributes, IProduct, ISearchResponse } from "@src/app/core";
import { ApiService } from "@src/app/core/services/api.service";
import { Params } from "@angular/router";

@Injectable()
export class DeviceService {
  url: string;

  constructor(private apiService: ApiService) {
    this.url = "";
  }

  private _fetchParams(params: Params): HttpParams {
    return new HttpParams({ fromObject: { ...params, program: "ATT" } });
  }

  mapQueryParams(payload: Params): Params {
    const params: Params = {};

    if (payload.device) {
      params.productfamily = payload.device;
    }

    if (payload.type) {
      params.product = payload.type;
    }

    if (payload.brand) {
      params.manufacturer = payload.brand;
    }

    if (payload.carrier) {
      params.carrier = payload.carrier;
    }

    if (payload.capacity) {
      params.capacity = payload.capacity;
    }

    return params;
  }

  getTopModels(): Observable<IProduct[]> {
    const params = this._fetchParams({ limit: "11", offset: "0" });
    return this.apiService.get(this.url, "models/getTopModels", params);
  }

  getAttributes(payload: Params): Observable<IAttributes> {
    const queryParams = this.mapQueryParams(payload);
    const params = this._fetchParams(queryParams);
    return this.apiService.get(this.url, "models/attributes", params);
  }

  searchModels(
    limit: string = "6",
    offset: string = "0",
    q: string
  ): Observable<ISearchResponse> {
    const params = this._fetchParams({ q, limit, offset });
    return this.apiService.get(this.url, "models/search", params);
  }
}
