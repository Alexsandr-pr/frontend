

const _API_URL = process.env._API_URL;


export const getImageLink = (url: string) => {
    return _API_URL + url;
}


export function formatIsoDate(isoDate: string, locale: string = "en-US"): string {
    try {
        const date = new Date(isoDate);
    
        if (isNaN(date.getTime())) {
            throw new Error("Некорректная дата");
        }
    
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };
    
        return date.toLocaleDateString(locale, options);
    } catch (error) {
        console.error("Ошибка форматирования даты:", error);
        return "Invalid date";
    }
}
  
  