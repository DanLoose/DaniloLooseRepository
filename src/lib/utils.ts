export function isValidDate(inputDate: string): boolean {
    const date = new Date(inputDate);
    return date instanceof Date && !isNaN(date.valueOf()) && date > new Date();
}
