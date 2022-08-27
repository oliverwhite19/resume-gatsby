import type { Education, Prisma } from 'prisma/generated/client';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.ico';

export type Currency = {
    name: string;
    value: string;
    countryCode: string;
    symbolLeft?: string;
    symbolRight?: string;
};

type EmploymentWithPositions = Prisma.EmploymentGetPayload<{
    include: { positions: true };
}>;

type EducationWithTitle = {
    title: string;
    list: Array<Education>;
};
