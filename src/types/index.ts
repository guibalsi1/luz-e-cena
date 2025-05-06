export type Category = "2D" | "3D";
export type Age = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos";

export interface Movie {
    id: number;
    title: string;
    src: string;
    alt: string;
    genres: string;
    category: Category;
    age: Age;
    duration: number;
}