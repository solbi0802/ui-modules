export type CardPropType = {
  layout: Layout;
  title?: string;
  label?: string;
  hilightText?: string;
  crossoutText?: string;
  contents?: string;
  useRating?: boolean;
};

export type Layout = 'vertical' | 'horizontal';
