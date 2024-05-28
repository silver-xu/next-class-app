import { SuburbRepository } from "@/db/suburbRepository";
import { NextRequest, NextResponse } from "next/server";

const suburbRepository = new SuburbRepository();

export const GET = async (
    _request: NextRequest,
    { params }: { params: { suburbId: string } }
) => {
    const { suburbId } = params;

    const result = !suburbId ? [] : await suburbRepository.getOne(suburbId);

    return NextResponse.json(result, { status: 200 });
};
