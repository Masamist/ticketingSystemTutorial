-- AlterTable
ALTER TABLE `ticket` ADD COLUMN `assignedToUserId` INTEGER NULL;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `username` ENUM('OPEN', 'STARTED', 'CLOSED') NOT NULL,
    `password` ENUM('OPEN', 'STARTED', 'CLOSED') NOT NULL,
    `role` ENUM('ADMIN', 'TECH', 'USER') NOT NULL DEFAULT 'USER',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
