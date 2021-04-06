export function OnPropertyChange<T= any>(methodName: string): any {
  return (target: T, propertyName: keyof T): any => {
  }
}
