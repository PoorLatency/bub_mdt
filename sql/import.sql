USE `overextended`;

CREATE TABLE IF NOT EXISTS `bub_mdt_incidents` (
    `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(25) NOT NULL DEFAULT '',
    `details` LONGTEXT NOT NULL,
    `evidence` longtext DEFAULT NULL,
    `officers` longtext NOT NULL,
    `persons` longtext NOT NULL,
    `tags` longtext NOT NULL,
    `addedCrims` longtext NOT NULL,
    `createdAt` datetime NOT NULL,
    `created_by` longtext not NULL,
    PRIMARY KEY (`id`),
) ENGINE = InnoDB;
