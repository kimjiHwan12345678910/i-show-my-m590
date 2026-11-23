export type TabType = 'main' | 'features' | 'brand';

export type ThemeMode = 'light' | 'dark';

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  imagePlaceholderText: string;
  badge: string;
}

export interface MappingOption {
  id: string;
  name: string;
  category: 'default' | 'recommended' | 'productivity' | 'system';
  description: string;
}
