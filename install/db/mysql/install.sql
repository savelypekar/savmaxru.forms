
CREATE TABLE savmaxru_forms_interview
(
	ID int not null auto_increment,
	ID_AUTHOR int not null ,
	TITLE varchar(255) not null,
	DATE_CREATE varchar(255),
	DATE_EDIT varchar(255),
	VISIBLE boolean,

	PRIMARY KEY(ID)
);

CREATE TABLE savmaxru_forms_question
(
    ID int not null auto_increment,
    TYPE varchar(20) not null ,
    CONTENT varchar(255) not null,
    POSITION int not null ,

    PRIMARY KEY(ID)
);

CREATE TABLE savmaxru_forms_option
(
    ID int not null auto_increment,
    ID_QUESTION int not null ,
    CONTENT varchar(255) not null,
    POSITION int not null ,

    PRIMARY KEY(ID)
);

CREATE TABLE savmaxru_forms_answer_result
(
    ID int not null auto_increment,
    ID_RESULT int not null,
    ID_INTERVIEW int not null ,
    ID_USER int not null,

    PRIMARY KEY(ID)
);

CREATE TABLE savmaxru_forms_answer_to_question
(
    ID int not null auto_increment,
    ID_QUESTION int not null ,
    ID_RESULT int not null ,

    PRIMARY KEY(ID)
);

CREATE TABLE savmaxru_forms_answer_option
(
    ID int not null auto_increment,
    ID_ANSWER int not null ,
    ID_OPTION int not null ,
    CONTENT varchar(255),

    PRIMARY KEY(ID)
);

CREATE TABLE savmaxru_forms_connection_interview_with_question
(
    ID int not null auto_increment,
    ID_INTERVIEW int not null ,
    ID_QUESTION int not null ,

    PRIMARY KEY(ID)
);

CREATE TABLE savmaxru_forms_date_info
(
    ID int not null auto_increment,
    TYPE_OBJECT varchar(255) not null,
    DATE_CREATE varchar(255) not null,
    DATE_CHANGE varchar(255) not null,

    PRIMARY KEY(ID)
);
