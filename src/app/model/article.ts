export interface Article {
  id: number;
  Title: string;
  Image: string;
  HeaderImage: string;
  Introduction: string;
  Description: string;
  LastMod: string; // Adjusted to string if it's received as a string from the API
  Language: string;
  KeyWords: string;
  State: number;
  NumVisit: number;
  IdTheme: number;
  IdUser: number;
  IdHost: number;
}
