-- CreateTable
CREATE TABLE "item" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR NOT NULL,
    "description" TEXT,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);

