create or alter view UsrVwContactAgeDays
as
select Id as UsrId, Name as UsrName, BirthDate as UsrBirthDate,
DATEDIFF(day, Birthdate, getDate()) as UsrAgeDays
from Contact