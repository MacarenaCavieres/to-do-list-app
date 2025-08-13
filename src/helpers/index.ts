export function getTodayDate(mockDate?: string) {
    return mockDate ? new Date(mockDate) : new Date();
}
