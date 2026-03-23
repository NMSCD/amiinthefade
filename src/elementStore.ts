type AnyHTMLElement<T extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap> = HTMLElementTagNameMap[T];
export type GlobalElement = AnyHTMLElement | AnyHTMLElement[];

type ElementId = Record<string, string>;

interface ElementIds {
  input?: ElementId;
  output?: ElementId;
}

export interface GlobalElements {
  input?: Record<string, GlobalElement>;
  output?: Record<string, GlobalElement>;
}

const elementIds: ElementIds = {
  input: {
    themeswitcher: 'themeSwitch',
    portalglyphsInput: 'portalglyphsInput',
    delButton: 'delButton',
    submitBtn: 'submitBtnGen',
    resetBtn: 'resetBtnGen',
  },
  output: {
    glyphDisplay: 'glyphDisplay',
    output: 'output',
  },
};

const globalElements: GlobalElements = {};
updateGlobalElements(elementIds);

function updateGlobalElements(object: ElementIds): void {
  for (const entries of Object.entries(object)) {
    const section = entries[0] as keyof ElementIds;
    const obj = entries[1] as ElementId;
    for (const [key, dest] of Object.entries(obj)) {
      const element = getElement(dest);
      if (element == null) continue;
      globalElements[section] ??= {};
      globalElements[section][key] = element;
    }
  }
}

function getElement(dest: string): GlobalElement | null {
  const destElements = Array.from(document.getElementsByName(dest));
  if (destElements.length) return destElements;
  const destElement = document.querySelector(`#${dest}`);
  return destElement;
}

export { globalElements, updateGlobalElements, getElement };
