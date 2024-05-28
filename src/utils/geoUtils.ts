export const degreesToRadians = (degrees: number): number => {
    return (degrees * Math.PI) / 180;
};

export const getDistanceInKms = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
) => {
    const earthRadiusKm = 6371;

    const lat = degreesToRadians(lat2 - lat1);
    const lon = degreesToRadians(lon2 - lon1);

    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);

    const a =
        Math.sin(lat / 2) * Math.sin(lat / 2) +
        Math.sin(lon / 2) * Math.sin(lon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadiusKm * c;
};
