import { ListingRepository } from "@/db/listingRepository";
import { NextRequest, NextResponse } from "next/server";

const listingRepository = new ListingRepository();

export const GET = async (
    _request: NextRequest,
    { params }: { params: { listingId: string } }
) => {
    const { listingId } = params;

    const result = !listingId ? [] : await listingRepository.getOne(listingId);

    return NextResponse.json(result, { status: 200 });
};
