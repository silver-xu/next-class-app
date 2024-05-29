import { ListingRepository, Sort } from "@/db/listingRepository";
import { SuburbRepository } from "@/db/suburbRepository";

import { NextRequest, NextResponse } from "next/server";

const suburbRepository = new SuburbRepository();
const listingRepository = new ListingRepository();

export const GET = async (request: NextRequest) => {
    const qParam = request.nextUrl.searchParams.get("q");
    const suburbParam = request.nextUrl.searchParams.get("suburb");
    const radius = parseInt(request.nextUrl.searchParams.get("radius")!);
    const sort = request.nextUrl.searchParams.get("sort");

    if (!qParam ?? !suburbParam) {
        return NextResponse.json([], { status: 200 });
    }

    const suburb = await suburbRepository.getOne(suburbParam!);

    if (!suburb) {
        return NextResponse.json([], { status: 200 });
    }

    const result = await listingRepository.search(
        qParam!,
        suburb.location,
        radius,
        sort! as Sort
    );

    return NextResponse.json(result, { status: 200 });
};
