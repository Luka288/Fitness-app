export interface nutrimentsResponse {
  code: string;
  status: number;
  status_verbose: string;
  product: {
    product_name: string;
    brands: string;
    quantity: string;
    image_url: string;
    nutriments: {
      'energy-kcal': number;
      proteins: number;
      carbohydrates: number;
      sugars: number;
      fat: number;
      salt: number;
      'nova-group': number;
      'nova-group_100g': number;
      'nova-group_serving': number;
      'nutrition-score-fr': number;
      'nutrition-score-fr_100g': number;
    };
  };
}
