import * as React from "react";
import { MaterialUiCreatableProps } from "../MaterialUiCreatable";
import MultipleSelect from "./MultipleSelect";
import ColoredDot from "./ColoredDot";
import ColoredOption from "./ColoredOption";

const label = (props: any) => {
  const value: string = props.data.value;
  const style: React.CSSProperties = {
    padding: "2px 5px 2px 0"
  };

  return (
    <div style={style}>
      <ColoredDot color={value} />
      {value}
    </div>
  );
};

const ColorsSelect = (props: MaterialUiCreatableProps) => (
  <MultipleSelect
    label="Choose some colors"
    {...props}
    SelectProps={{
      msgNoOptionsAvailable: "No more colors are available",
      msgNoOptionsMatchFilter: "No colors match the filter",
      ...props.SelectProps,
      components: {
        MultiValueLabel: label,
        Option: ColoredOption
      }
    }}
  />
);

export default ColorsSelect;
