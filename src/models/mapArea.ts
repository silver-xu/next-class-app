export interface MapArea {
    fullName: string;
    suburbId: string;
    bounds: {
        northEast: number[];
        southWest: number[];
    };
}
