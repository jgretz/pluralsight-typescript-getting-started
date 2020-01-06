export class Utility {
  static getInputValue = (id: string): string => {
    return (document.getElementById(id) as HTMLInputElement)?.value || "";
  };
}
