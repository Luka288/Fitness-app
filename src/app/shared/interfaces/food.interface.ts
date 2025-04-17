export interface nutrimentsResponse {
  code: string;
  status: number;
  status_verbose: string;
  product: {
    product_name: string;
    brands: string;
    quantity: string;
    image_url: string;
    nutriments: nutrimentData;
  };
}

export interface nutrimentData {
  energyKcal: number;
  proteins: number;
  carbohydrates: number;
  sugars: number;
  fat: number;
  salt: number;
  novaGroup: number;
  novaGroup100g: number;
  novaGroupServing: number;
  nutritionScoreFr: number;
  nutritionScoreFr100g: number;
}

export interface NutrimentData extends Partial<nutrimentData> {}
