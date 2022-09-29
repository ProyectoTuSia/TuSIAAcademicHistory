DROP schema if exists TuSIA_historiaAcademica_db;
CREATE schema TuSIA_historiaAcademica_db;
USE TuSIA_historiaAcademica_db;

CREATE TABLE `TuSIA_historiaAcademica_db`.`subject` (
  `code` INT NOT NULL,
  `name` VARCHAR(60) NOT NULL,
  `credits` TINYINT NOT NULL,
  PRIMARY KEY (`code`));
  
  CREATE TABLE `TuSIA_historiaAcademica_db`.`career_credits` (
  `code` INT NOT NULL,
  `fundamentacion_obligatoria` TINYINT NOT NULL,
  `fundamentacion_optativa` TINYINT NOT NULL,
  `disciplinar_obligatoria` TINYINT NOT NULL,
  `disciplinar_optativa` TINYINT NOT NULL,
  `libre_eleccion` TINYINT NOT NULL,
  `nivelacion` TINYINT NOT NULL,
  `trabajo_de_grado` TINYINT NOT NULL,
  `total` INT NOT NULL,
  PRIMARY KEY (`code`));
  
  CREATE TABLE `TuSIA_historiaAcademica_db`.`story` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(30) NOT NULL,
  `faculty` VARCHAR(45) NOT NULL,
  `career_code` INT NOT NULL,
  `career_name` VARCHAR(45) NOT NULL,
  `state` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `career_code_idx` (`career_code` ASC),
  FOREIGN KEY (`career_code`)
    REFERENCES `TuSIA_historiaAcademica_db`.`career_credits` (`code`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
CREATE TABLE `TuSIA_historiaAcademica_db`.`averages` (
  `id_story`BIGINT NOT NULL,
  `PAPA` FLOAT NULL,
  `PA` FLOAT NULL,
  `PAPPI` FLOAT NULL,
  PRIMARY KEY (`id_story`),
  CONSTRAINT `id_story (averages)`
    FOREIGN KEY (`id_story`)
    REFERENCES `TuSIA_historiaAcademica_db`.`story` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
CREATE TABLE `TuSIA_historiaAcademica_db`.`student_subject` (
  `subject_code` INT NOT NULL,
  `id_story`BIGINT NOT NULL,
  `tipology` VARCHAR(45) NOT NULL,
  `period` VARCHAR(30) NOT NULL,
  `grade` FLOAT NOT NULL,
  `outcome` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`subject_code`, `id_story`, `period`),
  CONSTRAINT `subject_code`
    FOREIGN KEY (`subject_code`)
    REFERENCES `TuSIA_historiaAcademica_db`.`subject` (`code`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_story (student_subject)`
    FOREIGN KEY (`id_story`)
    REFERENCES `TuSIA_historiaAcademica_db`.`story` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
CREATE TABLE `TuSIA_historiaAcademica_db`.`credit_summary` (
  `id_story` BIGINT NOT NULL,
  `surplus_credits` TINYINT NOT NULL DEFAULT 0,
  `canceled_credits` TINYINT NOT NULL DEFAULT 0,
  `completion_percentage` FLOAT NOT NULL DEFAULT 0.0,
  `aditional_credits` TINYINT NOT NULL DEFAULT 0,
  `credit_quota` SMALLINT NOT NULL,
  `available_credits` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_story`),
  INDEX `id_story (credit_summary)_idx` (`id_story` ASC),
  CONSTRAINT `id_story (credit_summary)`
    FOREIGN KEY (`id_story`)
    REFERENCES `TuSIA_historiaAcademica_db`.`story` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `TuSIA_historiaAcademica_db`.`student_credits_approved` (
  `id_story` BIGINT NOT NULL,
  `fundamentacion_optativa_approved` TINYINT NOT NULL DEFAULT 0,
  `fundamentacion_obligatoria_approved` TINYINT NOT NULL DEFAULT 0,
  `disciplinar_optativa_approved` TINYINT NOT NULL DEFAULT 0,
  `disciplinar_obligatoria_approved` TINYINT NOT NULL DEFAULT 0,
  `nivelacion_approved` TINYINT NOT NULL DEFAULT 0,
  `trabajo_de_grado_approved` TINYINT NOT NULL DEFAULT 0,
  `libre_eleccion_approved` TINYINT NOT NULL DEFAULT 0,
  `total_approved` SMALLINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_story`),
  CONSTRAINT `id_story (student_credits_approved)`
    FOREIGN KEY (`id_story`)
    REFERENCES `TuSIA_historiaAcademica_db`.`story` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `TuSIA_historiaAcademica_db`.`student_credits_pending` (
  `id_story` BIGINT NOT NULL,
  `fundamentacion_optativa_pending` TINYINT NOT NULL,
  `fundamentacion_obligatoria_pending` TINYINT NOT NULL,
  `disciplinar_optativa_pending` TINYINT NOT NULL,
  `disciplinar_obligatoria_pending` TINYINT NOT NULL,
  `nivelacion_pending` TINYINT NOT NULL,
  `trabajo_de_grado_pending` TINYINT NOT NULL,
  `libre_eleccion_pending` TINYINT NOT NULL,
  `total_pending` SMALLINT NOT NULL,
  PRIMARY KEY (`id_story`),
  CONSTRAINT `id_story (student_credits_pending)`
    FOREIGN KEY (`id_story`)
    REFERENCES `TuSIA_historiaAcademica_db`.`story` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `TuSIA_historiaAcademica_db`.`student_credits_signed` (
  `id_story` BIGINT NOT NULL,
  `fundamentacion_optativa_signed` TINYINT NOT NULL DEFAULT 0,
  `fundamentacion_obligatoria_signed` TINYINT NOT NULL DEFAULT 0,
  `disciplinar_optativa_signed` TINYINT NOT NULL DEFAULT 0,
  `disciplinar_obligatoria_signed` TINYINT NOT NULL DEFAULT 0,
  `nivelacion_signed` TINYINT NOT NULL DEFAULT 0,
  `trabajo_de_grado_signed` TINYINT NOT NULL DEFAULT 0,
  `libre_eleccion_signed` TINYINT NOT NULL DEFAULT 0,
  `total_signed` SMALLINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_story`),
  CONSTRAINT `id_story (student_credits_signed)`
    FOREIGN KEY (`id_story`)
    REFERENCES `TuSIA_historiaAcademica_db`.`story` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `TuSIA_historiaAcademica_db`.`student_credits_taken` (
  `id_story` BIGINT NOT NULL,
  `fundamentacion_optativa_taken` TINYINT NOT NULL DEFAULT 0,
  `fundamentacion_obligatoria_taken` TINYINT NOT NULL DEFAULT 0,
  `disciplinar_optativa_taken` TINYINT NOT NULL DEFAULT 0,
  `disciplinar_obligatoria_taken` TINYINT NOT NULL DEFAULT 0,
  `nivelacion_taken` TINYINT NOT NULL DEFAULT 0,
  `trabajo_de_grado_taken` TINYINT NOT NULL DEFAULT 0,
  `libre_eleccion_taken` TINYINT NOT NULL DEFAULT 0,
  `total_taken` SMALLINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_story`),
  CONSTRAINT `id_story (student_credits_taken)`
    FOREIGN KEY (`id_story`)
    REFERENCES `TuSIA_historiaAcademica_db`.`story` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


INSERT INTO subject (code, name, credits) values(2025971, "Optimización", 3);
INSERT INTO subject (code, name, credits) values(2023498, "Arte y cerebro", 3);
INSERT INTO subject (code, name, credits) values(2015970, "Métodos numéricos", 3);
INSERT INTO subject (code, name, credits) values(2018009, "Psiquiatría I", 2);
INSERT INTO subject (code, name, credits) values(2016353, "Bases de datos", 3);
INSERT INTO subject (code, name, credits) values(2025964, "Matemáticas discretas II", 4);
INSERT INTO subject (code, name, credits) values(2018069, "Contrapunto II", 2);
INSERT INTO subject (code, name, credits) values(1000003, "Álgebra Lineal", 4);
INSERT INTO subject (code, name, credits) values(2015215, "Análisis de sistemas dinámicos", 3);
INSERT INTO subject (code, name, credits) values(2015942, "Aplicaciones de elementos finitos", 3);
INSERT INTO subject (code, name, credits) values(1000004, "Cálculo diferencial", 4);
INSERT INTO subject (code, name, credits) values(1000006, "Cálculo en varias variables", 4);
INSERT INTO subject (code, name, credits) values(1000005, "Cálculo Integral", 4);
INSERT INTO subject (code, name, credits) values(2015711, "Dibujo básico", 3);
INSERT INTO subject (code, name, credits) values(2017257, "Dibujo de Máquinas", 4);


INSERT INTO career_credits (code, fundamentacion_obligatoria, fundamentacion_optativa, disciplinar_obligatoria, disciplinar_optativa, libre_eleccion, nivelacion, trabajo_de_grado, total) 
values(2879, 15, 36, 54, 21, 33, 12, 6, 177);
INSERT INTO career_credits (code, fundamentacion_obligatoria, fundamentacion_optativa, disciplinar_obligatoria, disciplinar_optativa, libre_eleccion, nivelacion, trabajo_de_grado, total) 
values(2547, 50, 8, 80, 6, 36, 12, 6, 198);


INSERT INTO story(username, faculty, career_code, career_name, state) values("sarodriguezca","Facultad de Ingeniería", 2879, "Ingeniería de Sistemas y Computación", "Abierto"); 
INSERT INTO story(username, faculty, career_code, career_name, state) values("pepintopa","Facultad de Ingeniería", 2547, "Ingeniería Mecánica", "Abierto"); 


INSERT INTO averages(id_story, PAPA, PA, PAPPI) values (1, 4.6, 4.6, 4.7);
INSERT INTO averages(id_story, PAPA, PA, PAPPI) values (2, 4.0, 4.2, 4.3);


INSERT INTO student_subject(subject_code,id_story, tipology, period, grade, outcome) values (2025971, 1, "Disciplinar Optativa", "2022-1S",5.0, "aprobada");
INSERT INTO student_subject(subject_code,id_story, tipology, period, grade, outcome) values (2023498, 1, "Libre Elección", "2015-2S",5.0, "aprobada");
INSERT INTO student_subject(subject_code,id_story, tipology, period, grade, outcome) values (2015970, 1, "Fundamentación Optativa", "2021-2S", 4.6, "aprobada");
INSERT INTO student_subject(subject_code,id_story, tipology, period, grade, outcome) values (2018009, 1, "Libre Elección", "2017-2S", 4.9, "aprobada");
INSERT INTO student_subject(subject_code,id_story, tipology, period, grade, outcome) values (2016353, 1, "Disciplinar Obligatoria", "2020-2S", 4.3, "aprobada");
INSERT INTO student_subject(subject_code,id_story, tipology, period, grade, outcome) values (2025964, 1, "Fundamentación Optativa", "2021-1S", 4.6, "aprobada");

INSERT INTO student_subject(subject_code,id_story, tipology, period, grade, outcome) values (1000004, 2, "Fundamentación Obligatoria", "2020-1S",2.8, "reprobada");
INSERT INTO student_subject(subject_code,id_story, tipology, period, grade, outcome) values (1000004, 2, "Fundamentación Obligatoria", "2020-2S",3.0, "aprobada");
INSERT INTO student_subject(subject_code,id_story, tipology, period, grade, outcome) values (1000005, 2, "Fundamentación Obligatoria", "2021-1S",5.0, "aprobada");
INSERT INTO student_subject(subject_code,id_story, tipology, period, grade, outcome) values (1000006, 2, "Fundamentación Obligatoria", "2021-2S",4.6, "aprobada");
INSERT INTO student_subject(subject_code,id_story, tipology, period, grade, outcome) values (2015711, 2, "Fundamentación Obligatoria", "2021-1S",4.0, "aprobada");
INSERT INTO student_subject(subject_code,id_story, tipology, period, grade, outcome) values (2017257, 2, "Disciplinar Obligatoria", "2021-2S",4.0, "aprobada");


INSERT INTO credit_summary(id_story, surplus_credits, canceled_credits,completion_percentage, aditional_credits, credit_quota, available_credits) 
values(1, 0, 0, 78.2, 80, 90, 54);
INSERT INTO credit_summary(id_story, surplus_credits, canceled_credits,completion_percentage, aditional_credits, credit_quota, available_credits) 
values(2, 0, 2, 27.7 , 80, 216, 18);


INSERT INTO student_credits_pending(id_story, fundamentacion_optativa_pending, fundamentacion_obligatoria_pending, disciplinar_optativa_pending, 
disciplinar_obligatoria_pending, nivelacion_pending, trabajo_de_grado_pending, libre_eleccion_pending, total_pending) 
values (1, 0, 0, 6, 24, 0, 6, 0, 36);
INSERT INTO student_credits_approved(id_story, fundamentacion_optativa_approved, fundamentacion_obligatoria_approved, disciplinar_optativa_approved, 
disciplinar_obligatoria_approved, nivelacion_approved, trabajo_de_grado_approved, libre_eleccion_approved, total_approved) 
values (1, 36, 15, 15, 30, 12, 0, 44, 152);
INSERT INTO student_credits_signed(id_story, fundamentacion_optativa_signed, fundamentacion_obligatoria_signed, disciplinar_optativa_signed, 
disciplinar_obligatoria_signed, nivelacion_signed, trabajo_de_grado_signed, libre_eleccion_signed, total_signed) 
values (1, 0, 0, 6, 9, 0, 0, 0, 15);
INSERT INTO student_credits_taken(id_story, fundamentacion_optativa_taken, fundamentacion_obligatoria_taken, disciplinar_optativa_taken, 
disciplinar_obligatoria_taken, nivelacion_taken, trabajo_de_grado_taken, libre_eleccion_taken, total_taken) 
values (1, 36, 15, 15, 30, 12, 0, 44, 152);


INSERT INTO student_credits_pending(id_story, fundamentacion_optativa_pending, fundamentacion_obligatoria_pending, disciplinar_optativa_pending, 
disciplinar_obligatoria_pending, nivelacion_pending, trabajo_de_grado_pending, libre_eleccion_pending, total_pending) 
values (2, 6, 28, 6, 70, 3, 6, 24, 143);
INSERT INTO student_credits_approved(id_story, fundamentacion_optativa_approved, fundamentacion_obligatoria_approved, disciplinar_optativa_approved, 
disciplinar_obligatoria_approved, nivelacion_approved, trabajo_de_grado_approved, libre_eleccion_approved, total_approved) 
values (2, 2, 22, 0, 10, 9, 0, 12, 55);
INSERT INTO student_credits_signed(id_story, fundamentacion_optativa_signed, fundamentacion_obligatoria_signed, disciplinar_optativa_signed, 
disciplinar_obligatoria_signed, nivelacion_signed, trabajo_de_grado_signed, libre_eleccion_signed, total_signed) 
values (2, 0, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO student_credits_taken(id_story, fundamentacion_optativa_taken, fundamentacion_obligatoria_taken, disciplinar_optativa_taken, 
disciplinar_obligatoria_taken, nivelacion_taken, trabajo_de_grado_taken, libre_eleccion_taken, total_taken) 
values (2, 2, 26, 0, 10, 9, 0, 12, 59);
