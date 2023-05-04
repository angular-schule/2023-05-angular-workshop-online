export interface Book {
  readonly isbn: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  // authors: string[];
}


// Argumente für Interface
// - Serialisierbarkeit / JSON
// - Klonbarkeit
