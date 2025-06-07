-- DropForeignKey
ALTER TABLE "EmailContact" DROP CONSTRAINT "EmailContact_emailListId_fkey";

-- AddForeignKey
ALTER TABLE "EmailContact" ADD CONSTRAINT "EmailContact_emailListId_fkey" FOREIGN KEY ("emailListId") REFERENCES "EmailList"("id") ON DELETE CASCADE ON UPDATE CASCADE;
