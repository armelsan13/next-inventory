-- CreateTable
CREATE TABLE "Equipments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "_EquipmentsToTags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_EquipmentsToTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Equipments" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_EquipmentsToTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tags" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_EquipmentsToTags_AB_unique" ON "_EquipmentsToTags"("A", "B");

-- CreateIndex
CREATE INDEX "_EquipmentsToTags_B_index" ON "_EquipmentsToTags"("B");
