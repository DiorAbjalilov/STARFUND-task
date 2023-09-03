-- CreateTable
CREATE TABLE "fight" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "nationality" TEXT NOT NULL,
    "last_name" TEXT,
    "team" TEXT,
    "category" TEXT,
    "wins" INTEGER,
    "losses" INTEGER,
    "knockout" INTEGER,
    "eventsId" INTEGER,
    "fightersId" INTEGER,
    "rankingsId" INTEGER,

    CONSTRAINT "fight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "promotion" TEXT,
    "fights_count" INTEGER NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fighters" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "location" TEXT,

    CONSTRAINT "fighters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rankings" (
    "id" SERIAL NOT NULL,
    "rank" INTEGER NOT NULL,

    CONSTRAINT "rankings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fight" ADD CONSTRAINT "fight_eventsId_fkey" FOREIGN KEY ("eventsId") REFERENCES "events"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fight" ADD CONSTRAINT "fight_fightersId_fkey" FOREIGN KEY ("fightersId") REFERENCES "fighters"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fight" ADD CONSTRAINT "fight_rankingsId_fkey" FOREIGN KEY ("rankingsId") REFERENCES "rankings"("id") ON DELETE SET NULL ON UPDATE CASCADE;
