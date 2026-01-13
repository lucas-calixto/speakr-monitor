CREATE TABLE `AdmUsers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255),
	`recoveryToken` text,
	`isActive` boolean NOT NULL DEFAULT true,
	`createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `AdmUsers_id` PRIMARY KEY(`id`),
	CONSTRAINT `AdmUsers_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `CallsHistory` (
	`id` int AUTO_INCREMENT NOT NULL,
	`status` varchar(255) NOT NULL,
	`queue` varchar(255) NOT NULL,
	`extension` varchar(255) NOT NULL,
	`uniqueId` varchar(255) NOT NULL,
	`linkId` varchar(255) NOT NULL,
	`phoneNumber` varchar(255),
	`showOnPanel` boolean NOT NULL DEFAULT true,
	`updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `CallsHistory_id` PRIMARY KEY(`id`),
	CONSTRAINT `CallsHistory_linkId_unique` UNIQUE(`linkId`)
);
--> statement-breakpoint
CREATE TABLE `Cdr` (
	`id` int AUTO_INCREMENT NOT NULL,
	`linkedid` int NOT NULL,
	`callDate` datetime,
	`source` varchar(255),
	`destination` varchar(255),
	`channel` varchar(255),
	`queue` varchar(255),
	`queueName` varchar(255),
	`agent` varchar(255),
	`direction` varchar(255),
	`status` varchar(255),
	`recordingFile` varchar(255),
	`duration` int,
	`waitingTime` int,
	`serviceTime` int,
	`createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`clientId` int NOT NULL,
	CONSTRAINT `Cdr_id` PRIMARY KEY(`id`),
	CONSTRAINT `Cdr_linkedid_unique` UNIQUE(`linkedid`)
);
--> statement-breakpoint
CREATE TABLE `cdr_lucas` (
	`linkedid` varchar(255) NOT NULL,
	`calldate` datetime,
	`source` varchar(255),
	`destination` varchar(255),
	`did` varchar(255),
	`channel` varchar(255),
	`dcontext` varchar(255),
	`queue` varchar(255),
	`direction` varchar(255),
	`agente` varchar(255),
	`agenteName` varchar(255),
	`status` varchar(255),
	`recordingFile` varchar(255),
	`duration` int,
	`waitingTime` int,
	`sync` int,
	CONSTRAINT `cdr_lucas_linkedid_unique` UNIQUE(`linkedid`)
);
--> statement-breakpoint
CREATE TABLE `Clients` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`cpfCnpj` varchar(255) NOT NULL,
	`type` varchar(255) NOT NULL,
	`phoneNumber` varchar(255) NOT NULL,
	`street` varchar(255) NOT NULL,
	`district` varchar(255) NOT NULL,
	`number` varchar(255),
	`city` varchar(255) NOT NULL,
	`zipCode` varchar(255) NOT NULL,
	`state` varchar(255) NOT NULL,
	`isActive` boolean NOT NULL,
	`observation` text,
	`createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `Clients_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `Contracts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`startedAt` datetime NOT NULL,
	`finishedAt` datetime NOT NULL,
	`createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`clientId` int NOT NULL,
	CONSTRAINT `Contracts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `Devices` (
	`id` int AUTO_INCREMENT NOT NULL,
	`description` varchar(255) NOT NULL,
	`serialNumber` varchar(255) NOT NULL,
	`mac` varchar(255) NOT NULL,
	`brand` varchar(255) NOT NULL,
	`model` varchar(255) NOT NULL,
	`isNew` boolean NOT NULL,
	`status` varchar(255) NOT NULL,
	`createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`contractId` int NOT NULL,
	CONSTRAINT `Devices_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `Extensions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`ramal` varchar(255) NOT NULL,
	`description` varchar(255),
	`password` varchar(255),
	`isActive` boolean NOT NULL DEFAULT true,
	`createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`clientId` int NOT NULL,
	CONSTRAINT `Extensions_id` PRIMARY KEY(`id`),
	CONSTRAINT `Extensions_ramal_unique` UNIQUE(`ramal`)
);
--> statement-breakpoint
CREATE TABLE `Invoices` (
	`id` int AUTO_INCREMENT NOT NULL,
	`barcode` varchar(255) NOT NULL,
	`value` float NOT NULL,
	`status` varchar(255) NOT NULL,
	`dueDate` datetime NOT NULL,
	`fileName` varchar(255) NOT NULL,
	`createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`contractId` int NOT NULL,
	CONSTRAINT `Invoices_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `Numbers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`number` varchar(255) NOT NULL,
	`description` varchar(255),
	`isActive` boolean NOT NULL DEFAULT true,
	`createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`clientId` int NOT NULL,
	CONSTRAINT `Numbers_id` PRIMARY KEY(`id`),
	CONSTRAINT `Numbers_number_unique` UNIQUE(`number`)
);
--> statement-breakpoint
CREATE TABLE `Queues` (
	`id` int AUTO_INCREMENT NOT NULL,
	`code` varchar(255) NOT NULL,
	`description` varchar(255),
	`isActive` boolean NOT NULL DEFAULT true,
	`createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`clientId` int NOT NULL,
	CONSTRAINT `Queues_id` PRIMARY KEY(`id`),
	CONSTRAINT `Queues_code_unique` UNIQUE(`code`)
);
--> statement-breakpoint
CREATE TABLE `Users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`cpf` varchar(255) NOT NULL,
	`phoneNumber` varchar(255) NOT NULL,
	`password` varchar(255),
	`recoveryToken` text,
	`accessType` varchar(255) NOT NULL,
	`isActive` boolean NOT NULL DEFAULT true,
	`createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`clientId` int NOT NULL,
	CONSTRAINT `Users_id` PRIMARY KEY(`id`),
	CONSTRAINT `Users_email_unique` UNIQUE(`email`)
);
