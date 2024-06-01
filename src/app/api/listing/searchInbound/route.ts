import { ListingRepository, Sort } from "@/db/listingRepository";
import { NextRequest, NextResponse } from "next/server";

const listingRepository = new ListingRepository();

export const GET = async (request: NextRequest) => {
    const qParam = request.nextUrl.searchParams.get("q");

    const northEastLng = parseFloat(
        request.nextUrl.searchParams.get("northEastLng")!
    );
    const northEastLat = parseFloat(
        request.nextUrl.searchParams.get("northEastLat")!
    );
    const southWestLng = parseFloat(
        request.nextUrl.searchParams.get("southWestLng")!
    );
    const southWestLat = parseFloat(
        request.nextUrl.searchParams.get("southWestLat")!
    );

    const limit = parseInt(request.nextUrl.searchParams.get("limit")!);
    const sort = request.nextUrl.searchParams.get("sort");
    const searchAfter = request.nextUrl.searchParams.get("searchAfter");

    const result = await listingRepository.searchInbound(
        qParam!,
        limit,
        {
            type: "Point",
            coordinates: [northEastLng, northEastLat],
        },
        {
            type: "Point",
            coordinates: [southWestLng, southWestLat],
        },
        sort! as Sort,
        searchAfter ?? undefined
    );

    return NextResponse.json(result, { status: 200 });
};
