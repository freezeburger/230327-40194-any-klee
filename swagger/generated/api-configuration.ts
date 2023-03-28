/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'https://petstore.swagger.io/v2';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
