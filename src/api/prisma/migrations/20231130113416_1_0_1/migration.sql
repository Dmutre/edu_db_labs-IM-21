/*
  Warnings:

  - Added the required column `Organization_list_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_roleId_fkey`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `Organization_list_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_Organization_list_id_fkey` FOREIGN KEY (`Organization_list_id`) REFERENCES `organizations_list`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
