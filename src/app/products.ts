export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Telefono XL',
    price: 799,
    description: 'Un teléfono grande con una de las mejores pantallas'
  },
  {
    id: 2,
    name: 'Telefono Mini',
    price: 699,
    description: 'Un gran teléfono con una de las mejores cámaras.'
  },
  {
    id: 3,
    name: 'Telefono Standard',
    price: 299,
    description: 'Telefono con lo mejor en almacenamiento'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/