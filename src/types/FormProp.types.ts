export type FormPropType = {
  maxLength: number;
  state?: State;
  defaultValue?: string;
};

export type State = 'default' | 'inputProgress' | 'disabled' | 'readonly';
