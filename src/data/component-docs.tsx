import * as Demos from "@/components/docs/demos"
import { ComponentPlaceholder } from "@/components/docs/placeholder"
import { hooks } from "@/data/hook-docs"
import type { ComponentDoc } from "../components/docs/types"

// Some doc sources are maintained elsewhere; provide a safe fallback here
const docs: any[] = []



export const components: ComponentDoc[] = [
  {
    slug: "accordion",
    title: "Accordion",
    category: "Core",
    description: "",
    component: Demos.AccordionDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "items",
        type: "AccordionItem[]",
        description: "",
        required: true,
        control: {
          type: "object",
        },
      },
      {
        name: "type",
        type: "single | multiple",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["single", "multiple"],
        },
      },
      {
        name: "defaultValue",
        type: "string | any",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["string", "any"],
        },
      },
      {
        name: "value",
        type: "string | any",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["string", "any"],
        },
      },
      {
        name: "onValueChange",
        type: "any",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "collapsible",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
    ],
    stories: [{ name: "Default", args: { defaultValue: "", value: "", collapsible: false } }],
  },

  {
    slug: "alert",
    title: "Alert",
    category: "Core",
    description: "",
    component: Demos.AlertDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "variant",
        type: "default | destructive | success | warning | glass",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["default", "destructive", "success", "warning", "glass"],
        },
      },
      {
        name: "dismissible",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "onDismiss",
        type: "() => void",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
      {
        name: "icon",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "icon",
        },
      },
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { dismissible: false, children: "Example" } }],
  },

  {
    slug: "avatar",
    title: "Avatar",
    category: "Core",
    description: "",
    component: Demos.AvatarDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "src",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "alt",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "fallback",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "size",
        type: "sm | md | lg | xl",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["sm", "md", "lg", "xl"],
        },
      },
      {
        name: "status",
        type: "online | offline | away | busy",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["online", "offline", "away", "busy"],
        },
      },
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { src: "", alt: "", fallback: "", children: "Example" } }],
  },

  {
    slug: "badge",
    title: "Badge",
    category: "Core",
    description: "",
    component: Demos.BadgeDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "variant",
        type: "default | secondary | outline | destructive | success",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["default", "secondary", "outline", "destructive", "success"],
        },
      },
      {
        name: "size",
        type: "sm | md | lg",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["sm", "md", "lg"],
        },
      },
      {
        name: "dot",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { dot: false, children: "Example" } }],
  },

  {
    slug: "button",
    title: "Button",
    category: "Core",
    description: "",
    component: Demos.ButtonDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "variant",
        type: "default | secondary | outline | ghost | destructive | link",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["default", "secondary", "outline", "ghost", "destructive", "link"],
        },
      },
      {
        name: "size",
        type: "sm | md | lg | icon",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["sm", "md", "lg", "icon"],
        },
      },
      {
        name: "isLoading",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "leftIcon",
        type: "icon",
        description: "",
        required: false,
        control: {
          type: "icon",
        },
      },
      {
        name: "rightIcon",
        type: "icon",
        description: "",
        required: false,
        control: {
          type: "icon",
        },
      },
    ],
    stories: [{ name: "Default", args: { children: "Example", isLoading: false } }],
  },

  {
    slug: "card",
    title: "Card",
    category: "Core",
    description: "",
    component: Demos.CardDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "hover",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "glass",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
    ],
    stories: [{ name: "Default", args: { hover: false, glass: false } }],
  },

  {
    slug: "checkbox",
    title: "Checkbox",
    category: "Core",
    description: "",
    component: Demos.CheckboxDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "checked",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "onCheckedChange",
        type: "(checked: boolean) => void",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
      {
        name: "label",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "size",
        type: "sm | md | lg",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["sm", "md", "lg"],
        },
      },
    ],
    stories: [{ name: "Default", args: { checked: false, label: "" } }],
  },

  {
    slug: "dialog",
    title: "Dialog",
    category: "Core",
    description: "",
    component: Demos.DialogDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "isOpen",
        type: "boolean",
        description: "",
        required: true,
        control: {
          type: "boolean",
        },
      },
      {
        name: "setIsOpen",
        type: "any",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "open",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
      {
        name: "children",
        type: "any",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "asChild",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "children",
        type: "any",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: { isOpen: false, children: "Example", open: false, asChild: false, className: "" },
      },
    ],
  },

  {
    slug: "dropdown-menu",
    title: "DropdownMenu",
    category: "Core",
    description: "",
    component: Demos.DropdownMenuDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "any",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "children",
        type: "any",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "asChild",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "children",
        type: "any",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "width",
        type: "string | number",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["string", "number"],
        },
      },
      {
        name: "align",
        type: "start | end | center",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["start", "end", "center"],
        },
      },
      {
        name: "children",
        type: "any",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "onClick",
        type: "any",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "icon",
        type: "any",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "destructive",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: { children: "Example", asChild: false, className: "", width: "", destructive: false },
      },
    ],
  },

  {
    slug: "input",
    title: "Input",
    category: "Core",
    description: "",
    component: Demos.InputDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "size",
        type: "sm | md | lg",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["sm", "md", "lg"],
        },
      },
      {
        name: "error",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "leftIcon",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "icon",
        },
      },
      {
        name: "rightIcon",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "icon",
        },
      },
      {
        name: "label",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { error: "", label: "" } }],
  },

  {
    slug: "label",
    title: "Label",
    category: "Core",
    description: "",
    component: Demos.LabelDemo ?? ComponentPlaceholder,
    props: [],
  },

  {
    slug: "modal",
    title: "Modal",
    category: "Core",
    description: "",
    component: ComponentPlaceholder,
    props: [
      {
        name: "open",
        type: "boolean",
        description: "",
        required: true,
        control: {
          type: "boolean",
        },
      },
      {
        name: "onOpenChange",
        type: "() => void",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "title",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "description",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "showClose",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: {
          open: false,
          children: "Example",
          title: "",
          description: "",
          showClose: false,
          className: "",
        },
      },
    ],
  },

  {
    slug: "popover",
    title: "Popover",
    category: "Core",
    description: "",
    component: ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "any",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "open",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
      {
        name: "defaultOpen",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "align",
        type: "start | center | end",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["start", "center", "end"],
        },
      },
      {
        name: "side",
        type: "top | bottom | left | right",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["top", "bottom", "left", "right"],
        },
      },
      {
        name: "sideOffset",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: { children: "Example", open: false, defaultOpen: false, sideOffset: 0 },
      },
    ],
  },

  {
    slug: "progress",
    title: "Progress",
    category: "Core",
    description: "",
    component: Demos.ProgressDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "value",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "max",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "variant",
        type: "default | success | warning | error",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["default", "success", "warning", "error"],
        },
      },
      {
        name: "showLabel",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "animated",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "onValueChange",
        type: "(value: number) => void",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
    ],
    stories: [{ name: "Default", args: { value: 0, max: 0, showLabel: false, animated: false } }],
  },

  {
    slug: "radio-group",
    title: "RadioGroup",
    category: "Core",
    description: "",
    component: Demos.RadioGroupDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "value",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "onValueChange",
        type: "(value: string) => void",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
      {
        name: "defaultValue",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "name",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "value",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "label",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { value: "", defaultValue: "", name: "", label: "" } }],
  },

  {
    slug: "select",
    title: "Select",
    category: "Core",
    description: "",
    component: Demos.SelectDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "isOpen",
        type: "boolean",
        description: "",
        required: true,
        control: {
          type: "boolean",
        },
      },
      {
        name: "setIsOpen",
        type: "(open: boolean) => void",
        description: "",
        required: true,
        control: {
          type: "none",
        },
      },
      {
        name: "value",
        type: "string | any",
        description: "",
        required: true,
        control: {
          type: "select",
          options: ["string", "any"],
        },
      },
      {
        name: "setValue",
        type: "(value: string) => void",
        description: "",
        required: true,
        control: {
          type: "none",
        },
      },
      {
        name: "placeholder",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "optionsMap",
        type: "Map<string, string>",
        description: "",
        required: true,
        control: {
          type: "object",
        },
      },
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "value",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "defaultValue",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "placeholder",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "onValueChange",
        type: "(value: string) => void",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
      {
        name: "disabled",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "value",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: {
          isOpen: false,
          value: "",
          placeholder: "",
          children: "Example",
          defaultValue: "",
          disabled: false,
          className: "",
        },
      },
    ],
  },

  {
    slug: "sheet",
    title: "Sheet",
    category: "Core",
    description: "",
    component: Demos.SheetDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "isOpen",
        type: "boolean",
        description: "",
        required: true,
        control: {
          type: "boolean",
        },
      },
      {
        name: "setIsOpen",
        type: "(open: boolean) => void",
        description: "",
        required: true,
        control: {
          type: "none",
        },
      },
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "open",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "side",
        type: "left | right | top | bottom",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["left", "right", "top", "bottom"],
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "overlayClassName",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: {
          isOpen: false,
          children: "Example",
          open: false,
          className: "",
          overlayClassName: "",
        },
      },
    ],
  },

  {
    slug: "slider",
    title: "Slider",
    category: "Core",
    description: "",
    component: Demos.SliderDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "value",
        type: "number[]",
        description: "",
        required: false,
        control: {
          type: "object",
        },
      },
      {
        name: "onValueChange",
        type: "(value: number[]) => void",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
      {
        name: "defaultValue",
        type: "number[]",
        description: "",
        required: false,
        control: {
          type: "object",
        },
      },
      {
        name: "min",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "max",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "step",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "disabled",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "showValue",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
    ],
    stories: [
      { name: "Default", args: { min: 0, max: 0, step: 0, disabled: false, showValue: false } },
    ],
  },

  {
    slug: "status-icon",
    title: "StatusIcon",
    category: "Core",
    description: "",
    component: Demos.StatusIconDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "status",
        type: "success | warning | error | info",
        description: "",
        required: true,
        control: {
          type: "select",
          options: ["success", "warning", "error", "info"],
        },
      },
      {
        name: "icon",
        type: "any",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "size",
        type: "sm | md | lg",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["sm", "md", "lg"],
        },
      },
    ],
  },

  {
    slug: "switch",
    title: "Switch",
    category: "Core",
    description: "",
    component: Demos.SwitchDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "checked",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "onCheckedChange",
        type: "(checked: boolean) => void",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
      {
        name: "size",
        type: "sm | md | lg",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["sm", "md", "lg"],
        },
      },
      {
        name: "label",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { checked: false, label: "" } }],
  },

  {
    slug: "table",
    title: "Table",
    category: "Core",
    description: "",
    component: Demos.TableDemo ?? ComponentPlaceholder,
    props: [],
  },

  {
    slug: "tabs",
    title: "Tabs",
    category: "Core",
    description: "",
    component: Demos.TabsDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "value",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "defaultValue",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "onValueChange",
        type: "(value: string) => void",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
      {
        name: "value",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "value",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { value: "", defaultValue: "" } }],
  },

  {
    slug: "textarea",
    title: "Textarea",
    category: "Core",
    description: "",
    component: Demos.TextareaDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "label",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "error",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { label: "", error: "" } }],
  },

  {
    slug: "toast",
    title: "Toast",
    category: "Core",
    description: "",
    component: Demos.ToastDemo ?? ComponentPlaceholder,
    props: [],
  },

  {
    slug: "tooltip",
    title: "Tooltip",
    category: "Core",
    description: "",
    component: Demos.TooltipDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "open",
        type: "boolean",
        description: "",
        required: true,
        control: {
          type: "boolean",
        },
      },
      {
        name: "setOpen",
        type: "(open: boolean) => void",
        description: "",
        required: true,
        control: {
          type: "none",
        },
      },
      {
        name: "delay",
        type: "number",
        description: "",
        required: true,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { open: false, delay: 0 } }],
  },

  {
    slug: "unicorn-provider",
    title: "UnicornProvider",
    category: "Core",
    description: "",
    component: ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "config",
        type: "UserConfig",
        description: "",
        required: false,
        control: {
          type: "object",
        },
      },
    ],
    stories: [{ name: "Default", args: { children: "Example" } }],
  },

  {
    slug: "animated-list",
    title: "AnimatedList",
    category: "Layout",
    description: "",
    component: Demos.AnimatedListDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "delay",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { delay: 0 } }],
  },

  {
    slug: "avatar-circles",
    title: "AvatarCircles",
    category: "Layout",
    description: "",
    component: Demos.AvatarCirclesDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "avatars",
        type: "Array<string | { src: string }>",
        description: "",
        required: true,
        control: {
          type: "object",
        },
      },
      {
        name: "max",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { max: 0 } }],
  },

  {
    slug: "bento-grid",
    title: "BentoGrid",
    category: "Layout",
    description: "",
    component: Demos.BentoGridDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "variant",
        type: "default | featured",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["default", "featured"],
        },
      },
      {
        name: "Icon",
        type: "LucideIcon | ReactNode",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
      {
        name: "name",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "title",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "description",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "href",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "cta",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "background",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
      {
        name: "featured",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: {
          name: "",
          title: "",
          description: "",
          href: "",
          cta: "",
          featured: false,
          className: "",
          children: "Example",
        },
      },
    ],
  },

  {
    slug: "collapsible-sidebar-new",
    title: "CollapsibleSidebarNew",
    category: "Layout",
    description: "",
    component: Demos.CollapsibleSidebarDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "defaultCollapsed",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "collapsedWidth",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "expandedWidth",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "position",
        type: "left | right",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["left", "right"],
        },
      },
      {
        name: "mobileBreakpoint",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "showToggle",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "contentClassName",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "onCollapsedChange",
        type: "(collapsed: boolean) => void",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
      {
        name: "storageKey",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: {
          children: "Example",
          defaultCollapsed: false,
          collapsedWidth: 0,
          expandedWidth: 0,
          mobileBreakpoint: 0,
          showToggle: false,
          className: "",
          contentClassName: "",
          storageKey: "",
        },
      },
    ],
  },

  {
    slug: "dock",
    title: "Dock",
    category: "Layout",
    description: "",
    component: Demos.DockDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "magnification",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "distance",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "children",
        type: "any",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: { children: "Example", className: "", magnification: 0, distance: 0 },
      },
    ],
  },

  {
    slug: "dotted-map",
    title: "DottedMap",
    category: "Layout",
    description: "",
    component: Demos.DottedMapDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "dots",
        type: "Array<{ x: number; y: number }>",
        description: "",
        required: false,
        control: {
          type: "object",
        },
      },
      {
        name: "dotColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "dotSize",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "gridSize",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { dotColor: "", dotSize: 0, gridSize: 0 } }],
  },

  {
    slug: "expandable-bento-card",
    title: "ExpandableBentoCard",
    category: "Layout",
    description: "",
    component: Demos.ExpandableBentoCardDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "title",
        type: "string",
        description: "Card title",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "description",
        type: "string",
        description: "Card description",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "icon",
        type: "ReactNode",
        description: "Icon or image to display",
        required: false,
        control: {
          type: "none",
        },
      },
      {
        name: "expandedContent",
        type: "ReactNode",
        description: "Expanded content",
        required: false,
        control: {
          type: "none",
        },
      },
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "gradient",
        type: "string",
        description: "Card background gradient",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      { name: "Default", args: { title: "", description: "", className: "", gradient: "" } },
    ],
  },

  {
    slug: "expandable-bento-grid",
    title: "ExpandableBentoGrid",
    category: "Layout",
    description: "",
    component: Demos.ExpandableBentoCardDemo ?? ComponentPlaceholder,
    props: [],
  },

  {
    slug: "glass-dock",
    title: "GlassDock",
    category: "Layout",
    description: "",
    component: Demos.GlassDockDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "items",
        type: "ReactNode[]",
        description: "Items to display in the dock",
        required: true,
        control: {
          type: "object",
        },
      },
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "magnification",
        type: "number",
        description: "Magnification scale on hover",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "distance",
        type: "number",
        description: "Distance from hovered item to apply magnification",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "item",
        type: "any",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "index",
        type: "number",
        description: "",
        required: true,
        control: {
          type: "number",
        },
      },
      {
        name: "hoveredIndex",
        type: "number | any",
        description: "",
        required: true,
        control: {
          type: "select",
          options: ["number", "any"],
        },
      },
      {
        name: "setHoveredIndex",
        type: "(index: number | null) => void",
        description: "",
        required: true,
        control: {
          type: "none",
        },
      },
      {
        name: "magnification",
        type: "number",
        description: "",
        required: true,
        control: {
          type: "number",
        },
      },
      {
        name: "distance",
        type: "number",
        description: "",
        required: true,
        control: {
          type: "number",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: { className: "", magnification: 0, distance: 0, index: 0, hoveredIndex: 0 },
      },
    ],
  },

  {
    slug: "globe",
    title: "Globe",
    category: "Layout",
    description: "",
    component: Demos.GlobeDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "size",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "phi",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "theta",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "dark",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "diffuse",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "mapSamples",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "mapBrightness",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "baseColor",
        type: "[number, number, number]",
        description: "",
        required: false,
        control: {
          type: "color",
        },
      },
      {
        name: "markerColor",
        type: "[number, number, number]",
        description: "",
        required: false,
        control: {
          type: "color",
        },
      },
      {
        name: "glowColor",
        type: "[number, number, number]",
        description: "",
        required: false,
        control: {
          type: "color",
        },
      },
      {
        name: "markers",
        type: "Array<{ location: [number, number]; size: number }>",
        description: "",
        required: false,
        control: {
          type: "object",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: { size: 0, phi: 0, theta: 0, dark: 0, diffuse: 0, mapSamples: 0, mapBrightness: 0 },
      },
    ],
  },

  {
    slug: "glow-border-card",
    title: "GlowBorderCard",
    category: "Layout",
    description: "",
    component: Demos.GlowBorderCardDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "glowColors",
        type: "string[]",
        description: "",
        required: false,
        control: {
          type: "object",
        },
      },
      {
        name: "borderWidth",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { borderWidth: 0 } }],
  },

  {
    slug: "hero-video-dialog",
    title: "HeroVideoDialog",
    category: "Layout",
    description: "",
    component: ComponentPlaceholder,
    props: [
      {
        name: "videoSrc",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "thumbnailSrc",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "thumbnailAlt",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: { videoSrc: "", thumbnailSrc: "", thumbnailAlt: "", className: "" },
      },
    ],
  },

  {
    slug: "horizontal-scroll",
    title: "HorizontalScroll",
    category: "Layout",
    description: "",
    component: Demos.HorizontalScrollDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { children: "Example", className: "" } }],
  },

  {
    slug: "icon-cloud",
    title: "IconCloud",
    category: "Layout",
    description: "",
    component: Demos.IconCloudDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "icons",
        type: "string[]",
        description: "",
        required: true,
        control: {
          type: "object",
        },
      },
      {
        name: "radius",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { radius: 0 } }],
  },

  {
    slug: "ion-cloud",
    title: "IonCloud",
    category: "Layout",
    description: "",
    component: Demos.IconCloudDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "icons",
        type: "string[]",
        description: "",
        required: true,
        control: {
          type: "object",
        },
      },
      {
        name: "radius",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "speed",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { radius: 0, speed: 0 } }],
  },

  {
    slug: "lens",
    title: "Lens",
    category: "Layout",
    description: "",
    component: Demos.LensDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "lensSize",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "magnification",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { lensSize: 0, magnification: 0 } }],
  },

  {
    slug: "marquee",
    title: "Marquee",
    category: "Layout",
    description: "",
    component: Demos.MarqueeDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "pauseOnHover",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "reverse",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "fade",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "speed",
        type: "slow | normal | fast",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["slow", "normal", "fast"],
        },
      },
      {
        name: "repeat",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [
      { name: "Default", args: { pauseOnHover: false, reverse: false, fade: false, repeat: 0 } },
    ],
  },

  {
    slug: "orbiting-circles",
    title: "OrbitingCircles",
    category: "Layout",
    description: "",
    component: Demos.OrbitingCirclesDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "radius",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "duration",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "delay",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "reverse",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "icons",
        type: "ReactNode[]",
        description: "",
        required: false,
        control: {
          type: "object",
        },
      },
      {
        name: "iconSize",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [
      { name: "Default", args: { radius: 0, duration: 0, delay: 0, reverse: false, iconSize: 0 } },
    ],
  },

  {
    slug: "perspective-menu",
    title: "PerspectiveMenu",
    category: "Layout",
    description: "",
    component: Demos.PerspectiveMenuDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "items",
        type: "any",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "isOpen",
        type: "boolean",
        description: "",
        required: true,
        control: {
          type: "boolean",
        },
      },
      {
        name: "onClose",
        type: "() => void",
        description: "",
        required: true,
        control: {
          type: "none",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { isOpen: false, className: "" } }],
  },

  {
    slug: "pixel-image",
    title: "PixelImage",
    category: "Layout",
    description: "",
    component: ComponentPlaceholder,
    props: [
      {
        name: "src",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "pixelSize",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "onLoad",
        type: "() => void",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
    ],
    stories: [{ name: "Default", args: { src: "", pixelSize: 0 } }],
  },

  {
    slug: "pointer",
    title: "Pointer",
    category: "Layout",
    description: "",
    component: Demos.PointerDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "name",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "color",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { name: "", color: "", children: "Example" } }],
  },

  {
    slug: "progressive-blur",
    title: "ProgressiveBlur",
    category: "Layout",
    description: "",
    component: Demos.ProgressiveBlurDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "direction",
        type: "top | bottom | left | right",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["top", "bottom", "left", "right"],
        },
      },
      {
        name: "blurIntensity",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { blurIntensity: 0 } }],
  },

  {
    slug: "reorderable-list",
    title: "ReorderableList",
    category: "Layout",
    description: "",
    component: Demos.ReorderableListDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "items",
        type: "string[]",
        description: "",
        required: true,
        control: {
          type: "object",
        },
      },
      {
        name: "setItems",
        type: "(items: string[]) => void",
        description: "",
        required: true,
        control: {
          type: "none",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { className: "" } }],
  },

  {
    slug: "resizable-panel",
    title: "ResizablePanel",
    category: "Layout",
    description: "",
    component: Demos.ResizablePanelDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "minWidth",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "maxWidth",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { children: "Example", minWidth: 0, maxWidth: 0 } }],
  },

  {
    slug: "sidebar",
    title: "Sidebar",
    category: "Layout",
    description: "",
    component: Demos.SidebarDemo ?? ComponentPlaceholder,
    props: [],
  },

  {
    slug: "smooth-cursor",
    title: "SmoothCursor",
    category: "Layout",
    description: "",
    component: Demos.SmoothCursorDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "texture",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { texture: "" } }],
  },

  {
    slug: "spotlight-card",
    title: "SpotlightCard",
    category: "Layout",
    description: "",
    component: Demos.SpotlightCardDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "spotlightColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { children: "Example", spotlightColor: "" } }],
  },

  {
    slug: "spotlight-navbar",
    title: "SpotlightNavbar",
    category: "Layout",
    description: "",
    component: Demos.SpotlightDemo ?? ComponentPlaceholder,
    props: [],
  },

  {
    slug: "staggered-grid",
    title: "StaggeredGrid",
    category: "Layout",
    description: "",
    component: Demos.StaggeredGridDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "columns",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "gap",
        type: "string | number",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["string", "number"],
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "items",
        type: "any[]",
        description: "",
        required: false,
        control: {
          type: "object",
        },
      },
    ],
    stories: [
      { name: "Default", args: { children: "Example", columns: 0, gap: "", className: "" } },
    ],
  },

  {
    slug: "terminal",
    title: "Terminal",
    category: "Layout",
    description: "",
    component: ComponentPlaceholder,
    props: [
      {
        name: "title",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { title: "", children: "Example" } }],
  },

  {
    slug: "testimonials-card",
    title: "TestimonialsCard",
    category: "Layout",
    description: "",
    component: ComponentPlaceholder,
    props: [],
  },

  {
    slug: "timeline",
    title: "Timeline",
    category: "Layout",
    description: "",
    component: Demos.TimelineDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "data",
        type: "Array<{ title: string; content: ReactNode }>",
        description: "",
        required: true,
        control: {
          type: "object",
        },
      },
    ],
  },

  {
    slug: "top-nav",
    title: "TopNav",
    category: "Layout",
    description: "",
    component: Demos.TopNavDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "brandName",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "brandLogo",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
      {
        name: "brandHref",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "links",
        type: "Array<{ label: string; href: string }>",
        description: "",
        required: false,
        control: {
          type: "object",
        },
      },
      {
        name: "rightContent",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
      {
        name: "showThemeToggle",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "githubHref",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: {
          brandName: "",
          brandHref: "",
          showThemeToggle: false,
          githubHref: "",
          className: "",
        },
      },
    ],
  },

  {
    slug: "tracing-beam",
    title: "TracingBeam",
    category: "Layout",
    description: "",
    component: Demos.TracingBeamDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { children: "Example" } }],
  },

  {
    slug: "tweet-card",
    title: "TweetCard",
    category: "Layout",
    description: "",
    component: Demos.TweetCardDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "author",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "username",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "avatar",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "text",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "timestamp",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "verified",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: { author: "", username: "", avatar: "", text: "", timestamp: "", verified: false },
      },
    ],
  },

  {
    slug: "3d-card",
    title: "3dCard",
    category: "Special",
    description: "",
    component: Demos.ThreeDCardDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { children: "Example" } }],
  },

  {
    slug: "animated-beam",
    title: "AnimatedBeam",
    category: "Special",
    description: "",
    component: Demos.AnimatedBeamDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "containerRef",
        type: "RefObject<HTMLDivElement>",
        description: "",
        required: true,
        control: {
          type: "none",
        },
      },
      {
        name: "fromRef",
        type: "RefObject<HTMLDivElement>",
        description: "",
        required: true,
        control: {
          type: "none",
        },
      },
      {
        name: "toRef",
        type: "RefObject<HTMLDivElement>",
        description: "",
        required: true,
        control: {
          type: "none",
        },
      },
      {
        name: "curvature",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "reverse",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "pathColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "pathWidth",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "pathOpacity",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "gradientStartColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "gradientStopColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "delay",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "duration",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "startXOffset",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "startYOffset",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "endXOffset",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "endYOffset",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: {
          className: "",
          curvature: 0,
          reverse: false,
          pathColor: "",
          pathWidth: 0,
          pathOpacity: 0,
          gradientStartColor: "",
          gradientStopColor: "",
          delay: 0,
          duration: 0,
          startXOffset: 0,
          startYOffset: 0,
          endXOffset: 0,
          endYOffset: 0,
        },
      },
    ],
  },

  {
    slug: "border-beam",
    title: "BorderBeam",
    category: "Special",
    description: "",
    component: Demos.BorderBeamDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "size",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "duration",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "borderWidth",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "anchor",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "colorFrom",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "colorTo",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "delay",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: {
          size: 0,
          duration: 0,
          borderWidth: 0,
          anchor: 0,
          colorFrom: "",
          colorTo: "",
          delay: 0,
        },
      },
    ],
  },

  {
    slug: "canvas-smudge",
    title: "CanvasSmudge",
    category: "Special",
    description: "",
    component: Demos.CanvasSmudgeDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "color",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { color: "" } }],
  },

  {
    slug: "confetti",
    title: "Confetti",
    category: "Special",
    description: "",
    component: Demos.ConfettiDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "particleCount",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "spread",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "origin",
        type: "{ x: number; y: number }",
        description: "",
        required: false,
        control: {
          type: "object",
        },
      },
      {
        name: "confettiOptions",
        type: "ConfettiProps",
        description: "",
        required: false,
        control: {
          type: "object",
        },
      },
    ],
    stories: [{ name: "Default", args: { particleCount: 0, spread: 0 } }],
  },

  {
    slug: "glitch-effect",
    title: "GlitchEffect",
    category: "Special",
    description: "",
    component: Demos.GlitchEffectDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "text",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { text: "" } }],
  },

  {
    slug: "gravity",
    title: "Gravity",
    category: "Special",
    description: "",
    component: Demos.GravityDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "items",
        type: "ReactNode[]",
        description: "",
        required: true,
        control: {
          type: "object",
        },
      },
    ],
  },

  {
    slug: "interactive-book",
    title: "InteractiveBook",
    category: "Special",
    description: "",
    component: ComponentPlaceholder,
    props: [],
  },

  {
    slug: "magic-card",
    title: "MagicCard",
    category: "Special",
    description: "",
    component: Demos.MagicCardDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "spotlightColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "borderColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      { name: "Default", args: { children: "Example", spotlightColor: "", borderColor: "" } },
    ],
  },

  {
    slug: "magnifier",
    title: "Magnifier",
    category: "Special",
    description: "",
    component: Demos.MagnifierDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "imgSrc",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "magnifierSize",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "zoomLevel",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { imgSrc: "", magnifierSize: 0, zoomLevel: 0 } }],
  },

  {
    slug: "meteors",
    title: "Meteors",
    category: "Special",
    description: "",
    component: Demos.MeteorsDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "number",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { number: 0 } }],
  },

  {
    slug: "noise-overlay",
    title: "NoiseOverlay",
    category: "Special",
    description: "",
    component: Demos.NoiseOverlayDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "opacity",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { className: "", opacity: 0 } }],
  },

  {
    slug: "parallax-image",
    title: "ParallaxImage",
    category: "Special",
    description: "",
    component: Demos.ParallaxImageDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "src",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "alt",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "containerClassName",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "speed",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: { src: "", alt: "", className: "", containerClassName: "", speed: 0 },
      },
    ],
  },

  {
    slug: "particle-image",
    title: "ParticleImage",
    category: "Special",
    description: "",
    component: Demos.ParticleImageDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "src",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "particleCount",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { src: "", particleCount: 0 } }],
  },

  {
    slug: "particles",
    title: "Particles",
    category: "Special",
    description: "",
    component: Demos.ParticlesDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "quantity",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "staticity",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "ease",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "color",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "refresh",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
    ],
    stories: [
      { name: "Default", args: { quantity: 0, staticity: 0, ease: 0, color: "", refresh: false } },
    ],
  },

  {
    slug: "ripple-effect",
    title: "RippleEffect",
    category: "Special",
    description: "",
    component: Demos.RippleEffectDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "rippleColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { rippleColor: "" } }],
  },

  {
    slug: "scene-3d",
    title: "Scene3d",
    category: "Special",
    description: "",
    component: Demos.Scene3DDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "intensity",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { children: "Example", className: "", intensity: 0 } }],
  },

  {
    slug: "shine-border",
    title: "ShineBorder",
    category: "Special",
    description: "",
    component: Demos.ShineBorderDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "color",
        type: "string | string[]",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "borderWidth",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "duration",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: { children: "Example", className: "", color: "", borderWidth: 0, duration: 0 },
      },
    ],
  },

  {
    slug: "spotlight-new",
    title: "SpotlightNew",
    category: "Special",
    description: "",
    component: Demos.SpotlightNewDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "gradientFirst",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "gradientSecond",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "gradientThird",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "translateY",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "width",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "height",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "smallWidth",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "duration",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "xOffset",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: {
          gradientFirst: "",
          gradientSecond: "",
          gradientThird: "",
          translateY: 0,
          width: 0,
          height: 0,
          smallWidth: 0,
          duration: 0,
          xOffset: 0,
          className: "",
        },
      },
    ],
  },

  {
    slug: "spotlight",
    title: "Spotlight",
    category: "Special",
    description: "",
    component: Demos.SpotlightDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "size",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "color",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { size: 0, color: "" } }],
  },

  {
    slug: "animated-grid-pattern",
    title: "AnimatedGridPattern",
    category: "Backgrounds",
    description: "",
    component: Demos.AnimatedGridPatternDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "width",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "height",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "x",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "y",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "strokeDasharray",
        type: "string | number",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["string", "number"],
        },
      },
      {
        name: "numSquares",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "maxOpacity",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "duration",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "repeatDelay",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: {
          width: 0,
          height: 0,
          x: 0,
          y: 0,
          strokeDasharray: "",
          numSquares: 0,
          className: "",
          maxOpacity: 0,
          duration: 0,
          repeatDelay: 0,
        },
      },
    ],
  },

  {
    slug: "aurora-background",
    title: "AuroraBackground",
    category: "Backgrounds",
    description: "",
    component: Demos.AuroraBackgroundDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "showRadialGradient",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
    ],
    stories: [{ name: "Default", args: { showRadialGradient: false } }],
  },

  {
    slug: "background-beams",
    title: "BackgroundBeams",
    category: "Backgrounds",
    description: "",
    component: Demos.BackgroundBeamsDemo ?? ComponentPlaceholder,
    props: [],
  },

  {
    slug: "dot-pattern",
    title: "DotPattern",
    category: "Backgrounds",
    description: "",
    component: Demos.DotPatternDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "width",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "height",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "x",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "y",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "cx",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "cy",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "cr",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "dotColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "interactive",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "maxDistance",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: {
          width: 0,
          height: 0,
          x: 0,
          y: 0,
          cx: 0,
          cy: 0,
          cr: 0,
          dotColor: "",
          interactive: false,
          maxDistance: 0,
        },
      },
    ],
  },

  {
    slug: "flickering-grid",
    title: "FlickeringGrid",
    category: "Backgrounds",
    description: "",
    component: Demos.FlickeringGridDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "squareSize",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "gridGap",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "flickerChance",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "color",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "maxOpacity",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "interactive",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "interactionRadius",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: {
          squareSize: 0,
          gridGap: 0,
          flickerChance: 0,
          color: "",
          maxOpacity: 0,
          interactive: false,
          interactionRadius: 0,
        },
      },
    ],
  },

  {
    slug: "grid-pattern",
    title: "GridPattern",
    category: "Backgrounds",
    description: "",
    component: Demos.GridPatternDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "width",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "height",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "x",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "y",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "strokeDasharray",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "strokeWidth",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "strokeColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: {
          width: 0,
          height: 0,
          x: 0,
          y: 0,
          strokeDasharray: "",
          strokeWidth: 0,
          strokeColor: "",
        },
      },
    ],
  },

  {
    slug: "interactive-grid-pattern",
    title: "InteractiveGridPattern",
    category: "Backgrounds",
    description: "",
    component: Demos.InteractiveGridPatternDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "width",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "height",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "squares",
        type: "Array<[number, number]>",
        description: "",
        required: false,
        control: {
          type: "object",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "squaresClassName",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      { name: "Default", args: { width: 0, height: 0, className: "", squaresClassName: "" } },
    ],
  },

  {
    slug: "light-lines",
    title: "LightLines",
    category: "Backgrounds",
    description: "",
    component: ComponentPlaceholder,
    props: [],
  },

  {
    slug: "perspective-grid",
    title: "PerspectiveGrid",
    category: "Backgrounds",
    description: "",
    component: ComponentPlaceholder,
    props: [],
  },

  {
    slug: "retro-grid",
    title: "RetroGrid",
    category: "Backgrounds",
    description: "",
    component: Demos.RetroGridDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "angle",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "speed",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { angle: 0, speed: 0 } }],
  },

  {
    slug: "ripple",
    title: "Ripple",
    category: "Backgrounds",
    description: "",
    component: Demos.RippleDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "mainCircleSize",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "mainCircleOpacity",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "numCircles",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [
      { name: "Default", args: { mainCircleSize: 0, mainCircleOpacity: 0, numCircles: 0 } },
    ],
  },

  {
    slug: "shooting-stars",
    title: "ShootingStars",
    category: "Backgrounds",
    description: "",
    component: Demos.ShootingStarsDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "minDelay",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "maxDelay",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "starColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "trailColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "starWidth",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "starHeight",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: {
          minDelay: 0,
          maxDelay: 0,
          starColor: "",
          trailColor: "",
          starWidth: 0,
          starHeight: 0,
        },
      },
    ],
  },

  {
    slug: "stars",
    title: "Stars",
    category: "Backgrounds",
    description: "",
    component: Demos.StarsDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "count",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "minSpeed",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "maxSpeed",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "starColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: { className: "", count: 0, minSpeed: 0, maxSpeed: 0, starColor: "" },
      },
    ],
  },

  {
    slug: "striped-pattern",
    title: "StripedPattern",
    category: "Backgrounds",
    description: "",
    component: Demos.StripedPatternDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "stripeWidth",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "stripeColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "angle",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "animated",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "speed",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: { stripeWidth: 0, stripeColor: "", angle: 0, animated: false, speed: 0 },
      },
    ],
  },

  {
    slug: "warp-background",
    title: "WarpBackground",
    category: "Backgrounds",
    description: "",
    component: Demos.WarpBackgroundDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "perspective",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "beamColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "lineCount",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { perspective: 0, beamColor: "", lineCount: 0 } }],
  },

  {
    slug: "animated-gradient-text",
    title: "AnimatedGradientText",
    category: "Text",
    description: "",
    component: Demos.AnimatedGradientTextDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "children",
        type: "any",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "shimmerWidth",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { children: "Example", shimmerWidth: 0 } }],
  },

  {
    slug: "animated-number",
    title: "AnimatedNumber",
    category: "Text",
    description: "",
    component: Demos.AnimatedNumberDemo ?? ComponentPlaceholder,
    props: [],
  },

  {
    slug: "animated-shiny-text",
    title: "AnimatedShinyText",
    category: "Text",
    description: "",
    component: Demos.AnimatedShinyTextDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "shimmerWidth",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { children: "Example", className: "", shimmerWidth: 0 } }],
  },

  {
    slug: "aurora-text",
    title: "AuroraText",
    category: "Text",
    description: "",
    component: Demos.AuroraTextDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "any",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { children: "Example" } }],
  },

  {
    slug: "blur-fade",
    title: "BlurFade",
    category: "Text",
    description: "",
    component: Demos.BlurFadeDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "delay",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "duration",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "yOffset",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "blur",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: { children: "Example", delay: 0, duration: 0, yOffset: 0, blur: "" },
      },
    ],
  },

  {
    slug: "box-reveal",
    title: "BoxReveal",
    category: "Text",
    description: "",
    component: Demos.BoxRevealDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "width",
        type: "fit-content | 100%",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["fit-content", "100%"],
        },
      },
      {
        name: "boxColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "duration",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { children: "Example", boxColor: "", duration: 0 } }],
  },

  {
    slug: "comic-text",
    title: "ComicText",
    category: "Text",
    description: "",
    component: Demos.ComicTextDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { children: "", className: "" } }],
  },

  {
    slug: "fade-text",
    title: "FadeText",
    category: "Text",
    description: "",
    component: Demos.FadeTextDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "text",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "direction",
        type: "up | down | left | right",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["up", "down", "left", "right"],
        },
      },
      {
        name: "framerProps",
        type: "object",
        description: "",
        required: false,
        control: {
          type: "object",
        },
      },
    ],
    stories: [{ name: "Default", args: { text: "" } }],
  },

  {
    slug: "flip-fade-text",
    title: "FlipFadeText",
    category: "Text",
    description: "",
    component: Demos.FadeTextDemo ?? ComponentPlaceholder,
    props: [],
  },

  {
    slug: "flip-text-3d",
    title: "FlipText3d",
    category: "Text",
    description: "",
    component: Demos.FlipText3DDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes for the wrapper",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "children",
        type: "string",
        description: "The text content to animate (will be split by spaces)",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "duration",
        type: "number",
        description: "Duration of the flip animation in seconds",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "delay",
        type: "number",
        description: "Initial delay before animation starts in seconds",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "loop",
        type: "boolean",
        description: "Whether the animation should loop infinitely",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "separator",
        type: "string",
        description: "Custom separator for splitting text (default is space)",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: { className: "", children: "", duration: 0, delay: 0, loop: false, separator: "" },
      },
    ],
  },

  {
    slug: "flip-text",
    title: "FlipText",
    category: "Text",
    description: "",
    component: Demos.FlipTextDemo ?? ComponentPlaceholder,
    props: [],
  },

  {
    slug: "gradual-spacing",
    title: "GradualSpacing",
    category: "Text",
    description: "",
    component: Demos.GradualSpacingDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "text",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "duration",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "delayMultiple",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { text: "", duration: 0, delayMultiple: 0 } }],
  },

  {
    slug: "hyper-text",
    title: "HyperText",
    category: "Text",
    description: "",
    component: Demos.HyperTextDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "text",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "duration",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "delay",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { text: "", duration: 0, delay: 0 } }],
  },

  {
    slug: "letter-pullup",
    title: "LetterPullup",
    category: "Text",
    description: "",
    component: Demos.LetterPullupDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "text",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "delay",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { text: "", delay: 0 } }],
  },

  {
    slug: "line-hover-link",
    title: "LineHoverLink",
    category: "Text",
    description: "",
    component: ComponentPlaceholder,
    props: [],
  },

  {
    slug: "line-shadow-text",
    title: "LineShadowText",
    category: "Text",
    description: "",
    component: Demos.LineShadowTextDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "shadowColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { shadowColor: "", children: "Example" } }],
  },

  {
    slug: "liquid-text",
    title: "LiquidText",
    category: "Text",
    description: "",
    component: ComponentPlaceholder,
    props: [],
  },

  {
    slug: "morphing-text",
    title: "MorphingText",
    category: "Text",
    description: "",
    component: Demos.MorphingTextDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "texts",
        type: "string[]",
        description: "",
        required: true,
        control: {
          type: "object",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { className: "" } }],
  },

  {
    slug: "number-ticker",
    title: "NumberTicker",
    category: "Text",
    description: "",
    component: Demos.NumberTickerDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "value",
        type: "number",
        description: "",
        required: true,
        control: {
          type: "number",
        },
      },
      {
        name: "direction",
        type: "up | down",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["up", "down"],
        },
      },
      {
        name: "delay",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { value: 0, delay: 0, className: "" } }],
  },

  {
    slug: "rotate-text",
    title: "RotateText",
    category: "Text",
    description: "",
    component: Demos.RotateTextDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "words",
        type: "string[]",
        description: "",
        required: true,
        control: {
          type: "object",
        },
      },
      {
        name: "duration",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { duration: 0 } }],
  },

  {
    slug: "scroll-based-velocity",
    title: "ScrollBasedVelocity",
    category: "Text",
    description: "",
    component: ComponentPlaceholder,
    props: [
      {
        name: "text",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "default_velocity",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "children",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "baseVelocity",
        type: "number",
        description: "",
        required: true,
        control: {
          type: "number",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: { text: "", default_velocity: 0, className: "", children: "", baseVelocity: 0 },
      },
    ],
  },

  {
    slug: "separate-away",
    title: "SeparateAway",
    category: "Text",
    description: "",
    component: Demos.SeparateAwayDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "upperText",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "lowerText",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "duration",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { upperText: "", lowerText: "", duration: 0 } }],
  },

  {
    slug: "sparkles-text",
    title: "SparklesText",
    category: "Text",
    description: "",
    component: Demos.SparklesTextDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "text",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "colors",
        type: "{ first: string; second: string }",
        description: "",
        required: false,
        control: {
          type: "object",
        },
      },
      {
        name: "sparklesCount",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { text: "", sparklesCount: 0 } }],
  },

  {
    slug: "spinning-text",
    title: "SpinningText",
    category: "Text",
    description: "",
    component: Demos.SpinningTextDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "reverse",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "duration",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "radius",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: { children: "", className: "", reverse: false, duration: 0, radius: 0 },
      },
    ],
  },

  {
    slug: "text-animate",
    title: "TextAnimate",
    category: "Text",
    description: "",
    component: Demos.TextAnimateDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "text",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "type",
        type: "popIn | slideUp | fadeIn",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["popIn", "slideUp", "fadeIn"],
        },
      },
      {
        name: "by",
        type: "character | word",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["character", "word"],
        },
      },
      {
        name: "duration",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "delay",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { text: "", duration: 0, delay: 0 } }],
  },

  {
    slug: "text-highlighter",
    title: "TextHighlighter",
    category: "Text",
    description: "",
    component: Demos.TextHighlighterDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "text",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "highlight",
        type: "string | string[]",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "highlightClassName",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { text: "", highlight: "", highlightClassName: "" } }],
  },

  {
    slug: "text-reveal",
    title: "TextReveal",
    category: "Text",
    description: "",
    component: Demos.TextRevealDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "text",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { text: "" } }],
  },

  {
    slug: "typing-animation",
    title: "TypingAnimation",
    category: "Text",
    description: "",
    component: Demos.TypingAnimationDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "text",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "duration",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { text: "", duration: 0, className: "" } }],
  },

  {
    slug: "velocity-scroll",
    title: "VelocityScroll",
    category: "Text",
    description: "",
    component: Demos.VelocityScrollDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "text",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "defaultVelocity",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "children",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "baseVelocity",
        type: "number",
        description: "",
        required: true,
        control: {
          type: "number",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: { text: "", defaultVelocity: 0, className: "", children: "", baseVelocity: 0 },
      },
    ],
  },

  {
    slug: "video-text",
    title: "VideoText",
    category: "Text",
    description: "",
    component: Demos.VideoTextDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "videoSrc",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "text",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { videoSrc: "", text: "" } }],
  },

  {
    slug: "wavy-text",
    title: "WavyText",
    category: "Text",
    description: "",
    component: Demos.WavyTextDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "text",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "delay",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "duration",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { text: "", delay: 0, duration: 0 } }],
  },

  {
    slug: "word-rotate",
    title: "WordRotate",
    category: "Text",
    description: "",
    component: Demos.WordRotateDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "words",
        type: "string[]",
        description: "",
        required: true,
        control: {
          type: "object",
        },
      },
      {
        name: "duration",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { duration: 0 } }],
  },

  {
    slug: "animated-button",
    title: "AnimatedButton",
    category: "Buttons",
    description: "",
    component: Demos.AnimatedButtonDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "shimmerColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "borderGradient",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "duration",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "delay",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: { children: "Example", shimmerColor: "", borderGradient: "", duration: 0, delay: 0 },
      },
    ],
  },

  {
    slug: "creepy-button",
    title: "CreepyButton",
    category: "Buttons",
    description: "",
    component: Demos.CreepyButtonDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "any",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { children: "Example" } }],
  },

  {
    slug: "glow-button",
    title: "GlowButton",
    category: "Buttons",
    description: "",
    component: Demos.GlowButtonDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "glowColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "glowIntensity",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { children: "Example", glowColor: "", glowIntensity: 0 } }],
  },

  {
    slug: "gooey-button",
    title: "GooeyButton",
    category: "Buttons",
    description: "",
    component: Demos.GooeyButtonDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "backgroundColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "foregroundColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { backgroundColor: "", foregroundColor: "" } }],
  },

  {
    slug: "interactive-hover-button",
    title: "InteractiveHoverButton",
    category: "Buttons",
    description: "",
    component: Demos.InteractiveHoverButtonDemo ?? ComponentPlaceholder,
    props: [],
  },

  {
    slug: "magnetic-button",
    title: "MagneticButton",
    category: "Buttons",
    description: "",
    component: Demos.MagneticButtonDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "strength",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { strength: 0, children: "Example" } }],
  },

  {
    slug: "pulsating-button",
    title: "PulsatingButton",
    category: "Buttons",
    description: "",
    component: Demos.PulsatingButtonDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "pulseColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "duration",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { children: "Example", pulseColor: "", duration: "" } }],
  },

  {
    slug: "rainbow-button",
    title: "RainbowButton",
    category: "Buttons",
    description: "",
    component: Demos.RainbowButtonDemo ?? ComponentPlaceholder,
    props: [],
  },

  {
    slug: "ripple-button",
    title: "RippleButton",
    category: "Buttons",
    description: "",
    component: Demos.RippleButtonDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "rippleColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "duration",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { rippleColor: "", duration: "" } }],
  },

  {
    slug: "shimmer-button",
    title: "ShimmerButton",
    category: "Buttons",
    description: "",
    component: Demos.ShimmerButtonDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "shimmerColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "shimmerSize",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      { name: "Default", args: { children: "Example", shimmerColor: "", shimmerSize: "" } },
    ],
  },

  {
    slug: "shiny-button",
    title: "ShinyButton",
    category: "Buttons",
    description: "",
    component: Demos.ShinyButtonDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { children: "Example" } }],
  },

  {
    slug: "social-flip-button",
    title: "SocialFlipButton",
    category: "Buttons",
    description: "",
    component: Demos.SocialFlipButtonDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "icon",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "icon",
        },
      },
      {
        name: "href",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { children: "Example", href: "", className: "" } }],
  },

  {
    slug: "animated-circular-progress-bar",
    title: "AnimatedCircularProgressBar",
    category: "Misc",
    description: "",
    component: Demos.AnimatedCircularProgressBarDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "value",
        type: "number",
        description: "",
        required: true,
        control: {
          type: "number",
        },
      },
      {
        name: "max",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "size",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "strokeWidth",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "showValue",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
    ],
    stories: [
      { name: "Default", args: { value: 0, max: 0, size: 0, strokeWidth: 0, showValue: false } },
    ],
  },

  {
    slug: "card-stack",
    title: "CardStack",
    category: "Misc",
    description: "",
    component: Demos.CardStackDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "items",
        type: "ReactNode[]",
        description: "",
        required: true,
        control: {
          type: "object",
        },
      },
      {
        name: "offset",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "scaleFactor",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { offset: 0, scaleFactor: 0 } }],
  },

  {
    slug: "code-comparison",
    title: "CodeComparison",
    category: "Misc",
    description: "",
    component: Demos.CodeComparisonDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "beforeCode",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "afterCode",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "language",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "filename",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      { name: "Default", args: { beforeCode: "", afterCode: "", language: "", filename: "" } },
    ],
  },

  {
    slug: "confetti-side-cannons",
    title: "ConfettiSideCannons",
    category: "Misc",
    description: "",
    component: Demos.ConfettiSideCannonsDemo ?? ComponentPlaceholder,
    props: [],
  },

  {
    slug: "cool-mode",
    title: "CoolMode",
    category: "Misc",
    description: "",
    component: Demos.CoolModeDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { children: "Example" } }],
  },

  {
    slug: "custom-pointer",
    title: "CustomPointer",
    category: "Misc",
    description: "",
    component: Demos.CustomPointerDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "cursorSize",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "cursorColor",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "trailLength",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { cursorSize: 0, cursorColor: "", trailLength: 0 } }],
  },

  {
    slug: "device-mockups",
    title: "DeviceMockups",
    category: "Misc",
    description: "",
    component: Demos.DeviceMockupsDemo ?? ComponentPlaceholder,
    props: [],
  },

  {
    slug: "file-tree",
    title: "FileTree",
    category: "Misc",
    description: "",
    component: Demos.FileTreeDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "data",
        type: "FileNode[]",
        description: "",
        required: true,
        control: {
          type: "object",
        },
      },
      {
        name: "onFileClick",
        type: "(file: FileNode) => void",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
      {
        name: "node",
        type: "FileNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "level",
        type: "number",
        description: "",
        required: true,
        control: {
          type: "number",
        },
      },
      {
        name: "onFileClick",
        type: "(file: FileNode) => void",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
    ],
    stories: [{ name: "Default", args: { level: 0 } }],
  },

  {
    slug: "follower-pointer",
    title: "FollowerPointer",
    category: "Misc",
    description: "",
    component: Demos.FollowerPointerDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "cardContent",
        type: "ReactNode[]",
        description: "",
        required: true,
        control: {
          type: "object",
        },
      },
    ],
  },

  {
    slug: "logo-slider",
    title: "LogoSlider",
    category: "Misc",
    description: "",
    component: ComponentPlaceholder,
    props: [
      {
        name: "logos",
        type: "ReactNode[]",
        description: "",
        required: true,
        control: {
          type: "object",
        },
      },
      {
        name: "direction",
        type: "left | right",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["left", "right"],
        },
      },
      {
        name: "speed",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "pauseOnHover",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { speed: 0, pauseOnHover: false, className: "" } }],
  },

  {
    slug: "neon-gradient-card",
    title: "NeonGradientCard",
    category: "Misc",
    description: "",
    component: Demos.NeonGradientCardDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "borderSize",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "borderRadius",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "neonColors",
        type: "{ first: string; second: string; third?: string; fourth?: string }",
        description: "",
        required: false,
        control: {
          type: "object",
        },
      },
    ],
    stories: [{ name: "Default", args: { borderSize: 0, borderRadius: 0 } }],
  },

  {
    slug: "pixel-trail",
    title: "PixelTrail",
    category: "Misc",
    description: "",
    component: Demos.PixelTrailDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "pixelSize",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "fadeDuration",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "color",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      { name: "Default", args: { pixelSize: 0, fadeDuration: 0, color: "", children: "Example" } },
    ],
  },

  {
    slug: "scroll-progress",
    title: "ScrollProgress",
    category: "Misc",
    description: "",
    component: Demos.ScrollProgressDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "position",
        type: "top | bottom",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["top", "bottom"],
        },
      },
    ],
  },

  {
    slug: "scroll-progressive-blur",
    title: "ScrollProgressiveBlur",
    category: "Misc",
    description: "",
    component: Demos.ScrollProgressiveBlurDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "blurAmount",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "fadeDistance",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { children: "Example", blurAmount: 0, fadeDistance: 0 } }],
  },

  {
    slug: "smooth-scroll",
    title: "SmoothScroll",
    category: "Misc",
    description: "",
    component: ComponentPlaceholder,
    props: [],
  },

  {
    slug: "stacked-logos",
    title: "StackedLogos",
    category: "Misc",
    description: "",
    component: ComponentPlaceholder,
    props: [
      {
        name: "items",
        type: "ReactNode[]",
        description: "",
        required: true,
        control: {
          type: "object",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { className: "" } }],
  },

  {
    slug: "animated-theme-toggler",
    title: "AnimatedThemeToggler",
    category: "Feedback",
    description: "",
    component: Demos.AnimatedThemeTogglerDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "defaultTheme",
        type: "light | dark",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["light", "dark"],
        },
      },
      {
        name: "onThemeChange",
        type: "(theme: string) => void",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
    ],
  },

  {
    slug: "command-menu",
    title: "CommandMenu",
    category: "Feedback",
    description: "",
    component: Demos.CommandMenuDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "open",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
      {
        name: "placeholder",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "commands",
        type: "Array",
        description: "",
        required: false,
        control: {
          type: "object",
        },
      },
    ],
    stories: [{ name: "Default", args: { open: false, placeholder: "" } }],
  },

  {
    slug: "percent-loader",
    title: "PercentLoader",
    category: "Feedback",
    description: "",
    component: Demos.PercentLoaderDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "onComplete",
        type: "() => void",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
      {
        name: "duration",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { duration: 0, className: "" } }],
  },

  {
    slug: "reveal-loader",
    title: "RevealLoader",
    category: "Feedback",
    description: "",
    component: Demos.RevealLoaderDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "Content to reveal",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "loading",
        type: "boolean",
        description: "Loading state",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "duration",
        type: "number",
        description: "Duration of reveal animation in seconds",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: { children: "Example", loading: false, duration: 0, className: "" },
      },
    ],
  },

  {
    slug: "skeleton",
    title: "Skeleton",
    category: "Feedback",
    description: "",
    component: Demos.SkeletonDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "variant",
        type: "text | circular | rectangular | rounded",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["text", "circular", "rectangular", "rounded"],
        },
      },
      {
        name: "animation",
        type: "pulse | wave | none",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["pulse", "wave", "none"],
        },
      },
      {
        name: "width",
        type: "string | number",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["string", "number"],
        },
      },
      {
        name: "height",
        type: "string | number",
        description: "",
        required: false,
        control: {
          type: "select",
          options: ["string", "number"],
        },
      },
    ],
    stories: [{ name: "Default", args: { width: "", height: "" } }],
  },

  {
    slug: "smart-input",
    title: "SmartInput",
    category: "Feedback",
    description: "",
    component: Demos.SmartInputDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "label",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "error",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "isLoading",
        type: "boolean",
        description: "",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "leftIcon",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "icon",
        },
      },
      {
        name: "onClear",
        type: "() => void",
        description: "",
        required: false,
        control: {
          type: "none",
        },
      },
    ],
    stories: [{ name: "Default", args: { label: "", error: "", isLoading: false } }],
  },

  {
    slug: "theme-toggle",
    title: "ThemeToggle",
    category: "Feedback",
    description: "",
    component: Demos.ThemeToggleDemo ?? ComponentPlaceholder,
    props: [],
  },

  {
    slug: "custom-cursor",
    title: "CustomCursor",
    category: "Interaction",
    description: "",
    component: Demos.CustomCursorDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "color",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { className: "", color: "" } }],
  },

  {
    slug: "hover-reveal-card",
    title: "HoverRevealCard",
    category: "Interaction",
    description: "",
    component: Demos.HoverRevealCardDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "title",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "subtitle",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "image",
        type: "string",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: { title: "", subtitle: "", image: "", children: "Example", className: "" },
      },
    ],
  },

  {
    slug: "magnetic-wrapper",
    title: "MagneticWrapper",
    category: "Interaction",
    description: "",
    component: Demos.MagneticWrapperDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "intensity",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "range",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [
      { name: "Default", args: { children: "Example", className: "", intensity: 0, range: 0 } },
    ],
  },

  {
    slug: "fade-in",
    title: "FadeIn",
    category: "Animation",
    description: "",
    component: Demos.FadeInDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "",
        required: true,
        control: {
          type: "text",
        },
      },
      {
        name: "delay",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "duration",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      { name: "Default", args: { children: "Example", delay: 0, duration: 0, className: "" } },
    ],
  },

  {
    slug: "orbiting-dots",
    title: "OrbitingDots",
    category: "Animation",
    description: "",
    component: Demos.OrbitingDotsDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "count",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "dotSize",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "color",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "speed",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "radius",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [{ name: "Default", args: { count: 0, dotSize: 0, color: "", speed: 0, radius: 0 } }],
  },

  {
    slug: "pixelated-image-trail",
    title: "PixelatedImageTrail",
    category: "Animation",
    description: "",
    component: Demos.PixelTrailDemo ?? ComponentPlaceholder,
    props: [],
  },

  {
    slug: "snow",
    title: "Snow",
    category: "Animation",
    description: "",
    component: Demos.SnowDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "size",
        type: "number",
        description: "",
        required: false,
        control: {
          type: "number",
        },
      },
      {
        name: "className",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { size: 0, className: "" } }],
  },

  {
    slug: "android",
    title: "Android",
    category: "Mocks",
    description: "",
    component: ComponentPlaceholder,
    props: [
      {
        name: "src",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { src: "" } }],
  },

  {
    slug: "iphone",
    title: "Iphone",
    category: "Mocks",
    description: "",
    component: ComponentPlaceholder,
    props: [
      {
        name: "src",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { src: "" } }],
  },

  {
    slug: "safari",
    title: "Safari",
    category: "Mocks",
    description: "",
    component: Demos.DeviceMockupsDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "url",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "src",
        type: "string",
        description: "",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [{ name: "Default", args: { url: "", src: "" } }],
  },

  {
    slug: "component-page-skeleton",
    title: "ComponentPageSkeleton",
    category: "Skeletons",
    description: "",
    component: Demos.ComponentPageSkeletonDemo ?? ComponentPlaceholder,
    props: [],
  },

  {
    slug: "data-table",
    title: "DataTable",
    category: "Core",
    description: "A powerful data table component with sorting, filtering, pagination, and row selection built on @tanstack/react-table.",
    component: Demos.DataTableDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "columns",
        type: "ColumnDef<TData, TValue>[]",
        description: "Array of column definitions from @tanstack/react-table",
        required: true,
        control: {
          type: "object",
        },
      },
      {
        name: "data",
        type: "TData[]",
        description: "Array of data objects to display in the table",
        required: true,
        control: {
          type: "object",
        },
      },
      {
        name: "enableRowSelection",
        type: "boolean",
        description: "Enable row selection with checkboxes",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "enableSorting",
        type: "boolean",
        description: "Enable column sorting functionality",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "enableFiltering",
        type: "boolean",
        description: "Enable column filtering functionality",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "enablePagination",
        type: "boolean",
        description: "Enable pagination controls",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "dense",
        type: "boolean",
        description: "Use compact padding for a denser table layout",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "striped",
        type: "boolean",
        description: "Alternate row background colors for better readability",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "stickyHeader",
        type: "boolean",
        description: "Make table header sticky when scrolling",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes for the table container",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "pageSize",
        type: "number",
        description: "Initial number of rows per page",
        required: false,
        control: {
          type: "number",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: {
          enableRowSelection: false,
          enableSorting: true,
          enableFiltering: true,
          enablePagination: true,
          dense: false,
          striped: false,
          stickyHeader: false,
          pageSize: 10,
        },
      },
    ],
  },

  {
    slug: "date-picker",
    title: "DatePicker",
    category: "Core",
    description: "A calendar date picker component with keyboard navigation and localization support using react-day-picker.",
    component: Demos.DatePickerDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "value",
        type: "Date",
        description: "The currently selected date (controlled)",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "onChange",
        type: "(date: Date | undefined) => void",
        description: "Callback fired when the date changes",
        required: false,
        control: {
          type: "none",
        },
      },
      {
        name: "placeholder",
        type: "string",
        description: "Placeholder text when no date is selected",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "disabled",
        type: "boolean",
        description: "Whether the date picker is disabled",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes for the trigger button",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: {
          placeholder: "Pick a date",
          disabled: false,
          className: "",
        },
      },
    ],
  },

  {
    slug: "combobox",
    title: "Combobox",
    category: "Core",
    description: "A searchable dropdown/autocomplete component with keyboard navigation using cmdk.",
    component: Demos.ComboboxDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "options",
        type: "ComboboxOption[]",
        description: "Array of selectable options with value and label",
        required: true,
        control: {
          type: "object",
        },
      },
      {
        name: "value",
        type: "string",
        description: "The currently selected value (controlled)",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "onChange",
        type: "(value: string) => void",
        description: "Callback fired when selection changes",
        required: false,
        control: {
          type: "none",
        },
      },
      {
        name: "placeholder",
        type: "string",
        description: "Placeholder text for the search input",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "emptyText",
        type: "string",
        description: "Text to display when no results found",
        required: false,
        control: {
          type: "text",
        },
      },
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes for the trigger button",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: {
          placeholder: "Search...",
          emptyText: "No results found.",
          className: "",
        },
      },
    ],
  },

  {
    slug: "aria-live-region",
    title: "AriaLiveRegion",
    category: "Utility",
    description: "An accessible live region for announcing dynamic content changes to screen readers.",
    component: Demos.AriaLiveRegionDemo ?? ComponentPlaceholder,
    props: [
      {
        name: "mode",
        type: "polite | assertive | off",
        description: "The politeness level of announcements (polite waits, assertive interrupts)",
        required: false,
        control: {
          type: "select",
          options: ["polite", "assertive", "off"],
        },
      },
      {
        name: "atomic",
        type: "boolean",
        description: "Whether updates should be read as one atomic unit",
        required: false,
        control: {
          type: "boolean",
        },
      },
      {
        name: "relevant",
        type: "additions | removals | text | all | additions text",
        description: "What type of changes trigger announcements",
        required: false,
        control: {
          type: "select",
          options: ["additions", "removals", "text", "all", "additions text"],
        },
      },
      {
        name: "children",
        type: "ReactNode",
        description: "Content to announce to screen readers",
        required: false,
        control: {
          type: "text",
        },
      },
    ],
    stories: [
      {
        name: "Default",
        args: {
          mode: "polite",
          atomic: true,
          relevant: "additions text",
          children: "",
        },
      },
    ],
  },
]
export function getComponentBySlug(slug: string) {
  const component = components.find((c) => c.slug === slug)
  if (component) return component

  const doc = docs.find((d) => d.slug === slug)
  if (doc) {
    return {
      ...doc,
      category: "Docs",
      props: [],
      stories: [],
    }
  }

  const hook = hooks.find((h) => h.slug === slug)
  if (hook) {
    return {
      slug: hook.slug,
      title: hook.title,
      category: "Hooks",
      description: hook.description,
      component: ComponentPlaceholder,
      props: hook.data.props
        ? hook.data.props.map((p) => ({
          name: p.name,
          type: p.type,
          defaultValue: p.default,
          description: p.description,
          control: { type: "text" } as const,
        }))
        : [],
      stories: [
        {
          name: "Usage",
          args: {
            example: hook.data.examples[0],
          },
        },
      ],
    }
  }

  return undefined
}

export function getAllComponentSlugs() {
  return [...components.map((c) => c.slug), ...docs.map((d) => d.slug), ...hooks.map((h) => h.slug)]
}

export function getSidebarData() {
  const categories: Record<string, { title: string; slug: string }[]> = {}

  // Process components
  components.forEach((c) => {
    if (!categories[c.category]) {
      categories[c.category] = []
    }
    categories[c.category].push({ title: c.title, slug: c.slug })
  })

  // Process docs
  docs.forEach((d) => {
    const cat = "Docs"
    if (!categories[cat]) categories[cat] = []
    categories[cat].push({ title: d.title, slug: d.slug })
  })

  // Process hooks
  hooks.forEach((h) => {
    const cat = "Hooks"
    if (!categories[cat]) categories[cat] = []
    categories[cat].push({ title: h.title, slug: h.slug })
  })

  const titleCase = (str: string) => str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())

  // Convert to array and sort keys if needed (though Object.entries order is not guaranteed stable across all environments, it's usually insertion order)
  // We might want to enforce a specific order: Docs, Core, ...
  const order = [
    "Docs",
    "Core",
    "Layout",
    "Text",
    "Backgrounds",
    "Buttons",
    "Special",
    "Feedback",
    "Interaction",
    "Utils",
    "Hooks",
  ]

  return Object.entries(categories)
    .sort((a, b) => {
      const indexA = order.indexOf(a[0])
      const indexB = order.indexOf(b[0])
      // If both are in order list, sort by index
      if (indexA !== -1 && indexB !== -1) return indexA - indexB
      // If only A is in list, A comes first
      if (indexA !== -1) return -1
      // If only B is in list, B comes first
      if (indexB !== -1) return 1
      // Otherwise sort alphabetically
      return a[0].localeCompare(b[0])
    })
    .map(([name, items]) => ({
      name,
      items: items.sort((a, b) => a.title.localeCompare(b.title)),
    }))
}
