/*
  Warnings:

  - You are about to drop the column `isUsed` on the `EmailVerification` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "EmailVerification_isUsed_idx";

-- DropIndex
DROP INDEX "EmailVerification_userId_isUsed_idx";

-- AlterTable
ALTER TABLE "EmailVerification" DROP COLUMN "isUsed",
ADD COLUMN     "verifiedAt" TIMESTAMP(3),
ALTER COLUMN "otp" DROP NOT NULL,
ALTER COLUMN "expiresAt" DROP NOT NULL,
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "createdAt" DROP DEFAULT;

-- CreateIndex
CREATE INDEX "EmailVerification_userId_otp_idx" ON "EmailVerification"("userId", "otp");

-- CreateIndex
CREATE INDEX "EmailVerification_expiresAt_otp_idx" ON "EmailVerification"("expiresAt", "otp");
