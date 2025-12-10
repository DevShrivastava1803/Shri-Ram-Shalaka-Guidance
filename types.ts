export interface Chaupai {
  id: string;
  openingPhraseDev: string;
  fullDev: string;
  transliteration: string;
  englishTranslation: string;
  hindiMeaning: string;
  guidanceSummary: string[];
  tone: 'positive' | 'mixed' | 'caution' | 'faith';
  sourceContext: string;
}

export type ViewState = 'intro' | 'grid' | 'result';

export interface GridCell {
  char: string;
  index: number;
}
