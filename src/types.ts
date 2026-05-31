export interface BusinessIdea {
  id: string;
  number: string;
  title: string;
  capital: 'Low' | 'Medium' | 'High' | 'Very Low';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  profitPotential: 'Medium' | 'High';
  description: string;
  tags: string[];
}
