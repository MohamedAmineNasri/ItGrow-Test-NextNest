-- CreateTable
CREATE TABLE "Work" (
    "id" SERIAL NOT NULL,
    "images" TEXT[],

    CONSTRAINT "Work_pkey" PRIMARY KEY ("id")
);
