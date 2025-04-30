-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "roles" TEXT[] DEFAULT ARRAY['user']::TEXT[];
