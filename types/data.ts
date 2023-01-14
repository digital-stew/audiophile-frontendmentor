export default interface IData {
    readonly id: number;
    slug: string;
    name: string;
    image: { mobile: string; tablet: string; desktop: string };
    category: "earphones" | "headphones" | "speakers";
    categoryImage: { mobile: string; tablet: string; desktop: string };
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: [{ quantity: number; item: string }];
}