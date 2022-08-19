export interface IButton {
  type: "button" | "submit" | "reset" | undefined;
  disabled: boolean;
}

export interface IInput {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  type: string;
  placeholder: string;
}

export interface ISelect {
  value: number;
  label: string;
}
