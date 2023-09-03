create table fighters (
    id bigserial primary key,
    firstName varchar(80) not null,
    lastName varchar(80) not null,
    weightClass varchar(80) not null,
    nationality varchar(80) not null,
);

create table events (
    id bigserial primary key,
    name varchar(80) not null,
    degree varchar(80) not null,
    salary numeric(15) not null,
    job_id bigint references job(id)
);

create table fights (
    id bigserial primary key,
    name varchar(80) not null,
    degree varchar(80) not null,
    salary numeric(15) not null,
    job_id bigint references job(id)
);

create table rankings (
    id bigserial primary key,
    name varchar(80) not null,
    degree varchar(80) not null,
    salary numeric(15) not null,
    job_id bigint references job(id)
);