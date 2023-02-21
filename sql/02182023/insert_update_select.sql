use tour;

-- insert
INSERT INTO equipo(nombre) VALUES('movistar');
INSERT INTO equipo(nombre) VALUES('vodafone');
INSERT INTO equipo(nombre) VALUES('jumbo');
INSERT INTO equipo(nombre) VALUES('emirates');
INSERT INTO equipo(nombre) VALUES('ineos');
INSERT INTO equipo(nombre) VALUES('cofidis');

INSERT INTO categoria(nombre,descripcion) VALUES('montaña','categoria de montaña');
INSERT INTO categoria(nombre,descripcion) VALUES('general','categoria general');

INSERT INTO etapa(kms,importePremio,divisa,categoriaNombre) VALUES(100,10000,'EUR','general');
INSERT INTO etapa(kms,importePremio,divisa,categoriaNombre) VALUES(80,15000,'EUR','montaña');

INSERT INTO ciclista(dorsal,nombre,edad,equipoNombre) VALUES(101, 'ALBERTO', 32, 'movistar');
INSERT INTO ciclista(dorsal,nombre,edad,equipoNombre) VALUES(102, 'JUAN', 30, 'vodafone');
INSERT INTO ciclista(dorsal,nombre,edad,equipoNombre) VALUES(103, 'LAURA', 31, 'movistar');

INSERT INTO equipo_etapa(idEtapa,nombreEquipo,`year`) VALUES(1,'movistar',2022);
INSERT INTO equipo_etapa(idEtapa,nombreEquipo,`year`) VALUES(1,'vodafone',2022);
INSERT INTO equipo_etapa(idEtapa,nombreEquipo,`year`) VALUES(2,'movistar',2023);
INSERT INTO equipo_etapa(idEtapa,nombreEquipo,`year`) VALUES(2,'vodafone',2023);
INSERT INTO equipo_etapa(idEtapa,nombreEquipo,`year`) VALUES(2,'movistar',2022);

-- update
UPDATE equipo SET ciclistaDorsal = 101 WHERE nombre = 'movistar';
UPDATE equipo SET ciclistaDorsal = 102 WHERE nombre = 'vodafone';
UPDATE etapa SET ciclistaGanadorDorsal = 101 WHERE id = 1;
UPDATE etapa SET ciclistaGanadorDorsal = 103 WHERE id = 2;

-- delete
DELETE FROM equipo WHERE nombre = 'equipo3';

-- select
SELECT * FROM equipo;
SELECT * FROM ciclista;
SELECT * FROM etapa;
SELECT * FROM categoria;
SELECT * FROM equipo_etapa;

SELECT * FROM equipo WHERE ciclistaDorsal = 102;
SELECT * FROM ciclista WHERE equipoNombre is null;
SELECT * FROM etapa; 

-- listado nombre del ciclista y importe del premio
SELECT cic.nombre, et.importePremio
FROM ciclista cic JOIN
etapa et ON cic.dorsal = et.ciclistaGanadorDorsal;

-- listado nombre ciclista, equipo pertenece y nombre representante equipo
SELECT cic.nombre, cic.equipoNombre, rep.nombre
FROM
ciclista cic JOIN
equipo e ON cic.equipoNombre = e.nombre JOIN
ciclista rep ON rep.dorsal = e.ciclistaDorsal;

-- listado con nombre ciclista y categoria participado
SELECT distinct cic.nombre, e.categoriaNombre
FROM
ciclista cic JOIN
equipo_etapa ee ON ee.nombreEquipo = cic.equipoNombre JOIN
etapa e ON e.id = ee.idEtapa;

-- listado de ciclistas cuyo nombre comience por alter
SELECT * FROM ciclista WHERE nombre LIKE 'AL%';
SELECT * FROM ciclista WHERE nombre LIKE '%A%';