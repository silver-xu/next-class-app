import { SuburbRepository } from "@/db/suburbRepository";
import { NextRequest, NextResponse } from "next/server";

const suburbRepository = new SuburbRepository();

export const GET = async (request: NextRequest) => {
    const q = request.nextUrl.searchParams.get("q");

    const result = !q ? [] : await suburbRepository.search(q!);

    return NextResponse.json(result, { status: 200 });
};
