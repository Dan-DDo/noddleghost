export type Recipe = {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  tags: string[];
  createdAt: string;
};

export type Idea = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  createdAt: string;
  relatedRecipeIds?: string[];
};