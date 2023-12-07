import { ChangeEvent } from "react";

export interface inputInterface {
  type?: any;
  className?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
