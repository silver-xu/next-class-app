import { ListingRepository, Sort } from "@/db/listingRepository";
import { SuburbRepository } from "@/db/suburbRepository";

import { NextRequest, NextResponse } from "next/server";

const suburbRepository = new SuburbRepository();
const listingRepository = new ListingRepository();

export const GET = async (request: NextRequest) => {
    const qParam = request.nextUrl.searchParams.get("q");
    const limit = parseInt(request.nextUrl.searchParams.get("limit")!);

    const suburbParam = request.nextUrl.searchParams.get("suburb");
    const radius = parseInt(request.nextUrl.searchParams.get("radius")!);
    const sort = request.nextUrl.searchParams.get("sort");
    const searchAfter = request.nextUrl.searchParams.get("searchAfter");

    if (!qParam ?? !suburbParam) {
        return NextResponse.json([], { status: 200 });
    }

    const suburb = await suburbRepository.getOne(suburbParam!);

    if (!suburb) {
        return NextResponse.json([], { status: 200 });
    }

    const result = await listingRepository.searchNearby(
        qParam!,
        limit,
        suburb.location,
        radius,
        sort! as Sort,
        searchAfter ?? undefined
    );

    return NextResponse.json(result, { status: 200 });
};
