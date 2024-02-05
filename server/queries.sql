

CREATE TABLE employee (
id SERIAL PRIMARY KEY,
last_name VARCHAR(60),
first_name VARCHAR(60),
email VARCHAR(80),
privilege VARCHAR(15),
pass VARCHAR(50),
hiring_date DATE NOT NULL DEFAULT CURRENT_DATE,
active BOOLEAN NOT NULL DEFAULT TRUE
);


CREATE TABLE attendance (
    id SERIAL PRIMARY KEY,
    morning TIME NOT NULL,
    afternoon TIME NOT NULL,
    workday DATE NOT NULL,
    employee_id INTEGER REFERENCES employee(id)
);

SELECT EXISTS (
SELECT 1
FROM pg_tables
WHERE tablename = ''
) AS table_existence;


-- SELECT last_name, email, morning, afternoon, workday
-- FROM attendance
-- INNER JOIN employee ON attendance.employee_id = employee.id;

SELECT attendance.id, first_name, email, morning, afternoon, workday
FROM attendance
INNER JOIN employee ON attendance.employee_id = employee.id;
