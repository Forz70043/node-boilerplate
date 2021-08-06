CREATE TABLE `SYSLOG` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `remote_ip` varchar(15) NOT NULL,
  `forward_ip` varchar(15) NOT NULL,
  `user` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `action` varchar(512) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);


CREATE TABLE `ROLE`(
    `id` int(21) unsigned AUTO_INCREMENT not null,
    `name` varchar(256) not null,
    PRIMARY KEY(`id`)
);


CREATE TABLE `USERS`(
    `id` int(21) unsigned AUTO_INCREMENT not null,
    `name` varchar(256) default null,
    `surname` varchar(256) default null,
    `email` varchar(256) not null,
    `password` varchar(256) not null,
    `photo` text default null,
    'phone' varchar(26) default null,
    'address' varchar(256) default null,
    `gender` tinyint(0) default 0,
    `yearOfBirth` DATE default null,
    `params` varchar(512) default null,
    PRIMARY KEY(`id`)
);
