/*
  Warnings:

  - You are about to drop the `Tool` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Tool` DROP FOREIGN KEY `Tool_id_fkey`;

-- DropTable
DROP TABLE `Tool`;
