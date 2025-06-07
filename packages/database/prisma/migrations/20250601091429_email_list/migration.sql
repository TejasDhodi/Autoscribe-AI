-- CreateTable
CREATE TABLE "EmailList" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "uploadedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmailList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailContact" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailListId" TEXT NOT NULL,
    "name" TEXT,
    "meta" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmailContact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "EmailList_workspaceId_idx" ON "EmailList"("workspaceId");

-- CreateIndex
CREATE INDEX "EmailList_uploadedById_idx" ON "EmailList"("uploadedById");

-- CreateIndex
CREATE INDEX "EmailContact_emailListId_idx" ON "EmailContact"("emailListId");

-- AddForeignKey
ALTER TABLE "EmailList" ADD CONSTRAINT "EmailList_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailList" ADD CONSTRAINT "EmailList_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailContact" ADD CONSTRAINT "EmailContact_emailListId_fkey" FOREIGN KEY ("emailListId") REFERENCES "EmailList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
